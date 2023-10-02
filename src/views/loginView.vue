<template>
  <v-row>
    <v-col cols="12">
      <v-container class="login-container mt-12">
        <v-form @submit.prevent="handleLogin" ref="form" class="login-form">
          <h1>Log In</h1>
          <p>Enter your credentials to proceed</p>
          <!-- User name field with validation -->
          <v-text-field
            class="pt-2 mt-2"
            label="Email*"
            variant="outlined"
            type="email"
            v-model="email"
            :rules="emailRules"
            required
          />
          <v-text-field
            class="pt-2"
            label="Password*"
            variant="outlined"
            type="password"
            v-model="password"
            :rules="passwordRules"
            required
          />
          <!-- Display error messages -->
          <div class="text-center">
            <v-btn class="black-button" type="submit"> Log In </v-btn>
          </div>
        </v-form>
      </v-container>
    </v-col>
  </v-row>
</template>

<script>
import LoginUserApi from "@/services/apiintegrations/UserAPI/loginUserApi";

export default {
  data() {
    return {
      email: "",
      password: "",
      formIsValid: true,
      emailRules: [(v) => !!v || "Email is required"],
      passwordRules: [(v) => !!v || "Password is required"],
    };
  },
  methods: {
    async handleLogin() {
      try {
        const response = await LoginUserApi.loginUser({
          email: this.email,
          password: this.password,
        });
        console.log(response);
        if (response.message === "Login Successful") {
          localStorage.setItem("token", response.token);
          this.$router.push("/");
        }
      } catch (error) {
        throw error;
      }
    },
  },
};
</script>

<style scoped>
.login-container {
  display: flex;
  width: 100%;
}

.login-form {
  margin: auto;
  width: 40%;
  justify-content: center;
  align-items: center;
}

.black-button {
  background-color: #000; /* Black background */
  color: #fff; /* White text color */
}
</style>
