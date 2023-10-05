<template>
  <v-container>
    <h1 class="mb-4">Ratings & Reviews</h1>

    <v-row class="feedback">
      <v-col cols="5" class="Rattings">
        <div class="Rattings-section">
          <h2>Ratings: {{ product.rating }}/5</h2>
          <v-rating color="yellow" v-model="displayRating"></v-rating>
          <br />
          <v-btn color="#FB641B" @click="openDialog">Add Review</v-btn>
          <!-- i want when i click on this buttoon a dialogue box appear where i can submit my rating in form 
        of stars and a review in form of text -->
          <!-- Dialog Box -->
          <v-dialog v-model="dialog" max-width="500px">
            <v-card>
              <v-card-title>Add Review</v-card-title>
              <v-card-text>
                <!-- Rating Stars -->
                <v-rating color="yellow" v-model="userRating"></v-rating>
                <!-- Review Text -->
                <v-textarea v-model="reviewText" label="Review"></v-textarea>
              </v-card-text>
              <v-card-actions class="justify-end">
                <v-btn color="error" @click="closeDialog">Cancel</v-btn>
                <v-btn color="primary" @click="submitReview">Submit</v-btn>
                
              </v-card-actions>
            </v-card>
          </v-dialog>
        </div>
      </v-col>

      <v-col cols="7">
        <div class="Review-section">
          <ul class="review-list">
            <li
              v-for="(review, index) in product.reviews"
              :key="index"
              class="review-item"
            >
              <p><b> User Id: </b>{{ review.user_id }}</p>
              <p>{{ review.text }}</p>
              <hr />
            </li>
          </ul>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import getSingleBookDetails from "@/services/apiintegrations/productAPI/getSingleBookDetails";

export default {
  name: "FeedBackView",
  data() {
    return {
      product: {
        rating: 0,
        reviews: [],
      },
      userRating: 0,
      displayRating: 0,
      dialog: false, // Initialize dialog to false
      reviewText: "", // Store review text
    };
  },
  async mounted() {
    const BookId = this.$route.params.id;
    const response = await getSingleBookDetails.getSingleBookDetails(BookId);
    this.product = response.details;
    this.product.rating = response.details.rating;
    this.displayRating = response.details.rating;
  },
  methods: {
    openDialog() {
      // Open the dialog
      this.dialog = true;
    },
    closeDialog() {
      // Close the dialog and reset values
      this.dialog = false;
      this.userRating = 0;
      this.reviewText = "";
    },
    submitReview() {
      // Here, you can submit the review data to your backend or store it as needed
      // After submission, close the dialog
      this.dialog = false;
      this.userRating = 0;
      this.reviewText = "";
    },
  },
};
</script>

<style scoped>
.feedback {
  border-radius: 8px;
  background-color: #f3f4f6;
  /* border: 1px solid #f3f4f6; */
}
.top-row {
  background-color: #f3f4f6;
}
.Rattings {
  border-right: 2px solid lightgrey;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
}

.Review-section {
  border-radius: 8px;
  padding: 16px;
  /* Limit the height to create a scrollable area */
}

.review-list {
  height: 50vh;
  list-style: none;
  padding: 0;
  overflow-y: auto;
}

.review-item {
  margin-bottom: 16px;
}
</style>
