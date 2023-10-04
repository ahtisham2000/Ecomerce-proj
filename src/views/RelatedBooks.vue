<template>
    <div>
      <h1>Related Books</h1>
      <v-carousel>
        <v-carousel-item
          v-for="(book, index) in product.related_books"
          :key="index"
          :src="book"
          reverse-transition="fade-transition"
          transition="fade-transition"
        >
          <v-card class="mx-auto" max-width="400">
            <v-img :src="book" aspect-ratio="1"></v-img>
            <v-card-title class="headline">{{ `Book ${index + 1}` }}</v-card-title>
            <v-card-subtitle>{{ `Author: Author Name` }}</v-card-subtitle>
            <v-card-text>
              Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </v-card-text>
            <v-card-actions>
              <v-btn color="primary">View Details</v-btn>
            </v-card-actions>
          </v-card>
        </v-carousel-item>
      </v-carousel>
    </div>
  </template>
  
  <script>
  import getSingleBookDetails from '@/services/apiintegrations/productAPI/getSingleBookDetails';
  
  export default {
    name: "RelatedBooks",
  
    data() {
      return {
        product: {
          rating: 0,
          reviews: [],
          related_books: [],
        },
        userRating: 0,
      };
    },
  
    async mounted() {
      const BookId = this.$route.params.id;
      const response = await getSingleBookDetails.getSingleBookDetails(BookId);
      this.product = response.details;
    },
  };
  </script>
  
  <style scoped>
  /* Add any custom styles here */
  </style>
  