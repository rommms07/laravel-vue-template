<template>
  <v-container>
    <v-row>
      <v-spacer></v-spacer>
      <v-col>
        <v-responsive width="460" class="pa-4 elevation-4 rounded-lg mt-4">
          <h2 class="font-weight-medium">Sign-in your account! 😊🗝️</h2>
          <p class="font-weight-light">Access our convenient services with your account!</p>
          <v-form @submit.prevent="onAttemptLogin" class="mt-8">
            <v-text-field
              label="Codename or Email"
              type="email"
              name="email"
              outlined
            ></v-text-field>

            <v-text-field
              label="Password"
              type="password"
              name="password"
              outlined
            ></v-text-field>

            <v-btn 
              class="font-weight-medium"
              color="primary" 
              type="submit" 
              width="100%" 
              height="50">Sign In</v-btn>
            <router-link 
              class="d-block mt-1 text-decoration-none caption float-right" 
              to="/auth/signup">
              Don't have an account yet?
            </router-link>
          </v-form>
        </v-responsive>
      </v-col>
      <v-spacer></v-spacer>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class AuthLoginPage extends Vue {
  public async onAttemptLogin(e: UIEvent): Promise<void> {
    await this.$axios.get('/sanctum/csrf-cookie');
    
    this.$store.dispatch('toggleProgressBar');

    const credentials = new FormData(e.target as HTMLFormElement);

    try {
      const { data: user } = await this.$axios.post('/api/guest/login', credentials);

      localStorage.setItem('user', JSON.stringify(user));

      this.$router.replace('/admin');
    } catch(error) {
      console.log(error);
    }

    this.$store.dispatch('toggleProgressBar');
  }
}
</script>

<style lang="postcss" scoped>

</style>
