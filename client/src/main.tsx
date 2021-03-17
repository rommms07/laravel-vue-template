/** Tailwind */
import '@/assets/tailwind.pcss';

import Vue from 'vue';
import store from '@/store';
import router from '@/router';

/** Register the plugins */
import '@/plugins';

Vue.config.productionTip = false;

new Vue({
  store, router,

  render() {
    return (<router-view></router-view>)
  }

}).$mount('#root-component');