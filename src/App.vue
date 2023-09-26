<template>
  <NavBar/>
  <v-app>
  <v-main> <RouterView/> </v-main>
  
</v-app>


</template>

<script>
import NavBar from './layouts/NavBar.vue';
import SideBar from './layouts/SideBar.vue';
import Footer from './layouts/Footer.vue';


export default {

  name: "App",
  components: {
    NavBar, SideBar,
    Footer
},
};
</script>
