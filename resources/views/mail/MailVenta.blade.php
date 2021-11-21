<!DOCTYPE html>

<html lang="en">

<head>

    <meta charset="UTF-8">

    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Document</title>



    <style>

    
    h1{

        font-family: Helvetica!important;

        font-weight: bold;

    }

    h5, h4, h6, span, button, a, small, input, button, p, label{

        font-family: Helvetica!important;

    }

      body{

          margin: 0;

          padding: 0;

      }

      table{

          border-spacing: 0;
          font-family: Helvetica!important;

      }

      td{

          padding: 0;
          font-family: Helvetica!important;

          

      }

      img {

          border: 0;

      }

      .wrapper{

          width: 100%;

          table-layout: fixed;

          padding-bottom: 40px;

      }



      .webkit{

          max-width: 650px;

          width: 100%;

          background-color: #eeeeee;

          border-radius: 14px; 



      }



      .outer{

          margin: 0 auto;

          width: 100%;

          max-width: 650px;

          min-width: 650px;

          border-spacing: 0;

          color: #4a4a4a;

      }

      table.tabla-comprador td {
      border-bottom: 0.3px solid #fff;
    }

      @media screen and (max-width: 600px){

          .outer{

            min-width: 0px;
          width: 100%!important;


            }

            
            .webkit{
                min-width: 0px;
          width: 100%!important;



      }


      }



      @media screen and (max-width: 400px){

          

        }



.myDiv{
    background-image: url('https://lodevuelvo.cl/images/fondo-mail.jpg');
    background-size: cover;
    background-position: center top;
}


  </style>

</head>

<body>

<!--Mail 3-->
<div class="myDiv" style="margin-bottom: 20px;padding-top: 50px;">
<center class="wrapper">



    <table>

        <tr>

            <td>



            <div class="webkit" style="border-radius: 5px; border: 1px solid #eeeeee; background:#fff">



            <table class="outer" align="center">



                <tr>

                    <td>

                    <table width="100%" style="border-spacing: 0;">

                        <tr>

                            <td style="padding:10px; text-align:center; font-size:25px">



                            <!-- <label><span style="color:#1B262c;">Sell</span><span style="color:#e7305b">Now</span></label> -->



                                <a href=""><img src="https://lodevuelvo.cl/images/landing/logo.png" width="180" alt="Logo" title="Logo"></a>

                            </td>

                        </tr>

                    </table>

                    </td>

                </tr>



                <tr>

                    <td style="text-align:center">



                    <div align="center" width="600">

                    <h1 style="color: #04d494  ;margin: 0px;">Detalles de compra</h1>


                    <h4>Estimado {{$apoderado['nombre']}}</h4>

                    <h4 style="font-weight: normal;">Tu compra ha sido realizada éxitosamente</h4>

                    </div>



                    </td>

                </tr>

                <tr>

                    <td style="padding:10px;padding-left: 10%;padding-right: 10%;">

                    <div  width="600" style="border-radius:14px; border: 1px solid #fff ;background-color: #eeeeee; color:black;overflow: hidden;">

                    <table class="tabla-comprador" width="100%">

                        <thead style="background: #57fccc;">

                            <tr>

                                <td style="padding-top: 30px;padding-left:10px;padding-right:10px;">



                                  <div style="margin-bottom: 20px;">



                                      <label style="font-size: 17px;font-weight: bold;padding-right: 10px;padding-left: 10px;">Cantidad</label>



                                  </div>

                                

                                </td>

                                <td  style="padding-top: 30px;padding-left:10px;padding-right:10px;">



                                  <div style="margin-bottom: 20px;">



                                      <label style="font-size: 17px;font-weight: bold;padding-right: 10px;padding-left: 10px;">Detalle</label>



                                  </div>

                                

                                </td>

                                <td  style="padding-top: 30px;padding-left:10px;padding-right:10px;">



                                  <div style="margin-bottom: 20px;">



                                      <label style="font-size: 17px;font-weight: bold;padding-right: 10px;padding-left: 10px;">Precio</label>



                                  </div>

                                

                                </td>




                                <td  style="padding-top: 30px;padding-left:10px;padding-right:10px;">



                                <div style="margin-bottom: 20px;">



                                    <label style="font-size: 17px;font-weight: bold;padding-right: 10px;padding-left: 10px;">Total</label>



                                </div>

                                

                                </td>


                        </tr>                 

                        </thead>

                        <tbody>
                        
           
                            <tr>
                                <td style="padding-right: 10px;padding-left: 10px;text-align: center;padding-top: 12px;padding-bottom: 12px;">{{$venta['cantidad']}}</td>
                                <td style="padding-right: 10px;padding-left: 10px;padding-top: 12px;padding-bottom: 12px;">{{$plan['nombre']}}</td>
                                <td style="padding-right: 10px;padding-left: 10px;padding-top: 12px;padding-bottom: 12px;">$ {{number_format($plan['precio'],0, '', '.')}}</td>
                                <td style="padding-right: 10px;padding-left: 10px;padding-top: 12px;padding-bottom: 12px;">$ {{number_format($plan['precio']*$venta['cantidad'],0, '', '.')}}</td>
                            </tr>

                            @if(isset($venta['precio_envio']))
                            <tr>
                                <td style="padding-right: 10px;padding-left: 10px;text-align: center;padding-top: 12px;padding-bottom: 12px;">1</td>
                                <td style="padding-right: 10px;padding-left: 10px;padding-top: 12px;padding-bottom: 12px;">Costo de envío</td>
                                <td style="padding-right: 10px;padding-left: 10px;padding-top: 12px;padding-bottom: 12px;">$ {{number_format($venta['precio_envio'],0, '', '.')}}</td>
                                <td style="padding-right: 10px;padding-left: 10px;padding-top: 12px;padding-bottom: 12px;">$ {{number_format($venta['precio_envio'],0, '', '.')}}</td>
                            </tr>
                            @endif



                          <tr>
                            <td style="padding-right: 10px;padding-left: 10px;text-align: center;padding-top: 20px;padding-bottom: 10px;font-weight: bold;" colspan="2"></td>
                            <td style="padding-right: 10px;padding-left: 10px;padding-top: 20px;padding-bottom: 10px;font-weight: bold;">VALOR TOTAL</td>
                            <td style="padding-right: 10px;padding-left: 10px;padding-top: 20px;padding-bottom: 10px;font-weight: bold;">$ {{number_format($venta['total'],0, '', '.')}}</td>
                          </tr>



                        </tbody>

                    </table>

                    </div>



                    </td>

                </tr>

                <tr>

                    <td>

                        <div align="center" width="600" style="color:black;margin-top: 15px; margin-bottom:15px">



                            <h4 style="font-weight: normal;">Gracias por preferirnos. El equipo <b>lodevuelvo.cl</b></h4>



                        </div>

                    </td>

                </tr>

            </table>

            </div>

            </td>

        </tr>

    </table>

    <p>&copy; {{date('Y')}} LODEVUELVO.CL</p>
    <p style="padding-left: 4px;padding-right: 4px;">Este correo electrónico fue enviado a usted de forma automática.</p>

    

   

</center>

    
</div>

</body>

</html>