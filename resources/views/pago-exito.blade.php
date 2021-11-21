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

    h5, h4, h6, span, button, a, small, input, button, p, label{

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
                
            </div>
        </div>
        

    </div>

</nav>

<nav class="navbar navbar-expand-lg navbar-light nav_top_pc d-none d-md-block d-lg-block">
    
    <div class="container d-flex justify-content-start">
        <div class="row">
            <div class="col-md-12">
               
            </div>
        </div>
        

    </div>

</nav>


<style>
	.banner1 {
    width: 100%;
    background-image: url('slider-home.png')!important;
    background-size: 100%;
    background-position: center top;
    background-repeat: no-repeat;
    color: #FFF!important;
}
hr{
        
        border: 0.1px solid #04d28c;

        background-color: #04d28c;

        height: 0.1px;


    }
    h6{
    	color: #000;
    	font-weight: bold;
    	font-size: 17px;
    }
    .btn-siguiente2{
    	color: #000 ;
        border-color: #04a28d;
        font-size: 1.5rem;
        border-radius: 30px;
        padding-left: 50px;
        padding-right: 50px;
        background-color: #0eeaaf;
        font-weight: bold;
        width: 100%;
    }
    .btn-siguiente2:hover{
    	color: #000 ;
       
    }
    .datosbasicos input{
        background-color: #e9eeed;
    }
</style>
<!--Sección 1-->
<br><br>
<section class="banner mt-5" style="overflow: hidden;">

    <div class="container">

        <div class="row justify-content-center mt-4">

            <div class="col-md-7 text-center">

                <h1 style="color:  #04d28c;font-size: 3rem;font-weight: bold;line-height: 0.9">Felicitaciones</h1>

                <br>

                <h6 style="line-height: 0.85;">Tu hora ha sido paga con éxito</h6>

                <hr>

            </div>

        </div>

    </div>

</section>

<hr style="-webkit-box-shadow: -1px -11px 45px 20px rgba(14,234,175,0.44); box-shadow: -1px -11px 45px 20px rgba(14,234,175,0.44);height: 0px!important;border:none!important;position: absolute;width: 100%;bottom: 0;">

</body>

</html>
