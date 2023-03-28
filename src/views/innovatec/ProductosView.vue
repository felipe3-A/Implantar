<template>
    <body class="mb-0">
        <!-- <div class="container"> -->
        <header class="row d-flex justify-content-center py-2 mb-0 px-4">
            <a href="" class="col-3 d-flex align-items-center mb-0 py-0 mb-md-0 text-decoration-none fw-bold tusena">
                <img class="ms-4" width="60" height="50" role="img" aria-label="Bootstrap"
                    src="@/assets/img/logooscuro.png">TUSENA</a>

            <!-- <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                                                    <li><a href="#" class="nav-link px-2 link-secondary">Home11</a></li>
                                                    <li><a href="#" class="nav-link px-2 link-dark">Features11</a></li>
                                                    <li><a href="#" class="nav-link px-2 link-dark">Pricing</a></li>
                                                    <li><a href="#" class="nav-link px-2 link-dark">FAQs</a></li>
                                                    <li><a href="#" class="nav-link px-2 link-dark">About</a></li>
                                                </ul> -->
            <!-- BOTON INICIO SESION -->
            <div class="col-9 text-end py-0"> <!--TODO -->
                
                <button type="button" class="btn btn-outline-dark me-2 mt-0 bg-light text-dark p-2 text-light bg-opacity-70"
                    id="iniciarSesion" data-bs-toggle="modal" data-bs-target="#loginmodal"> Iniciar Sesion</button>


                <!-- BOTON REGISTRO -->
                <button type="button" class="btn btn-outline-dark me-4 ms-1 bg-light text-dark p-2 text-light bg-opacity-70" id="registro"
                    data-bs-toggle="modal" data-bs-target="#exampleModalR">Registro</button>

                <!-- MODALES -->
                <LoginRegisterComponent></LoginRegisterComponent>

            </div>
        </header>

        <div class="container col-xxl-8 px-4 py-0" mb-0>
            <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
                <div class="col-10 col-sm-8 col-lg-6">



                    <img src="@/assets/img/ASTRONAUTA.png" class="d-block mx-lg-auto img-fluid mb-0" alt="Bootstrap Themes"
                        width="700" height="500" loading="lazy">
                </div>
                <div class="col-lg-6">
                    <h1 class="display-1 fw-bold lh-1 mb-3">Bienvenido a TUSENA</h1>
                    <p class="lead">Si no conozco una cosa la investigaré
                        -Louis Pasteur</p>
                    <div class="d-grid gap-2 d-md-flex justify-content-md-start">
                        <!-- <i class="bi bi-google-play"></i> -->
                        <div class="d-flex flex-column flex-lg-row align-items-center">
                            <a class="me-lg-3 mb-0 mb-lg-0" href="#"><img class="app-badge"
                                    src="https://www.designpieces.com/wp-content/uploads/2016/02/google-play-badge.png"
                                    alt="..." width="150" /></a>

                        </div>

                        <!-- <button type="button" class="btn btn-outline-secondary btn-lg px-4">Default</button> -->
                    </div>

                </div>

            </div>
        </div>
        <!-- <div class="p-2 p-md-5 mb-0 rounded text-bg-success">
                                            <div class="col-md-12 px-0">
                                                <p class="lead">TUSENA es una herramienta hecha por y para la investigación, en donde podrás
                                                    encontrar
                                                    los productos resultado de proyectos de investigación del Centro de Teleinformática y Producción
                                                    Industrial - Sena Popayán</p>
                                            </div>
                                        </div> -->

        <!-- </div> -->
    </body>
    <FooterComponent></FooterComponent>
</template>

<script>
import FooterComponent from '@/components/InnovatecComponents/FooterComponent.vue';
import LoginRegisterComponent from '@/components/LoginRegisterComponent.vue';


export default {
    components: {
        FooterComponent,
        LoginRegisterComponent
    }
}
</script>


<style scoped>

.bg-success{
background-color: #eb150e;
}


header {
    background-color: #6fd03f;    
}


/* <!--TODO--> 

    /* .fw-bold{
    } */

    .tusena {
        color: #006205;
        font-family: 'Alkatra';
    }

@media (max-width: 768px){
    .tusena {
        color: #ffffff;
        font-family: Alkatra;
    }
    #iniciarSesion, #registro{
        color: #eb150e;
    }
}


#form {
    display: block;
}


@media (min-width: 550px) {

    #iniciarSesion {
        margin-left: 100px;
    }

}

@media (min-width: 200px) {

    #iniciarSesion {
        margin-left: 20px;
    }

}

/*    --------------------------------------------------
	:: Login Section
	-------------------------------------------------- */
#login {
    padding-top: 50px
}

#login .form-wrap {
    width: 20%;
    margin: 0 auto;
}

/* 
#login h1 {
    color: #fd0202;
    font-size: 18px;
    text-align: center;
    font-weight: bold;
    padding-bottom: 20px;
} */

#login .form-group {
    margin-bottom: 25px;
}

#login .checkbox {
    margin-bottom: 20px;
    position: relative;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    -o-user-select: none;
    user-select: none;
}

#login .checkbox.show:before {
    content: '\e013';
    color: #1fa67b;

    margin: 1px 0 0 3px;
    position: absolute;
    pointer-events: none;
    font-family: 'Glyphicons Halflings';
}

#login .checkbox .character-checkbox {
    width: 25px;
    height: 25px;
    cursor: pointer;
    border-radius: 3px;
    border: 1px solid #ccc;
    vertical-align: middle;
    display: inline-block;
}

#login .checkbox .label {
    color: #6d6d6d;

    font-weight: normal;
}

#login .btn.btn-custom {

    margin-bottom: 20px;
}

#login .forget {

    text-align: center;
    display: block;
}

/*    --------------------------------------------------
	:: Inputs & Buttons
	-------------------------------------------------- */
.form-control {
    color: #212121;
}

.btn-custom {
    color: #fff;
    background-color: #1fa67b;
}

.btn-custom:hover,
.btn-custom:focus {
    color: #fff;
}

/*    --------------------------------------------------
    :: Footer
	-------------------------------------------------- */
#footer {
    color: #6d6d6d;
    font-size: 12px;
    text-align: center;
}

#footer p {
    margin-bottom: 0;
}

#footer a {
    color: inherit;
}
</style>