<template>
  <button :type="type">
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class extends Vue {
  @Prop({
    type: String,
    default: 'button'
  }) public readonly type!: string;
}
</script>

<style scoped>

</style>