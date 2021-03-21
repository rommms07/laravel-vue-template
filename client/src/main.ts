import { Vue } from 'vue-property-decorator';
import { vuetify, router } from '@/plugins';
import store from '@/store';

Vue.config.productionTip = false;

new Vue({
  store,
  router,
  vuetify,
  render: h => h('router-view')
  
}).$mount('#app-root');
