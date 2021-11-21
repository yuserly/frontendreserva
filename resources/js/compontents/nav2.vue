<script>
export default {
    methods: {
        toggleMenu() {
            console.log("Gola");
            let element = document.getElementById("navbarSupportedContent");
            element.classList.toggle("show");
        }
    }
};
</script>

<style scoped>
@font-face {
    font-family: fuente1;

    src: url("/fonts/Gotham-Bold.otf");
}

@font-face {
    font-family: fuente2;

    src: url("/fonts/AmazonEmber_Rg.ttf");
}



nav.nav_top_pc {
    background-color: #080404!important;
		max-height: 100px!important;
		-webkit-box-shadow: 0px 4px 8px 1px #000000!important; 
		box-shadow: 0px 4px 8px 1px #000000!important;
}
nav.nav_top_pc ul li a {
    color: #fff !important;

    font-size: 20px;
}

.btn-nav:hover {
    border-bottom: 4px solid #04d28c;

    transition: all 0.2s;
}

nav.nav_top_movil {
    background-color: #080404;
		max-height: 100px!important;
		-webkit-box-shadow: 0px 4px 8px 1px #000000!important; 
		box-shadow: 0px 4px 8px 1px #000000!important;
}

nav.nav_top_movil ul li a {
    color: #fff !important!important;

    font-size: 20px;
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

.btn-siguiente2{
    color: #000 !important;
    border-color: #04a28d !important;
    font-size: 1.5rem !important;
    border-radius: 30px !important;
    padding-left: 50px !important;
    padding-right: 50px !important;
    background-color: #0eeaaf !important;
    font-weight: bold !important;
    width: 100% !important;
}
.btn-siguiente2:hover{
    color: #000 !important ;

}



</style>

<template>
    <header>
        <nav
            class="navbar navbar-expand-lg navbar-light nav_top_movil d-md-none d-lg-none mb-5" style="margin-bottom: 110px !important;"
        >
            <div class="container d-flex justify-content-center">
                <div class="row">
                    <div class="col-md-12">
                        
                    </div>
                </div>
            </div>
        </nav>

        <nav
            class="navbar navbar-expand-lg navbar-light nav_top_pc d-none d-md-block d-lg-block"
        >
            <div class="container d-flex justify-content-start">
                <div class="row">
                    <div class="col-md-12">
                        
                    </div>
                </div>
            </div>
        </nav>
    </header>
</template>
