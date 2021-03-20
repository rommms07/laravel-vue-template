<template>
  <li class="breadcrumb-item">
    <slot></slot>
  </li>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class extends Vue {

}
</script>

<style scoped>

</style>