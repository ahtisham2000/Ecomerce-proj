<template>
    
      <v-row>
        <v-col cols="6" class="first-section">
          <div class="text-center"> 
            <v-card>
              <h2>Ratings: {{ product.rating }}/5</h2>
              <v-rating color="yellow" v-model="userRating"></v-rating>
              <br/>
              Give your review
              <p></p>
              <v-btn @click="addReview">Add Review</v-btn>
            </v-card>
          </div>
        </v-col>
  
        <v-col cols="6" class="second-section">
          <div class="feedback-section">
            <v-card>
            <h2>Reviews</h2>
            <ul class="review-list">
              <li v-for="(review, index) in product.reviews" :key="index" class="review-item">
                {{ review.text }}
              </li>
            </ul>
        </v-card>
          </div>
        </v-col>
      </v-row>
    
  </template>
  
  <script>
  import getSingleBookDetails from '@/services/apiintegrations/productAPI/getSingleBookDetails';
  
  export default {
    name: "FeedBackView",
    data() {
      return {
        product: {
          rating: 0,
          reviews: [],
        },
        userRating: 0,
      };
    },
    async mounted() {
      const BookId = this.$route.params.id;
      const response = await getSingleBookDetails.getSingleBookDetails(BookId);
      this.product = response.details;
    },
    methods: {
      addReview() {
        // Implement logic to open a review form or dialog
        // When a review is submitted, push it to this.product.reviews array
        // Make sure to include both a rating and text in the review object.
      },
    },
  };
  </script>
  
  <style scoped>
  .feedback-section {
    background-color: #f3f4f6;
    border-radius: 8px;
    padding: 16px;
    overflow-y: auto; /* Add a scrollbar when content overflows */
    max-height: 400px; /* Limit the height to create a scrollable area */
  }
  
  .review-list {
    list-style: none;
    padding: 0;
  }
  
  .review-item {
    margin-bottom: 16px;
  }
  </style>
  