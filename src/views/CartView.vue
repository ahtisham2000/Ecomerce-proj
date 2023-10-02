<template>
    <v-container class="card-container">
    <v-card> 
        <v-table theme="dark">
    <thead>
      <tr>
        <th class="text-left">Name</th>
        <th class="text-left">Qty</th>
        <th class="text-left">Price</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in cart" :key="item.name">
        <td>{{ item.title }}</td>
        <td>{{ item.quantity }}</td>
        <td>{{ item.price }}</td>
      </tr>
    </tbody>
  </v-table>
    </v-card>

    <div class="pt-5 text-right" >
      <h2>Total Amount : $1233</h2>
      <br/>
    <v-btn   color="#388E3C" class="checkout-btn primary" size="large" >Continue Shopping
    </v-btn>
    <v-btn  color="#01579B" class="checkout-btn ml-2" size="large">Checkout</v-btn>
</div>
</v-container>

</template>


<script>
  export default {
    name: 'CartView',
    data() {
      return {
        cart: [
          // product from product detail page
        ],
      }
    },
    computed:{
      cart() {
        console.log(this.$store.state.cart[0])
        this.cart.push(this.$store.state.cart[0])
        return this.$store.state.cart
      }
    },
  };
</script>


<style scoped>
.cart-button {
      background-color: #000; /* Black background */
      color: #fff; /* White text color */
       
    }
</style>