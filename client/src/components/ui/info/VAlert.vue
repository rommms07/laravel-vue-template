<template>
  <div role="alert" class="alert">
    <div class="side-fold"></div>
    <div class="alert-content">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import '@/assets/pcss/ui/info/alert.pcss';
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class extends Vue {

}
</script>