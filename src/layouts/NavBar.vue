<template>
 
  <v-layout>
    <v-toolbar class="pl-16 pr-16" color="black">
      <div>
        <v-btn variant="plain" to="/">
          <v-toolbar-title class="mr-6">Books.pk</v-toolbar-title>
        </v-btn>
      </div>
      <v-spacer></v-spacer>
      <v-icon color="white" variant="plain" class="pa-4">mdi-account</v-icon>
      <router-link to="/cart">
        <v-icon color="white" variant="plain" class="pa-4"> mdi-cart</v-icon>
      </router-link>
      <v-btn variant="plain" to="/login" class="nav-btn nav-link">
        Login
      </v-btn>
      <v-btn variant="plain" to="/signup" class="nav-btn nav-link">
        Sign Up
      </v-btn>
    </v-toolbar>
  
  </v-layout>
</template>

<script>
export default {
  name: "NavBar",
  methods: {
    signIn() {
      // Implement your Sign Up logic here
      // For example, you can use Vue Router to navigate to the Sign Up page.
    },
    logIn() {
      // Implement your Login logic here
      // For example, you can use Vue Router to navigate to the Login page.
    },
  },
};
</script>

<style scoped>
.nav-btn {
  color: white;
}

/* Style visited links */
.nav-link {
  color: white;
}

/* Style visited links, if needed */
.nav-link:visited {
  color: white;
}
</style>
