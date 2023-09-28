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
        <td>{{ item.name }}</td>
        <td>{{ item.Qty }}</td>
        <td>{{ item.Price }}</td>
      </tr>
    </tbody>
  </v-table>
    </v-card>
    <div class="pt-5 text-right" >
    <v-btn variant="outlined" class="checkout-btn" size="large">Checkout</v-btn>
</div>
</v-container>

</template>


<script>
  export default {
    name: 'CartView',
    data() {
      return {
        cart: [
          {
            name: 'iphone',
            Qty: 1,
            Price: 1000,
          },
          {
            name: 'samsung',
            Qty: 1,
            Price: 5000,
          },
          {
            name: 'book',
            Qty: 1,
            Price: 498,
          },
        ],
      }
    },
  }
</script>


<style scoped>
.cart-button {
      background-color: #000; /* Black background */
      color: #fff; /* White text color */
       
    }
</style>