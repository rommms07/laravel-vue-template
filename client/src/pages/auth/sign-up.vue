<template>
  <v-container>
    <v-row class="mt-3">
      <v-spacer></v-spacer>
      <v-col>
        <v-responsive width="460" class="pa-4 elevation-4 rounded-lg">
          <h2 clas="font-weight-medium">Create your account!</h2>
          <p class="font-weight-thin">Get further connected with the 🌍 by creating an account</p>
          <div class="mt-8">
            <v-form ref="registerForm" @submit.prevent="onRegisterSubmit">
              <v-text-field
                label="Full Name"
                name="name"
                outlined
              ></v-text-field>

              <v-text-field
                label="Codename or Email"
                name="email"
                outlined
              ></v-text-field>

              <v-text-field
                label="Password"
                type="password"
                name="password"
                outlined
              ></v-text-field>

              <v-text-field
                label="Confirm your password"
                type="password"
                name="password_confirmation"
                outlined
              ></v-text-field>

              <v-btn 
                class="font-weight-medium"
                color="primary" 
                type="submit" 
                width="100%" 
                height="50">Sign Up</v-btn>

              <router-link 
                class="d-block mt-1 text-decoration-none caption float-right" 
                to="/auth/login">
                Already have an account?
              </router-link>
            </v-form>
          </div>
        </v-responsive>
      </v-col>
      <v-spacer></v-spacer>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class AuthSignupPage extends Vue {
  public async onRegisterSubmit(e: UIEvent): Promise<void> {
    await this.$axios.get('/sanctum/csrf-cookie');

    this.$store.dispatch('toggleProgressBar');
    /** Perform some input validation. */

    const credentials = new FormData(e.target as HTMLFormElement);

    try {
      const { data } = await this.$axios.post('/api/guest/register', credentials);
      this.$router.replace('/auth/login');
    } catch(error) {
      console.log(error);
    }

    this.$store.dispatch('toggleProgressBar');
  }
}
</script>

<style lang="postcss" scoped>

</style>
