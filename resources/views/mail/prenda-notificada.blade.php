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

      }

      td{

          padding: 0;

          

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

          margin-top: 40px;



      }



      .outer{

          margin: 0 auto;

          width: 100%;

          max-width: 650px;

          min-width: 650px;

          border-spacing: 0;

          color: #4a4a4a;

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
<div class="myDiv" style="margin-top: 20px;margin-bottom: 20px;">
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



                                <a href=""><img src="https://lodevuelvo.cl/images/landing/logo.png" width="180" alt="Logo" title="Logo"></a>

                            </td>

                        </tr>

                    </table>

                    </td>

                </tr>



                <tr>

                    <td style="text-align:center">



                    <div align="center" width="600">

                    <h1 style="color: #04d494  ;margin: 0px;">¡Buenas Noticias!</h1>

                    <h4>Estimado {{$nombreApoderado}}</h4>

                    <p style="line-height: 0.8;">Una de sus prendas registrada con nosotros</p>
                    <p style="line-height: 0.1;">ha sido encontrada por un usuario.</p>

                    </div>



                    </td>

                </tr>



                <tr>

                    <td style=" text-align:center; padding-right: 40px; padding-left: 40px;">

                    <div align="center" width="600">

                    <h4>Contacta a la persona que encontro tu prenda</h4>

                    </div>

                    </td>

                </tr>



                <tr>

                    <td style="padding:10px;padding-left: 10%;padding-right: 10%;">

                    <div  width="600" style="border-radius:14px; border: 1px solid #eeeeee; background: #57fccc ; color:black; padding: 18px 10px 18px;">

                    <table>

                        <thead>

                            <tr>

                                <td>



                                <div style="margin-bottom: 20px;">



                                    <label style="font-size: 17px;font-weight: bold;">Usuario: {{$nombreUsuario}}</label>



                                </div>

                                

                                </td>



                                <td>



                            



                            </tr>

                            <tr>

                                <td>



                                <div style="margin-bottom: 20px;">



                                    <label style="font-size: 17px;font-weight: bold;">Email: {{$emailUsuario}}</label>



                                </div>

                                

                                </td>



                                <td>



                            



                            </tr>

                            <tr>

                                <td>

                                <div>

                                    <label style="font-size: 17px;font-weight: bold;">Celular: +56 {{$celularUsuario}}</label>

                                </div>

                                </td>

                            </tr>                  

                        </thead>

                    </table>

                    </div>



                    </td>

                </tr>



                <tr>

                    <td>

                        <div align="center" width="600" style="color:black;margin-top: 15px; margin-bottom:15px">



                            <h4>Gracias por preferirnos. El equipo lodevuelvo.cl</h4>



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
