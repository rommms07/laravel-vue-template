<template>
  <v-app>
    <v-progress-linear indeterminate v-if="currentProgressBarState"></v-progress-linear>
    <v-main>
      <v-container>
        <router-view></router-view>
      </v-container>
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
