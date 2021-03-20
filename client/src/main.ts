import { Vue } from 'vue-property-decorator';
import { vuetify, router } from '@/plugins';

/** */
Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: h => h('router-view')

}).$mount('#app-root');
