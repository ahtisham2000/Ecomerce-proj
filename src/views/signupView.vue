<template>
  <v-row>
    <v-col cols="12">
      <v-container class="signup-container pt-10">
        <v-form @submit.prevent="handleSignup" class="Signup-form">
          <h1>Sign Up</h1>
          <p>Enter your credentials to proceed</p>
    
          <!-- input fields -->
          <v-text-field
            class="pt-2"
            label="User name*"
            variant="outlined"
            type="text"
            v-model="name"
            :rules="nameRules"
            required
            ref="nameField"
          />
        
          <v-alert v-if="nameError" type="error">{{ nameError }}</v-alert>

          <v-text-field
            class="pt-2"
            label="Email Address*"
            variant="outlined"
            type="email"
            v-model="email"
            :rules="emailRules"
            required
            ref="emailField"
          />
          
          <v-alert v-if="emailError" type="error">{{ emailError }}</v-alert>

          
          <v-text-field
            class="pt-2"
            label="Password*"
            variant="outlined"
            type="password"
            v-model="password"
            :rules="passwordRules"
            required
            ref="passwordField"
          />
        
          <v-alert v-if="passwordError" type="error">{{ passwordError }}</v-alert>

          <div class="text-center">
            <v-btn class="black-button">Register</v-btn>
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
      name: "",
      email: "",
      password: "",
      nameError: "",
      emailError: "",
      passwordError: "",
    };
  },
  computed: {
    nameRules() {
      return [
        (v) => !!v || "User name is required",
        (v) => (v && v.length >= 3) || "User name must be at least 3 characters",
      ];
    },
    emailRules() {
      return [
        (v) => !!v || "Email is required",
        (v) => /.+@.+\..+/.test(v) || "Email must be valid",
      ];
    },
    passwordRules() {
      return [
        (v) => !!v || "Password is required",
        (v) => (v && v.length >= 8) || "Password must be at least 8 characters",
      ];
    },
  },
  methods: {
    handleSignup() {
      // Validate the form fields
      if (this.$refs.nameField.validate() && this.$refs.emailField.validate() && this.$refs.passwordField.validate()) {
        // Form is valid, perform registration or submission logic here
        console.log("Form is valid. Submitting...");
      }
    },
  },
};
</script>

<style scoped>
.signup-container {
  display: flex;
  width: 100%;
  
}

.Signup-form {
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
