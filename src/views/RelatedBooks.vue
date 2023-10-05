<template>
  <v-container>
    <h1 class="mt-3 mb-3">Related Products</h1>

    <v-row>
      <v-col
        v-for="(book, index) in product.related_books"
        :key="index"
        cols="12"
        sm="6"
        md="3"
      >
        <v-card>
          <v-img :src="book" aspect-ratio="1"></v-img>
          <!-- Add other card content here if needed -->
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import getSingleBookDetails from "@/services/apiintegrations/productAPI/getSingleBookDetails";

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

/* Add some CSS to control the layout */
.v-carousel-item {
  display: inline-block;
  width: calc(25% - 20px); /* Adjust the width to fit 4 items in a row */
  margin-right: 20px; /* Adjust the margin for spacing */
  vertical-align: top;
  box-sizing: border-box;
}

/* Remove any spacing between items */
.v-carousel .v-window-item:not(:first-child) {
  margin-left: 0;
}
</style>
