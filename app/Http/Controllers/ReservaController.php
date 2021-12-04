<?php

namespace App\Http\Controllers;

use App\Models\Paciente;
use App\Models\Profesional;
use App\Models\Reserva;
use App\Models\Venta;
use DateTime;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Facades\App\Flow\Flow;

class ReservaController extends Controller
{

    public function traerreserva($id){

        return Reserva::where('id_reserva', $id)->with('paciente.prevision','servicio.especialidad')->first();

    }

    public function store(Request $request)
    {
        // creamos el paciente o lo actualizamos

        $paciente = Paciente::updateOrCreate(['id_paciente'=>$request->id_paciente],
        [
            'nombres' => $request->nombres,
            'apellidos' => $request->apellidos,
            'email' => $request->email,
            'rut' => $request->rut,
            'celular' => $request->celular,
            'direccion' => $request->direccion,
            'prevension_id' => $request->prevension_id["id_prevension"]
        ]);

        // creamos la reserva

        if($request->codigo){
            $codigo = $request->codigo;
        }else{

            $codigo = uniqid();
        }

        
        $servicio = $request->servicio["id_servicio"];
        

        $reserva = Reserva::updateOrCreate(['id_reserva' => $request->id_reserva],[
            'dia' => $request->dia,
            'hora_inicio' => $request->hora_inicio,
            'hora_fin' => $request->hora_fin,
            'paciente_id'  => $paciente->id_paciente,
            'profesional_id' => $request->profesional["profesional_id_profesional"],
            'estado_id' => 2,
            'codigo' => $codigo,
            'sucursal_id' => $request->sucursal["id_sucursal"],
            'servicio_id' => $servicio
        ]);

        // hacemos el calculo
        $precio = 0;

        if($request->prevension_id["nombre"] == "Fonasa"){
            if($request->servicio["precio_fonasa"]){
                $precio = (int)$request->servicio["precio_fonasa"];
            }else{
                $precio = (int)$request->servicio["precio_particular"];
            }
        }else if($request->prevension_id["nombre"] == "Particular"){

            if($request->servicio["precio_particular"]){
                $precio = (int)$request->servicio["precio_particular"];
            }
        }else{
            if($request->servicio["precio_isapre"]){
                $precio = (int)$request->servicio["precio_isapre"];
            }else{
                $precio = (int)$request->servicio["precio_particular"];
            }
        }

        $subtotal = $precio;

        $iva = round($precio * 0.19);

        $total = $subtotal;

        $venta  = Venta::create([
            'reserva_id' => $reserva->id_reserva ,
            'paciente_id' => $paciente->id_paciente,
            'mediopago_id' => 5,
            'sub_total' => $subtotal,
            'porcentaje_desc' => 0,
            'precio_desc' => 0,
            'iva' => $iva,
            'total' => $total,
            'codigo_boucher' =>null,
            'codigo_bono_fonasa' => null,
            'boleta_honorario' => null,
            'n_honorario' => null,
            'estado_id' => 5,
            'sucursal_id' => $request->sucursal["id_sucursal"]
        ]);

        $urlconfirmacion = "http://reservafron.cl/api/pagos/confirmacion";

        $urlreturn = "http://reservafron.cl/api/pagos/retorno";

        $params = array(

            'commerceOrder' => $codigo,

            'subject' => $request->servicio["nombre"],

            'currency' => 'CLP',

            'amount' => $total,

            'email' => $request->email,

            'paymentMethod' => 9,

            'urlConfirmation' => $urlconfirmacion,

            'urlReturn' => $urlreturn

        );

        $services = 'payment/create';

        $method = "POST";

        

        $response = Flow::send($services,$params,$method);

        $destination = $response['url'].'?token='.$response['token'];

        return ["url" => $destination, "codigo" => $codigo, "subtotal" => $subtotal, "iva" => $iva, "total" => $total];
        
    }

