<template>
  <v-app>
    <v-app-bar 
      elevation="3"
      app 
      color="primary" 
      dark>
      <v-app-bar-title>
        <h4 class="font-weight-regular">laravel-vue-template</h4>
      </v-app-bar-title>

      <v-spacer></v-spacer>
      
      <v-btn icon title="Logout" @click="onUserLogout" v-if="$route.meta.authenticatedUserOnly">
        <v-icon>mdi-logout</v-icon>
      </v-btn>
    </v-app-bar>
    

    <v-main>
      <v-progress-linear indeterminate v-if="currentProgressBarState"></v-progress-linear>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class extends Vue {

  public async onUserLogout(): Promise<void> {
    this.$store.dispatch('toggleProgressBar');

    try {
      await this.$axios.put('/api/auth/logout');
      localStorage.removeItem('user');

      this.$router.replace('/auth/login');
    } catch(error) {
      console.log(error);
    }

    this.$store.dispatch('toggleProgressBar');
  }

  get currentProgressBarState(): boolean {
    return this.$store.state.progressBarShow;
  }
}
</script>
