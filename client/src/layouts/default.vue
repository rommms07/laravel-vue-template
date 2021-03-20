<template>
  <div class="default-layout h-screen dark:bg-gray-800 dark:text-white">
    <div class="container mx-auto">
      <router-view></router-view>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class extends Vue {
  
}
</script>

<style scoped>

</style>