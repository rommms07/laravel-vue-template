<template>
  <v-container class="home-content">
    <v-row class="mt-14">
      <v-spacer></v-spacer>
      <v-col lg="5" md="7" sm="8" cols="12">
        <v-form @submit.prevent="attemptUserLogin" class="elevation-4 pa-4 rounded-lg">
          <h2 class="font-weight-medium text-left mb-5">🔑 Laravel SPA Authentication</h2>
          <v-text-field name="email" type="email" label="Codename or Email" outlined></v-text-field>
          <v-text-field name="password" type="password" label="Password" outlined></v-text-field>
          <v-btn color="primary" type="submit" width="100%">Sign In</v-btn>
        </v-form>
      </v-col>
      <v-spacer></v-spacer>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component({

  async created() {
    this.$axios.get('/api/auth/user')
      .then(({ data: { email } }) => {
        if (email) this.$router.push('/about');
      })
      .catch(err => console.log(err));
  }
  
})
export default class extends Vue {
  public async attemptUserLogin(e: UIEvent): Promise<void> {
    this.$store.dispatch('toggleProgressBar');

    await this.$axios.get('/sanctum/csrf-cookie')
      .catch(err => console.log(err));

    const credentials = new FormData(e.target as HTMLFormElement);

    this.$axios.post('/api/guest/login', credentials)
      .then(() => {

        /** Redirect to /user */
        this.$router.push('/about').then(() => this.$store.dispatch('toggleProgressBar'));
      })
      .catch(err => console.log(err));
      
      
  }
}
</script>
