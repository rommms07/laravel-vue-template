<template>
  <v-app>
    <v-progress-linear indeterminate v-if="currentProgressBarState"></v-progress-linear>

    <v-app-bar app color="primary" dark>
      <v-app-bar-title>
        Laravel
      </v-app-bar-title>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class extends Vue {
  get currentProgressBarState(): boolean {
    return this.$store.state.progressBarShow;
  }
}
</script>
