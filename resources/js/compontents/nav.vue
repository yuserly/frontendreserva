

<script>
export default {

    methods:{

        toggleMenu() {
            console.log("Gola")
      let element = document.getElementById("navbarSupportedContent");
      element.classList.toggle("show");
    },
    }
}
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




</style>

<template>
    <header>
        <nav
            class="navbar navbar-expand-lg navbar-light nav_top_pc d-none d-md-block d-lg-block"
        >
            <div class="container">
                <router-link to="/" class="navbar-brand">
                    <img
                        alt=""
                        class="img-fluid"
                        src="/images/landing/logo.png"
                        width="180"
                        style="position: relative;top: 40px;"
                    />
                </router-link>

                <button
                    class="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    @click="toggleMenu()"
                >
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div
                    class="collapse navbar-collapse d-flex justify-content-between"
                >
                    <div
                        class="d-flex justify-content-center"
                        style="width:60%;"
                    >
                        <ul class="navbar-nav d-flex flex-row bd-highlight">
                            <li class="nav-item itemnav pr-3 pl-3">
                                <router-link to="/acerca-de" class="btn-nav nav-link btn-acerca"
                                    >Acerca de</router-link
                                >
                            </li>

                            <li class="nav-item itemnav pr-3 pl-3">
                                <router-link to="/como-funciona"
                                    class="btn-nav nav-link btn-como-funciona"
                                    >Como funciona</router-link
                                >
                            </li>

                            <li class="nav-item itemnav pr-3 pl-3">
                                <router-link to="/contacto"
                                    class="btn-nav nav-link btn-contacto"
                                    >Contacto</router-link
                                >
                            </li>
                        </ul>
                    </div>

                    <ul class="navbar-nav justify-content-end">
                        <li class="nav-item">
                            <a
                                class="btn-nav nav-link btn-como-funciona"
                                href="https://www.facebook.com/profile.php?id=100074940222842"
                                target="_blank"
                            >
                                <img src="/images/landing/icon-facebook.png" />
                            </a>
                        </li>

                        <li class="nav-item">
                            <a
                                class="btn-nav nav-link btn-como-funciona"
                                href="https://www.instagram.com/lodevuelvo.cl/"
                                target="_blank"
                            >
                                <img src="/images/landing/icon-instagram.png" />
                            </a>
                        </li>

                        <li class="nav-item">
                            <a
                                class="btn-nav nav-link btn-como-funciona"
                                href="https://www.youtube.com/channel/UCgLVdpDyO70oyo7Mg4spx_w"
                                target="_blank"
                            >
                                <img src="/images/landing/icon-youtube.png" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

        <!-- movil -->

        <nav
            class="navbar navbar-expand-lg navbar-light nav_top_movil d-xs-block d-md-none d-lg-none"
        >
            <div class="container">
                <router-link to="/" class="navbar-brand" >
                    <img
                        alt=""
                        class="img-fluid"
                        src="images/landing/logo.png"
                        width="120"
                    />
                </router-link>

                <button
                    class="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    @click="toggleMenu()"
                    style="background-color: #04d28c;"
                >
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div
                    class="collapse navbar-collapse"
                    id="navbarSupportedContent"
                >
                    <ul class="navbar-nav">
                        <li class="nav-item itemnav">
                            <router-link to="/acerca-de" class="btn-nav nav-link btn-acerca"
                                >Acerca de</router-link
                            >
                        </li>

                        <li class="nav-item itemnav">
                            <router-link to="/"
                                class="btn-nav nav-link btn-como-funciona"
                                >Como funciona</router-link
                            >
                        </li>

                        <li class="nav-item itemnav">
                            <router-link to="/contacto" class="btn-nav nav-link btn-contacto"
                                >Contacto</router-link
                            >
                        </li>
                    </ul>

                    <ul style="display: flex;list-style: none;">
                        <li class="nav-item">
                            <a
                                class="btn-nav nav-link btn-como-funciona"
                                href="https://www.facebook.com/profile.php?id=100074940222842"
                            >
                                <img
                                    src="/images/landing/icon-facebook.png"
                                />
                            </a>
                        </li>

                        <li class="nav-item">
                            <a
                                class="btn-nav nav-link btn-como-funciona"
                                href="https://www.instagram.com/lodevuelvo.cl/"
                            >
                                <img
                                    src="/images/landing/icon-instagram.png"
                                />
                            </a>
                        </li>

                        <li class="nav-item ">
                            
                            <router-link to="https://www.youtube.com/channel/UCgLVdpDyO70oyo7Mg4spx_w" class="btn-nav nav-link btn-como-funciona">

                                <img
                                    src="/images/landing/icon-youtube.png"
                                />

                                </router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
</template>
