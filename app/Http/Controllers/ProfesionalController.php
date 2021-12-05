<?php

namespace App\Http\Controllers;

use App\Models\BloqueoHora;
use App\Models\Dia;
use App\Models\HorarioProfesional;
use App\Models\Profesional;
use App\Models\profesional_servicio;
use App\Models\Reserva;
use App\Models\User;
use Illuminate\Support\Facades\Auth;

use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Storage;

date_default_timezone_set("America/Santiago");

class ProfesionalController extends Controller
{
    public function validaremail($email)
    {
        $user =  User::where('email', $email)->first();

        if($user){
            return 1;
        }else{

            return 0;
        }
    }
    public function validarrut($rut)
    {
        $profesional =  Profesional::where('rut', $rut)->first();

        if($profesional){
            return 1;
        }else{

            return 0;
        }
    }
    

    public function show(Profesional $profesional)
    {
        $profesional = Profesional::all();
        $profesional->load('servicio','horarioM','user');

        return $profesional;
    }

    public function showxservicio($id){

        return profesional_servicio::where('servicio_id_servicio', $id)->with('profesional')->get();
    }
    public function showserviciosucursal($id_servicio, $id_sucursal){


        // $servicio = profesional_servicio::select('profesionals.*')
        //                     ->join('profesionals','profesionals.id_profesional','=','profesional_servicio.profesional_id_profesional')
        //                     ->where('profesional_servicio.sucursal_id_sucursal','=', $id_sucursal)
        //                     ->where('profesional_servicio.servicio_id_servicio','=',$id_servicio)
        //                     ->get();

        $profesional = profesional_servicio::where([['servicio_id_servicio', $id_servicio],['sucursal_id_sucursal', $id_sucursal]])->with('profesional')->get();

        return $profesional;

    }

    public function traerhorario(Request $request){

        // consultar el numero del dia ya que 0 es domingo y tenemos guardado es el id_dia

        $dia = Dia::where('dia', $request->diasemana)->first();

        if($dia){

            $id_dia = $dia->id_dia;

            $horario = HorarioProfesional::where([['dia_id','=', $id_dia],['profesional_id_profesional','=',$request->id_profesional]])->first();

        }else{

            $horario = [];

        }

        // horas bloqueadas

        $bloqueo = BloqueoHora::where('profesional_id_profesional',$request->id_profesional)->get();

        // traer reservas

        $reserva = Reserva::where([['profesional_id',$request->id_profesional],['sucursal_id','=', $request->id_sucursal]])->get();

        return ["horario" => $horario, "bloqueo" => $bloqueo, "reserva" => $reserva];

    }

