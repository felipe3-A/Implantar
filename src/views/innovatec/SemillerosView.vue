<template>
    <div>
        <CarouselComponentVue></CarouselComponentVue>
        <encabezado-logos-component></encabezado-logos-component>
        <encabezado-menu-component></encabezado-menu-component>
        <AboutUsComponent></AboutUsComponent>
        <FooterComponent></FooterComponent>
    </div>
</template>

<script>
import CarouselComponentVue from '@/components/InnovatecComponents/CarouselComponent.vue';
import EncabezadoMenuComponent from '@/components/InnovatecComponents/EncabezadoMenuComponent.vue';
import EncabezadoLogosComponent from '@/components/InnovatecComponents/EncabezadoLogosComponent.vue';
import AboutUsComponent from '@/components/InnovatecComponents/AboutUsComponent.vue';
import FooterComponent from '@/components/InnovatecComponents/FooterComponent.vue';



export default {
    name: 'HomeView',
    components: {
        CarouselComponentVue,
        EncabezadoMenuComponent,
        EncabezadoLogosComponent,
        AboutUsComponent,
        FooterComponent
    }
}


</script>