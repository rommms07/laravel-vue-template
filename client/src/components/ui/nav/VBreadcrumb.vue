<template>
  <nav class="breadcrumb-wrapper">
    <ul class="breadcrumb">
      <slot></slot>
    </ul>
  </nav>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class extends Vue {

}
</script>
