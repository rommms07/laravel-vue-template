/** Tailwind */
import '@/assets/tailwind.pcss';

import { Vue } from 'vue-property-decorator';
import router from '@/router';

/** Register the plugins */
import '@/plugins';
import '@/components';

Vue.config.productionTip = false;

new Vue({
  router,

  render() {
    return (<router-view></router-view>)
  }

}).$mount('#root-component');