    public function retorno(){

        $token = Flow::read_confirm();


        $params = array(

            'token' => $token

        );

        $services = 'payment/getStatus';

        $method = "GET";

        $response = Flow::send($services,$params,$method);

        if($response["status"] == 2){

            $reserva = Reserva::where('codigo', $response["commerceOrder"])->first();

            Reserva::where('id_reserva', $reserva->id_reserva)->update([
                'estado_id' => 3
            ]);

            $venta = Venta::where('reserva_id', $reserva->id_reserva)->update([
                'estado_id' => 4
            ]);

        return view('pago-exito');

        }else{

            return view('pago-error');
        }
    }

    public function confirmacion(){

        $token = Flow::read_confirm();


        $params = array(

            'token' => $token

        );

        $services = 'payment/getStatus';

        $method = "GET";

        $response = Flow::send($services,$params,$method);

        if($response["status"] == 2){

            $reserva = Reserva::where('codigo', $response["commerceOrder"])->first();

            Reserva::where('id_reserva', $reserva->id_reserva)->update([
                'estado_id' => 3
            ]);

            $venta = Venta::where('reserva_id', $reserva->id_reserva)->update([
                'estado_id' => 4
            ]);

        }
    }

    public function validarhora(Request $request)
    {
        $reservas = Reserva::where([['dia','=',$request->dia],['profesional_id','=',$request->id_profesional],['sucursal_id','=',$request->id_sucursal]])->get();

        $ocupado = 0;


        if($reservas){

            foreach ($reservas as $key => $value) {

              $valid =  $this->checkhora($value["hora_inicio"], $value["hora_fin"], $request->hora);


                if($valid == 1){

                    $ocupado = 1;
                }
            }

            return $ocupado;

        }else{

            return 0;
        }

    }

    public function validarhoraprofesional(Request $request)
    {

        $user = Auth::user();

        $profesional = Profesional::where('user_id',$user->id)->first();

        $reservas = Reserva::where([['dia','=',$request->dia],['profesional_id','=', $profesional->id_profesional],['sucursal_id','=',$request->id_sucursal]])->get();

        $ocupado = 0;


        if($reservas){

            foreach ($reservas as $key => $value) {

              $valid =  $this->checkhora($value["hora_inicio"], $value["hora_fin"], $request->hora);


                if($valid == 1){

                    $ocupado = 1;
                }
            }

            return $ocupado;

        }else{

            return 0;
        }

    }

    public function checkhora($inicio, $fin, $hora){

        $hora_inicio_reserva = date_format(date_create($inicio),"H:i:s");
        $hora_fin_reserva = date_format(date_create($fin),"H:i:s");
        $horacheck = date_format(date_create($hora),"H:i:s");

        if($hora_inicio_reserva > $horacheck ||  $hora_fin_reserva > $horacheck ){

            return 1;
        }else{

            return 0;
        }

    }


    public function editar(Request $request)
    {

       return Reserva::where('id_reserva', $request->id_reserva)->update([

            'dia' => $request->dia,
            'hora_inicio' => $request->hora_inicio,
            'hora_fin' => $request->hora_fin,

        ]);

    }


    public function buscarreserva(Request $request)
    {
        $paciente = Paciente::where('rut',$request->rut)->first();

        $reserva = Reserva::where([['paciente_id',$paciente->id_paciente],['sucursal_id',$request->id_sucursal],['estado_id', 2],['dia', $request->fecha]])
        ->with('paciente.prevision','profesional','servicio')->get();

        return $reserva;

    }

    public function traerreservadia(Request $request)
    {

            $reserva = Reserva::where([['sucursal_id',$request->id_sucursal],['estado_id', 2],['dia', $request->fecha]])
            ->with('paciente.prevision','profesional','servicio')->get();

            return $reserva;

    }
    public function destroy(Reserva $reserva)
    {
        if($reserva->estado_id == 2){

            $res = $reserva->delete();

            if($res){

                return 1 ;

            }else{
                return 0;
            }
        }else{

            return 0;
        }

    }
}
