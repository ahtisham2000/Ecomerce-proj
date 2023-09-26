<template>
  <v-row>
    <v-col cols="12">
      <v-container class="login-container mt-12">
        <v-form @submit.prevent="validateForm" class="login-form">
          <h1>Log In</h1>
          <p>Enter your credentials to proceed</p>
          <!-- User name field with validation -->
          <v-text-field
            class="pt-2 mt-2"
            label="User name*"
            variant="outlined"
            type="text"
            v-model="name"
            :rules="nameRules"
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
            <v-alert v-if="formIsValid === false" type="error">
              Please fix the form errors.
            </v-alert>
            <v-btn class="black-button">
              Log In
            </v-btn>
          </div>
        </v-form>
      </v-container>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      password: '',
      formIsValid: true,
      nameRules: [
        v => !!v || 'User name is required',
      ],
      passwordRules: [
        v => !!v || 'Password is required',
      ],
    };
  },
  methods: {
    validateForm() {
      this.$refs.form.validate();
      if (this.$refs.form.hasError) {
        this.formIsValid = false;
      } else {
        // Form is valid, perform login here
        // this.handleSignup();
        this.formIsValid = true;
      }
    },
    // Add your handleSignup method here
    // handleSignup() {
    //   // Perform login logic
    // }
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
