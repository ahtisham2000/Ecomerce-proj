<template>
  <v-container class="card-container">
    <v-card v-if="cart.length > 0">
      <v-table theme="dark">
        <thead>
          <tr>
            <!-- i want this row dark -->
            <th class="text-left">Name</th>
            <th class="text-left">Qty</th>
            <th class="text-left">Price</th>
            <th class="text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          <!-- i want these rows light -->
          <tr v-for="item in cart" :key="item.name" class="light-bg">
            <td>{{ item.title }}</td>
            <td>{{ item.quantity }}</td>
            <td>{{ item.price }}</td>
            <td class="text-center">
              <v-icon @click="removeProductFromCart(item.title)" color="red"
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
      <v-btn color="#01579B" class="checkout-btn ml-2" size="large"
        >Checkout</v-btn
      >
    </div>
  </v-container>
</template>

<script>
export default {
  name: "CartView",
  data() {
    return {
      cart: [
        // product from product detail page
      ],
    };
  },
  computed: {
    cart() {

      this.cart.push(this.$store.state.cart[0]);     

       let title = this.$store.state.cart.title;
       let quantity = this.$store.state.cart.quantity;
       let price = this.$store.state.cart.price;
      
      let cartObjects = {
        title: title,
        quantity: quantity,
        price: price,
      }
      // Save the title to local storage
      let cartArrayofObjects =[] 
      cartArrayofObjects.push(cartObjects)
      console.log(cartArrayofObjects)
      localStorage.setItem('addToCarts', JSON.stringify(cartArrayofObjects))
      return this.$store.state.cart;
      
    },
      cartTotalPrice() {
      return this.$store.getters.cartTotalPrice;
    },
  },

  methods: {
    removeProductFromCart(title) {
      this.$store.dispatch("removeProductFromCart", {title});
    },
    },
}

</script>

<style scoped>
.cart-button {
  background-color: #000; /* Black background */
  color: #fff; /* White text color */
}
</style>
