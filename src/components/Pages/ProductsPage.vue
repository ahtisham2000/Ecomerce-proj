<template>
    <v-container>
      <v-row>
        <!-- 1st section -->
        <v-col cols="3" class="First-part">
          <SideBar />
        </v-col>
  
        <!-- 2nd section -->
        <v-col cols="9" class="Second-part">
          <!-- search -->
          <div>
            <v-text-field
              v-model="search"
              label=" Search "
              class="search-bar"
              variant="outlined"
            ></v-text-field>
          </div>
          <v-divider></v-divider>
  
          <!-- show all the products here -->
          <v-row>
            <v-col v-for="product in products" :key="product.id" cols="4">
              <v-card>
                <v-img :src="product.thumbnail" height="200"></v-img>
                <v-card-title>{{ product.title }}</v-card-title>
                <v-card-subtitle>{{ product.brand }}</v-card-subtitle>
                <v-card-text>{{ product.description }}</v-card-text>
                <v-card-actions>
                  <v-btn color="primary">Price: ${{ product.price }}</v-btn>
                  <v-btn color="success">Rating: {{ product.rating }}</v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script>
  import SideBar from "../../layouts/SideBar.vue";
  
  export default {
    name: "ProductsPage",
    components: {
      SideBar,
    },
    data() {
      return {
        products: [],
        search: "", // You can use this for filtering products
      };
    },
    mounted() {
      // Make the API request and update the products data property
      fetch('https://dummyjson.com/products')
        .then(res => res.json())
        .then(data => {
          this.products = data.products;
        });
    },
  };
  </script>
  
  <style scoped>
  .First-part {
    border: 1px solid lightgray;
  }
  .Second-part {
    border: 1px solid lightgray;
  }
  </style>
  