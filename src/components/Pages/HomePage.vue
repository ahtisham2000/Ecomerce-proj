<template>
   <v-container>
    <v-img src="../../assets/img1.jpeg"></v-img>
   </v-container>
   <div class="text-center pt-5">
   <v-btn size="x-large" class="products-button " to="/products" > Show All Books </v-btn>
</div>
</template>

<script>

export default {
    name: 'HomePage',
}
</script>

<style scoped>
.products-button {
      background-color: #000; /* Black background */
      color: #fff; /* White text color */
       
    }

</style>