<!DOCTYPE html>

<html lang="en">

<head>

    <meta charset="UTF-8">

    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Document</title>



    <style>

    @font-face {

        font-family: fuente1;

        src: url("{{asset('fonts/Gotham-Bold.otf')}}");

    }

    @font-face {

        font-family: fuente2;

        src: url('{{asset('fonts/AmazonEmber_Rg.ttf')}}');
    }
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
      border-bottom: 0.1px solid #eeee;
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
    background-image: url('{{asset('images/fondo-mail.jpg')}}');
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



            <div class="webkit" style="border-radius: 5px; border: 1px solid #eeeeee; background:#eeeeee">



            <table class="outer" align="center">



                <tr>

                    <td>

                    <table width="100%" style="border-spacing: 0;">

                        <tr>

                            <td style="padding:10px; text-align:center; font-size:25px">



                            <!-- <label><span style="color:#1B262c;">Sell</span><span style="color:#e7305b">Now</span></label> -->



                                <a href=""><img src="{{asset('images/logo.png')}}" width="180" alt="Logo" title="Logo"></a>

                            </td>

                        </tr>

                    </table>

                    </td>

                </tr>



                <tr>

                    <td style="text-align:center">



                    <div align="center" width="600">

                    <h1 style="color: #04d494  ;margin: 0px;">Detalles de tu compra</h1>

                    <h4>Estimado José Miguel Montalva</h4>

                    <h4>Tu compra ha sido realizada éxitosamente</h4>

                    </div>



                    </td>

                </tr>

                <tr>

                    <td style="padding:10px;padding-left: 10%;padding-right: 10%;">

                    <div  width="600" style="border-radius:14px; border: 1px solid #eeeeee; background: #57fccc ; color:black; padding: 18px 10px 18px;">

                    <table class="tabla-comprador" width="100%">

                        <thead>

                            <tr>

                                <td>



                                  <div style="margin-bottom: 20px;">



                                      <label style="font-size: 17px;font-weight: bold;padding-right: 10px;padding-left: 10px;">Cantidad</label>



                                  </div>

                                

                                </td>

                                <td>



                                  <div style="margin-bottom: 20px;">



                                      <label style="font-size: 17px;font-weight: bold;padding-right: 10px;padding-left: 10px;">Detalle</label>



                                  </div>

                                

                                </td>

                                <td>



                                  <div style="margin-bottom: 20px;">



                                      <label style="font-size: 17px;font-weight: bold;padding-right: 10px;padding-left: 10px;">Precio</label>



                                  </div>

                                

                                </td>




                                <td>



                                <div style="margin-bottom: 20px;">



                                    <label style="font-size: 17px;font-weight: bold;padding-right: 10px;padding-left: 10px;">Total</label>



                                </div>

                                

                                </td>


                        </tr>                 

                        </thead>

                        <tbody>
                          
                          <tr>
                            <td style="padding-right: 10px;padding-left: 10px;text-align: center;padding-top: 6px;padding-bottom: 6px;">1</td>
                            <td style="padding-right: 10px;padding-left: 10px;padding-top: 6px;padding-bottom: 6px;">Set de 24 etiquetas personalizadas. Sofia Montalva Cordova</td>
                            <td style="padding-right: 10px;padding-left: 10px;padding-top: 6px;padding-bottom: 6px;">10.990</td>
                            <td style="padding-right: 10px;padding-left: 10px;padding-top: 6px;padding-bottom: 6px;">10.990</td>
                          </tr>

                          <tr>
                            <td style="padding-right: 10px;padding-left: 10px;text-align: center;padding-top: 6px;padding-bottom: 6px;">1</td>
                            <td style="padding-right: 10px;padding-left: 10px;padding-top: 6px;padding-bottom: 6px;">Costo de Despacho</td>
                            <td style="padding-right: 10px;padding-left: 10px;padding-top: 6px;padding-bottom: 6px;">3.000</td>
                            <td style="padding-right: 10px;padding-left: 10px;padding-top: 6px;padding-bottom: 6px;">3.000</td>
                          </tr>

                          <tr>
                            <td style="padding-right: 10px;padding-left: 10px;text-align: center;padding-top: 10px;padding-bottom: 10px;" colspan="2">TOTAL A PAGAR</td>
                            <td style="padding-right: 10px;padding-left: 10px;text-align: center;padding-top: 10px;padding-bottom: 10px;" colspan="2">13.990</td>
                          </tr>



                        </tbody>

                    </table>

                    </div>



                    </td>

                </tr>

                <tr>

                    <td>

                        <div align="center" width="600" style="color:black;margin-top: 15px; margin-bottom:15px">



                            <h5>Gracias por preferirnos. El equipo lodevuelvo.cl</h5>



                        </div>

                    </td>

                </tr>

            </table>

            </div>

            </td>

        </tr>

    </table>

    <p>&copy; 2021 LODEVUELVO.CL</p>
    <p style="padding-left: 4px;padding-right: 4px;">Este correo electrónico fue enviado a usted de forma automática.</p>

    

   

</center>

    
</div>

</body>

</html>