import Vue from 'vue';
import store from './store';
import router from './router';

Vue.config.productionTip = false;

/** */
import RootComponent from './RootComponent.vue';

new Vue({
  store, router, render: h => h(RootComponent)
}).$mount('#root-component');