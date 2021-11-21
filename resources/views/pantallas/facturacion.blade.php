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
	.banner1 {
    width: 100%;
    background-image: url('slider-home.png')!important;
    background-size: 100%;
    background-position: center top;
    background-repeat: no-repeat;
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
    .btn-siguiente{
    	color: #0eeaaf ;
        border-color: #04a28d;
        font-size: 1.5rem;
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
    .datosbasicos input{
        background-color: #e9eeed;
    }
input[type=number]::-webkit-inner-spin-button,
input[type=number]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
    }
input[type=number] { -moz-appearance:textfield; }

.btn-add{
        color: #04a28d;
        border-color: #04a28d;
        font-size: 1rem;
        border-radius: 5px;
        padding-left: 5px;
        padding-right: 5px;
    }
    .btn-add:hover{
        color: #FFF;
        background-color: #04a28d;
        border-color: #04a28d;
    }
</style>
<!--Sección 1-->
<br><br>
<section class="banner1 mt-5" style="overflow: hidden;">

    <div class="container">

        <div class="row justify-content-center mt-3">

            <div class="col-md-7 text-center">

                <h1 style="color:  #04d28c;font-size: 3rem;font-weight: bold;line-height: 0.9">Bienvenido a</h1>

                <h1 style="color:  #04d28c;font-size: 3rem;font-weight: bold;line-height: 0.9">lodevuelvo.cl</h1>

                <br>

            </div>

        </div>

        

        <div class="row justify-content-center">
        	<div class="col-md-6">
        		<h6 class="mb-3">Ingresa tus datos para realizar tu compra</h6>
        		
                <form class="datosbasicos">

                    <div class="form-row">

                        <div class="form-group col-12">

                            <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Nombre">

                        </div>

                    </div>

                    <div class="form-row">

                        <div class="form-group col-12 col-md-6">

                            <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Correo Electrónico">

                        </div>

                        <div class="form-group col-12 col-md-6">

                            <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Número Celular">

                        </div>

                    </div>

				</form>

        	</div>
        </div>

        <div class="row justify-content-center">

            <div class="col-md-6">

                <hr>

                <div class="d-flex justify-content-between mb-3">
                    <h6 class="mb-3">Alumnos</h6>
                    <button type="button" class="btn btn-outline-primary ml-2 btn-add" data-toggle="modal" data-target="#exampleModalEstudiantes"><i class="far fa-plus-square"></i> Añadir</button>
                </div>
                

                <ul class="list-group lista_estudiantes">
                  <li class="list-group-item d-flex justify-content-between">
                    Alumno 1
                    <div>
                        <i class="far fa-edit mr-1"></i>
                        <i class="far fa-trash-alt"></i>
                    </div>
                  </li>
                </ul>

            </div>

        </div>

          <div class="row justify-content-center">

            <div class="col-md-6">

                <hr>

                <form class="datosbasicos">

                  <div class="pl-2 pr-2 pb-3 pt-3 d-flex" style="height: 80px;background-color:  #0eeaaf ;border-radius: 5px;">

                    <input type="number" class="form-control" id="formGroupExampleInput" value="1" style="width: 45px;height: 45px;text-align: center;font-weight: bold;">

                    <p class="pl-3 pr-2 pt-1" style="color: #000;font-weight: bold;line-height: 1;font-size: 17px;">Por favor agrega acá la cantidad de Kit que necesitas</p>

                  </div>

                </form>

            </div>

        </div>
<!--
        <div class="row justify-content-center">

        	<div class="col-md-6">

        		<hr>

        		<h6 class="mb-3">Ingresa los datos del alumno</h6>

        		<form class="datosbasicos">

				  <div class="form-group">

				    <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Nombre">

				  </div>

                  <div class="form-group">

                    <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Colegio">

                  </div>

				  <div class="form-group">

				    <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Curso">

				  </div>

				  <div class="pl-2 pr-2 pb-3 pt-3 d-flex" style="height: 80px;background-color:  #0eeaaf ;border-radius: 5px;">

				  	<input type="number" class="form-control" id="formGroupExampleInput" value="1" style="width: 45px;height: 45px;text-align: center;font-weight: bold;">

				  	<p class="pl-3 pr-2 pt-1" style="color: #000;font-weight: bold;line-height: 1;font-size: 17px;">Por favor agrega acá la cantidad de Kit que necesitas</p>

				  </div>

				</form>

        	</div>

        </div>

    -->


<!--
        <div class="row justify-content-center">

        	<div class="col-md-6">

        		

				  <div class="pl-2 pr-2 pb-3 pt-3 d-flex align-items-center" style="cursor: pointer;">

				  		
				  		<img src="icon-add.png" class="img-fluid" width="50px">

				  		<h4 class="pl-2 pr-2 pt-1" style="color: #000;font-weight: bold;line-height: 1;">Agregar más alumnos</h4>


				  </div>

        	</div>

        </div>
-->
        <div class="row justify-content-center mt-4 mb-5">

        	<div class="col-xs-6 col-md-4">

				 <a href="{{url('/facturacion-exito')}}" class="btn btn-siguiente">Siguiente</a>

        	</div>

        </div>

    </div>

    <hr style="-webkit-box-shadow: -1px -11px 45px 20px rgba(14,234,175,0.44); box-shadow: -1px -11px 45px 20px rgba(14,234,175,0.44);height: 0px!important;border:none!important;">

</section>



<!--Modal-->
<!-- Modal -->
<div class="modal fade" id="exampleModalEstudiantes" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h6 class="modal-title">Ingresa los datos del alumno</h6>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        

                <form class="datosbasicos">

                  <div class="form-group">

                    <input type="text" class="form-control" id="nombre_estudiante" name="nombre_estudiante" placeholder="Nombre">

                  </div>

                  <div class="form-group">

                    <input type="text" class="form-control" id="colegio" name="colegio" placeholder="Colegio">

                  </div>

                  <div class="form-group">

                    <input type="text" class="form-control" id="curso" name="curso" placeholder="Curso">

                  </div>

                </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-outline-primary" data-dismiss="modal">Cancelar</button>
        <button type="button" class="btn btn-primary btn-agregar-alumno" style="background-color: #0eeaaf;">Añadir</button>
      </div>
    </div>
  </div>
</div>


<script>
    $(document).ready(function(){
        $('.btn-agregar-alumno').click(function(){
            var nombre = $('#nombre_estudiante').val();
            var colegio = $('#colegio').val();
            var curso = $('#curso').val();

            if(nombre==''){
                $('#nombre_estudiante').focus();
            }else if(colegio==''){
                $('#colegio').focus();
            }else if(curso==''){
                $('#curso').focus();
            }else{

                $('ul.lista_estudiantes').append('<li class="list-group-item d-flex justify-content-between">'+nombre+'<div><i class="far fa-edit mr-1"></i><i class="far fa-trash-alt"></i></div></li>');
                
                $('#exampleModalEstudiantes').modal('hide');

            }

            
        });
    });
</script>



</body>
</html>
