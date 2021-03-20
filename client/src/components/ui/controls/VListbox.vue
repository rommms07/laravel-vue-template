<template>
  <div class="control-wrapper">
    <ul v-if="type == 'unordered'">
      <slot></slot>
    </ul>
    <ol v-else-if="type == 'ordered'">
      <slot></slot>
    </ol>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class extends Vue {
  @Prop({ default: 'unordered' }) public readonly type!: string;
}
</script>

<style scoped>

</style>