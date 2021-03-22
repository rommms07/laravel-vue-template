<template>
  <v-container>
    <v-row>
      <v-col class="d-flex justify-center mt-10">
        <v-btn @click="$router.push('/auth/login')" class="mx-2" color="primary">Login</v-btn>
        <v-btn @click="$router.push('/auth/signup')" class="mx-2" color="primary">Sign Up</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class ComponentName extends Vue {

}
</script>

<style lang="postcss" scoped>

</style>
