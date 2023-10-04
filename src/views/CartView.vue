<template>
  <v-container class="card-container">
    <v-card v-if="cart.length > 0">
      <v-table theme="dark">
        <thead>
          <tr>
      
            <th class="text-left">Name</th>
            <th class="text-left">Qty</th>
            <th class="text-left">Price</th>
            <th class="text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in cart" :key="item.name" class="light-bg">
            <td>{{ item.title }}</td>
            <td>{{ item.quantity }}</td>
            <td>{{ item.price }}</td>
            <td class="text-center">
              <v-icon @click="removeProductFromCart(item.id)" color="red"
                >mdi-close</v-icon
              >
            </td>
          </tr>
        </tbody>
      </v-table>
    </v-card>
    <div v-else class="text-center">
      <h1>Your cart is empty.</h1>
    </div>

    <div class="pt-5 text-right">
      <h2>Total Amount : $ {{ cartTotalPrice }}.00</h2>
      <br />
      <v-btn color="#388E3C" class="checkout-btn primary" size="large"
        >Continue Shopping
      </v-btn>
      <v-btn
        color="#01579B"
        class="checkout-btn ml-2"
        size="large"
        @click="checkout"
        >Checkout</v-btn
      >
    </div>
  </v-container>
</template>

<script>
import CheckoutApi from "../../src/services/apiintegrations/productAPI/CheckoutApi";
export default {
  name: "CartView",
  data() {},
  computed: {
    cart() {
      const currentCart = this.$store.state.cart;
      console.log(currentCart[2]);
      localStorage.setItem("addToCarts", JSON.stringify(currentCart));
      return currentCart;
    },

    cartTotalPrice() {
      return this.$store.getters.cartTotalPrice;
    },
  },

  methods: {
    removeProductFromCart(id) {
      this.$store.dispatch("removeProductFromCart", { id });
    },

    async checkout() {
      try {
        let checkoutData = this.cart.map((item) => ({
          book_id: item.id,
          quantity: item.quantity,
        }));
        let book_id = [];
        let quantity = [];
        checkoutData.map((item) => {
          book_id.push(item.book_id);
          quantity.push(item.quantity);
        });
        console.log(book_id);
        console.log(quantity);
        // update checkoutData from array of objects to array of arrays
        
        console.log(checkoutData);
        const response = await CheckoutApi.checkout({
          "book_id": book_id,
          "quantity": quantity
        });
        console.log(response);
        this.$store.dispatch("clearCart");
        this.$router.push({ name: "Checkout" });

        let ordersuccess = await CheckoutApi.checkout(checkoutData);
        console.log(ordersuccess);

        // Handle success or any further actions
        // For example, you can clear the cart after a successful checkout
       
      } catch (error) {
        // Handle any errors, e.g., show an error message
        console.error("Checkout error:", error);
        alert("Checkout failed. Please try again later.");
      }
    },
  },
};
</script>

<style scoped>
.cart-button {
  background-color: #000; /* Black background */
  color: #fff; /* White text color */
}
</style>
