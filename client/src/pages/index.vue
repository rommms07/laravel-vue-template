<template>
  <div class="home">
    <app></app>
  </div>
</template>

<script>
import App from '@/App.vue';
import { Vue, Component } from 'vue-property-decorator';

@Component({
  components: { App }
})
export default class extends Vue {

}
</script>
