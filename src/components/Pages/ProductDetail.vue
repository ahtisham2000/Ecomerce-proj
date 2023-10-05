<template>
  <v-container class="mt-10 card-book">
    <v-row>
      <v-col cols="6" class="firstsection">
        <!-- <div v-if="product.images && product.images.length > 0" class="images"> -->

        <img
          class="ml-15 img-card"
          :src="product.cover_image"
          alt="Product Image"
          height="400"
          width="300"
        />

        <!-- </div> -->
        <br />
      </v-col>
      <v-col cols="6" class="secondsection">
        <h1>{{ product.title }}</h1>
        <h3>
          Author: <i> {{ product.author }}</i>
        </h3>
        <p>Description: {{ product.description }}</p>
        <p>Availibity : <i class="available">In stock</i></p>
        <p>Delivery time : <i class="available">2-4 days</i></p>
        <br />
        <br />
        <h1>Price: $ {{ product.price }}</h1>
        <br />

        <v-btn class="" color="#FF9F00">Add to Favourites</v-btn>
        <!-- now i want that when user clicks on this button add to cart button, a v-alert shows with a message "product is added in cart" -->
        <v-btn class="ml-5" color="#FB641B" @click="AddtoCart()"
          >Add to Cart</v-btn
        >
      </v-col>
    </v-row>

    <!-- v-alert for showing the cart message -->
    <v-alert
      v-model="showCartMessage"
      type="success"
      dismissible
      class="cart-alert"
    >
      Added to Cart.
    </v-alert>

    
    
  </v-container>

  <!-- FeedBackView -->
  
  <FeedBackView />
<!--Related Books  -->
<RelatedBooks/>
</template>

<script>
import GetSingleBook from "../../services/apiintegrations/productAPI/getSingleBook";
import FeedBackView from "../../views/FeedBackView.vue";
import RelatedBooks from "../../views/RelatedBooks.vue";

export default {
  name: "ProductDetailsPage",
  components: {
    FeedBackView,RelatedBooks
  },
  data() {
    return {
      product: {},
      showCartMessage: false,
    };
  },
  async mounted() {
    const BookId = this.$route.params.id;
    const response = await GetSingleBook.getSingeBook(BookId);
    this.product = response.book;
  },
  methods: {
    AddtoCart() {
      this.$store.dispatch("AddBooktoCart", {
        id: this.product.id,
        title: this.product.title,
        quantity: 1,
        price: this.product.price,
      });

      // Show the cart message alert
      this.showCartMessage = true;

      // Hide the alert after a few seconds (e.g., 3 seconds)
      setTimeout(() => {
        this.showCartMessage = false;
      }, 3000); // Adjust the duration as needed
    },
  },
};
</script>

<style scoped>
.available {
  color: green;
}

.card-book {
  background-color: #f3f4f6;
  border-radius: 8px;
}

.cart-alert {
  width: 30%;
  position: relative;
  left: 75%;
  bottom: 20% !important;
}
</style>
