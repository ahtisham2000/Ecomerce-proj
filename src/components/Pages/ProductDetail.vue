<template>
  <v-container class="mt-10">
    <v-row>
      <v-col cols="6" class="firstsection">
        <!-- <div v-if="product.images && product.images.length > 0" class="images"> -->
         
            <img
            class="ml-15"
              :src="product.cover_image"
              alt="Product Image"
              height="400"
              width="300"
            />
       
        <!-- </div> -->
        <br />
             
          <v-btn class="ml-8" color="#FF9F00">Add to Favourites</v-btn>
          <v-btn class="ml-5" color="#FB641B">Add to Cart</v-btn>
        
      </v-col>
      <v-col cols="6" class="secondsection">
        <h3>{{ product.title }}</h3>
        <p>Author: <i> {{ product.author }}</i> </p>
        <p>Description: <i>{{ product.description }}</i> </p>
        <h1>Price: $ {{ product.price }} </h1>
          
      </v-col>
    </v-row>
  
  </v-container>
</template>

<script>
 import axios from 'axios';
 import GetSingleBook from "../../services/apiintegrations/productAPI/getSingleBook";
export default {
   
  name: "ProductDetailsPage",
  data() {
    return {
      product: {}, 
    };
  },
async mounted() {
    
    const BookId = this.$route.params.id;
    const response = await GetSingleBook.getSingeBook(BookId);
    this.product = response;
  },
};
</script>

<style scoped>



</style>
