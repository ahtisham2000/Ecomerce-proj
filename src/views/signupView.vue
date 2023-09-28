<template>
  <v-row>
    <v-col cols="12">
      <v-container class="signup-container">
        <v-form @submit.prevent="handleSignup" class="Signup-form">
          <h1>Sign Up</h1>
          <p>Enter your credentials to proceed</p>

          <!-- User name input field -->
          <v-text-field
            class="pt-2"
            label="Full Name*"
            variant="outlined"
            type="text"
            v-model="name"
            :rules="nameRules"
            required
            ref="nameField"
          />

          <v-alert v-if="nameError" type="error">{{ nameError }}</v-alert>

          <!-- Email input field -->
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

          <!-- Password input field -->
          <v-text-field
            class="pt-2"
            label="Password*"
            variant="outlined"
            :type="showPassword ? 'text' : 'password'"
            v-model="password"
            :rules="passwordRules"
            required
            ref="passwordField"
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="showPassword = !showPassword"
          />

          <v-alert v-if="passwordError" type="error"
            >{{ passwordError }}
          </v-alert>

          <!-- Confirm Password input field -->
          <v-text-field
            class="pt-2"
            label="Confirm Password*"
            variant="outlined"
            :type="showConfirmPassword ? 'text' : 'password'"
            v-model="confirm_password"
            :rules="confirmPasswordRules"
            required
            ref="confirmPasswordField"
            :append-icon="showConfirmPassword ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="showConfirmPassword = !showConfirmPassword"
          />

          <v-alert v-if="confirmPasswordError" type="error">{{
            confirmPasswordError
          }}</v-alert>

          <div class="text-center pt-5">
            <v-btn class="black-button" size="large">Register</v-btn>
          </div>
        </v-form>
      </v-container>
    </v-col>
  </v-row>
</template>

<script>
import registerUserApi from "../services/apiintegrations/UserAPI/registerUserApi";
export default {
  data() {
    return {
      name: "",
      email: "",
      password: "",
      confirm_password: "",
      showPassword: false, // Add this property
      showConfirmPassword: false, // Add this property
      nameError: "",
      emailError: "",
      passwordError: "",
      confirmPasswordError: "",
    };
  },
  computed: {
    nameRules() {
      return [
        (v) => !!v || "User name is required",
        (v) =>
          (v && v.length >= 3) || "User name must be at least 3 characters",
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
    confirmPasswordRules() {
      return [
        (v) => !!v || "Confirm Password is required",
        (v) => v === this.password || "Passwords do not match",
      ];
    },
  },
  methods: {
    async handleSignup() {
      console.log(`func start`)
      if (
        this.$refs.nameField.validate() &&
        this.$refs.emailField.validate() &&
        this.$refs.passwordField.validate() &&
        this.$refs.confirmPasswordField.validate()
      ) {
        console.log("Form is valid. Submitting...");
        // Add your registration logic here
        try {
          const response = await registerUserApi.registerUser({
            name: this.name,
            email: this.email,
            password: this.password,
            confirm_password: this.confirm_password,
          });
          console.log(response);
        } catch (e) {
          console.log(e);
        }
      }
    },
    async signup() {},
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
  background-color: #000;
  color: #fff;
}
</style>
