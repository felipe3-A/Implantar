<template>
  <!-- <CarouselComponent />
  <EncabezadoLogosComponent />
  <EncabezadoMenuComponent /> -->
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
     <router-link to="/quienes_somos2"></router-link>
    
  </nav> -->

  <router-view />
</template>


<script>

// import CarouselComponent from '@/components/CarouselComponent.vue';
// import EncabezadoLogosComponent from '@/components/EncabezadoLogosComponent.vue';
// import EncabezadoMenuComponent from '@/components/EncabezadoMenuComponent.vue';

import 'material-icons/iconfont/material-icons.css'


export default {
  name: "App",
  components: {
    // CarouselComponent,
    // EncabezadoLogosComponent,
    // EncabezadoMenuComponent


  }
}
</script>


<style>
#app {
  font-family: 'Work Sans';
  /* -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale; */

  /* color: #000000; */
  background-color: #ebebeb;
  font-size: 15px;
  /* margin: 0;
  padding: 0; */
}

/*
 nav {
  padding: 30px;

}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
} */
</style>


