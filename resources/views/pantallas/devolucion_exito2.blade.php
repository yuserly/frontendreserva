<!DOCTYPE html>

	<html>

		<head>

			<title></title>

			<meta charset="utf-8">

			<meta http-equiv="Content-Language" content="es"/>

			<meta name="distribution" content="global"/>

			<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no"/>

			<meta name="description" content=""/>

			<meta name="keywords" content=""/>

			<meta name="author" content="" />

  			<link  rel="icon"   href="assets/img/favicon.ico" type="image/ico" />

  			<link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/>

			<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">

			<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>

    		<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-Piv4xVNRyMGpqkS2by6br4gNJ7DXjqk09RmUpJ8jgGtD7zP9yug3goQfGII0yAns" crossorigin="anonymous"></script>
		
		</head>

<body>

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

        font-family: fuente1!important;

        font-weight: bold;

    }

    h5, h4, h6, span, button, a, small, input, button, p{

        font-family: fuente2!important;

    }
    nav{
        background-color: #080404;
        max-height: 100px!important;
        -webkit-box-shadow: 0px 4px 8px 1px #000000; 
        box-shadow: 0px 4px 8px 1px #000000;
    }
    nav ul li a{
        color: #FFF!important;
    }
</style>

<nav class="navbar navbar-expand-lg navbar-light nav_top_movil d-md-none d-lg-none">

    <div class="container d-flex justify-content-center">
        <div class="row">
            <div class="col-md-12">
                <a class="navbar-brand" href="/">

                    <img style="position: relative;top: 30px;" alt="" class="img-fluid" src="{{asset('images/logo.png')}}" width="165" />

                </a>
            </div>
        </div>
        

    </div>

</nav>

<nav class="navbar navbar-expand-lg navbar-light nav_top_pc d-none d-md-block d-lg-block">
    
    <div class="container d-flex justify-content-start">
        <div class="row">
            <div class="col-md-12">
                <a class="navbar-brand" href="/">

                    <img style="position: relative;top: 30px;" alt="" class="img-fluid" src="{{asset('images/logo.png')}}" width="165" />

                </a>
            </div>
        </div>
        

    </div>

</nav>

<style>


    h6{
    	color: #000;
    	font-weight: bold;
    	font-size: 17px;
    }
    .btn-siguiente{
    	color: #0eeaaf ;
        border-color: #04a28d;
        font-size: 1.3rem;
        border-radius: 30px;
        padding-left: 50px;
        padding-right: 50px;
        background-color: #000;
        font-weight: bold;
        width: 100%;
    }
    .btn-siguiente:hover{
    	color: #0eeaaf ;
       
    }
</style>
<!--Sección 1-->
<br><br>
<section class="banner1 mt-5" style="overflow: hidden;">

    <div class="container">

        <div class="row justify-content-center mt-5">

            <div class="col-md-7 text-center">

                <img src="{{asset('images/sonrisa.png')}}" class="img-fluid" width="70px">

                <h2 style="color:  #04d28c;font-weight: bold;">¡FELICITACIONES!</h2>

                <h5 class="pt-3" style="font-weight: bold;line-height: 1;color: #000;font-size: 22px">Eres una excelente persona, muchas gracias por devolver esta prenda.</h5>

                <br>

            </div>

        </div>

        <div class="row justify-content-center mt-4 mb-5">

        	<div class="col-xs-6 col-md-4">

				 <a href="{{url('/escanear2')}}" class="btn btn-siguiente">Devolver otra prenda</a>

        	</div>

        </div>

    </div>

</section>

<hr style="-webkit-box-shadow: -1px -11px 45px 20px rgba(14,234,175,0.44); box-shadow: -1px -11px 45px 20px rgba(14,234,175,0.44);height: 0px!important;border:none!important;bottom: 0px!important;width: 100%;position: absolute;">
</body>
</html>
