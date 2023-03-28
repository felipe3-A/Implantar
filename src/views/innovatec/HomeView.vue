<template>
  <main>
    <div class="home">
      <CarouselComponentVue></CarouselComponentVue>
      <encabezado-logos-component></encabezado-logos-component>
      <encabezado-menu-component></encabezado-menu-component>
      <img alt="Vue logo" src="@/assets/logo.png">
      <HelloWorld msg="Welcome to Your Vue.js App" />
    </div>
    <FooterComponent></FooterComponent>
  </main>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/InnovatecComponents/HelloWorld.vue'
import CarouselComponentVue from '@/components/InnovatecComponents/CarouselComponent.vue';
import EncabezadoMenuComponent from '@/components/InnovatecComponents/EncabezadoMenuComponent.vue';
import EncabezadoLogosComponent from '@/components/InnovatecComponents/EncabezadoLogosComponent.vue';
import FooterComponent from '@/components/InnovatecComponents/FooterComponent.vue';

export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    CarouselComponentVue,
    EncabezadoMenuComponent,
    EncabezadoLogosComponent,
    FooterComponent
  }
}
</script>

<style scoped>

main {
  opacity: 1;
  animation-name: fadeInOpacity;
  animation-iteration-count: 1;
  animation-timing-function: ease-in;
  animation-duration: 1s;
}

</style>