    public function traerhorariofrontend(Request $request){

        // pasar a numero 

        $quitarcero = str_replace("00:", "", $request->especialidad["intervalo"]);

        // quitar :

        $quitarpunto = str_replace(":00", "", $quitarcero);

        $intervalo = (int)$quitarpunto;

        // consultar el numero del dia ya que 0 es domingo y tenemos guardado es el id_dia

        if($request->id_dia == 0){

            $numdia = 7;
        }else{

            $numdia = $request->id_dia;
        }

        $dia = Dia::where('dia', $numdia)->first();

        if($dia){

            $id_dia = $dia->id_dia;

            $horario = HorarioProfesional::where([
                ['dia_id','=', $id_dia],
                ['profesional_id_profesional','=',$request->profesional["profesional_id_profesional"]],
                ['sucursal_id','=',$request->id_sucursal]
                ])->first();
        }else{

            $horario = [];

        }

        

        // sacar rangos

        if($horario){

            $intervarlo = 'PT'.$intervalo.'M';
            $min = '+'.$intervalo.' minutes' ;
    
            $fechaInicio = new \DateTime($horario["hora_inicio"]);
            $fechaFin = new \DateTime($horario["hora_fin"]);
            $fechaFin = $fechaFin->modify($min);
    
            $rangoHoras = new \DatePeriod($fechaInicio, new \DateInterval($intervarlo), $fechaFin);

        }

        $arrayh = [];

            foreach($rangoHoras as $hora){

                if($hora->format("H:i:s") <= $horario["hora_fin"]){
                    $arrayh[] =  $hora->format("H:i:s");
                }
                
            }

        
        // horas bloqueadas

        $bloqueo = BloqueoHora::where([['profesional_id_profesional',$request->profesional["profesional_id_profesional"]],['dia','=', $request->dia ]])->first();

        // sacar las horas que esten bloqueada

        if($arrayh){

            if($bloqueo){

                $intervarlo = 'PT'.$intervalo.'M';
                $min = '+'.$intervalo.' minutes' ;
        
                $fechaInicio = new \DateTime($bloqueo["hora_inicio"]);
                $fechaFin = new \DateTime($bloqueo["hora_fin"]);
                $fechaFin = $fechaFin->modify($min);
        
                $rangoBloqueo = new \DatePeriod($fechaInicio, new \DateInterval($intervarlo), $fechaFin);
                $arraybloqueo = [];
                
                    foreach($rangoBloqueo as $hora){
                        $arraybloqueo[] =  $hora->format("H:i:s");
                    }

                    for ($i=0; $i < count($arrayh)  ; $i++) { 
                        $hora = $arrayh[$i]; 

                        for ($j=0; $j < count($arraybloqueo) ; $j++) { 
                            $bloqueo = $arraybloqueo[$j];

                            if($bloqueo == $hora){
                                if($arrayh[$i]){
                                    unset($arrayh[$i]);
                                }
                            }
                        }
                    }
            }

            $arrayh = array_values($arrayh);

            // traer reservas

            $reserva = Reserva::where([['profesional_id',$request->profesional["profesional_id_profesional"]],['sucursal_id','=', $request->sucursal["id_sucursal"]],['dia','=', $request->dia]])->get();
            
            if($reserva && $arrayh){

                foreach ($reserva as $key => $value) {
                    $inicio = $value["hora_inicio"]; 
                    $fin= $value["hora_fin"];
                    for ($k=0; $k <= count($arrayh) ; $k++) { 
                        $hora = $arrayh[$k];
                        if($this->checkhora($inicio, $fin, $hora) == 1){
                            
                            if($arrayh[$k]){
                                unset($arrayh[$k]);
                            }
                        }
                    }
                    $arrayh = array_values($arrayh);
                }
            }
        }

        // sacamos la hora actual 

        $time = strtotime(date("H:i"));
        $round = 30*60;
        $rounded = round( $time  / $round) * $round;
        $datefin = date("H:i:s", $rounded);

        $arrayA = [];

        if($request->dia == date('Y-m-d')){

            $intervarlo = 'PT'.$intervalo.'M';
            $min = '+'.$intervalo.' minutes' ;

            $fechaInicio = new \DateTime($horario["hora_inicio"]);
            $fechaFin = new \DateTime($datefin);
            $fechaFin = $fechaFin->modify($min);
        
            $rangoAtras = new \DatePeriod($fechaInicio, new \DateInterval($intervarlo), $fechaFin);

            foreach($rangoAtras as $hora){
                $arrayA[] =  $hora->format("H:i:s");
            }

        }

        $arrayh = array_values($arrayh);


        return ["rangosdisponibles" =>$arrayh, "rangoshoraactual" => $arrayA];

    }

    public function checkhora($inicio, $fin, $hora){

        $hora_inicio_reserva = date_format(date_create($inicio),"H:i:s");
        $hora_fin_reserva = date_format(date_create($fin),"H:i:s");
        $horacheck = date_format(date_create($hora),"H:i:s");

        if($hora_inicio_reserva == $horacheck){

            return 1;
        }else{

            return 0;
        }

    }
  

    public function traerdia($id_profesional, $sucursal){
        $dia = HorarioProfesional::where([['profesional_id_profesional','=',$id_profesional],['sucursal_id', '=', $sucursal]])->with('dia')->get();
        return $dia;

    }

}
