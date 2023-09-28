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
            @input="filterProducts"
          ></v-text-field>
        </div>
        <v-divider></v-divider>

        <!-- show filtered products here -->
        <v-row>
          <v-col v-for="product in paginatedProducts" :key="product.id" cols="4">
            <router-link  class="router-dec"
            :to="'/productdetail/' + product.id"
            >
            <v-card class="prod-card">
              <v-img :src="product.cover_image" height="200"></v-img>
              <v-card-title>{{ product.title }}</v-card-title>
              <v-card-subtitle>{{ product.author }}</v-card-subtitle>
              <v-card-text>{{ product.description }}</v-card-text>
              <v-card-actions>
                <v-btn color="primary">Price: ${{ product.price }}</v-btn>
                <v-btn color="success">Rating: {{ product.rating }}</v-btn>
              </v-card-actions>
            </v-card>
          </router-link>
          </v-col>
        </v-row>

      </v-col>
    </v-row>
     <!-- Pagination controls -->
     <v-col cols="12">
          <v-pagination
            v-if="totalPages > 1"
            v-model="currentPage"
            :length="totalPages"
            @input="goToPage"
          ></v-pagination>
        </v-col>
  </v-container>
</template>

<script>
import GetAllBooks from "../../services/apiintegrations/productAPI/getAllBooks"
import SideBar from "../../layouts/SideBar.vue";
import axios from 'axios';

export default {
  name: "ProductsPage",
  components: {
    SideBar,
  },
  data() {
    return {
      products: [],
      search: "",
      currentPage: 1,
      productsPerPage: 12,
    };
  },
  computed: {
    paginatedProducts() {
      const startIndex = (this.currentPage - 1) * this.productsPerPage;
      const endIndex = startIndex + this.productsPerPage;
      return this.filteredProducts.slice(startIndex, endIndex);
    },
    filteredProducts() {
      return this.products.filter((product) =>
        product.title.toLowerCase().includes(this.search.toLowerCase())
      );
    },
    totalPages() {
      return Math.ceil(this.filteredProducts.length / this.productsPerPage);
    },
  },
  methods: {
    async fetchProducts() {
      const response = await GetAllBooks.getAllBooks();
      this.products = response.books;
    },
    filterProducts() {
      this.currentPage = 1; // Reset to first page when searching
      this.fetchProducts(); // Fetch products from the API
    },
    goToPage(page) {
      this.currentPage = page;
    },
  },
  mounted() {
    this.fetchProducts();
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
.prod-card{
  border: 1px solid lightgray;
  height: 100%;
  width: 100%;
}
.router-dec{
  text-decoration: none;
}          


</style>
