<template>
  <div class="home-page">
    <v-alert>Hello, world</v-alert>
    <v-breadcrumb>
      <v-breadcrumb-item>Item #1</v-breadcrumb-item>
      <v-breadcrumb-item>Item #2</v-breadcrumb-item>
    </v-breadcrumb>

    <v-button></v-button>
    <v-checkbox></v-checkbox>
    <v-date-field></v-date-field>
    <v-dropdown></v-dropdown>
    <v-listbox></v-listbox>
    <v-message-box></v-message-box>
    <v-modal></v-modal>
    <v-notification></v-notification>
    <v-pagination></v-pagination>
    <v-progress></v-progress>
    <v-radio></v-radio>
    <v-search-field></v-search-field>
    <v-slider></v-slider>
    <v-tag></v-tag>
    <v-text-field></v-text-field>
    <v-toggle></v-toggle>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class ComponentName extends Vue {

}
</script>

<style scoped>

</style>