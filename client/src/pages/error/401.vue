<template>
  <v-container class="401-page-content mt-15">
    <v-row>
      <v-col class="d-flex flex-column align-center">
        <h3 class="mb-4">Sorry but this page is only available for authenticated users. 😞</h3>
        <v-img src="@/assets/images/svg/access-account.svg" width="500"></v-img>
        <h3 class="mt-4">
          Have an account? <router-link to="/guest/login">Sign In</router-link>
        </h3>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class extends Vue {

}
</script>

<style scoped>

</style>