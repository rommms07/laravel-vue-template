import { Vue } from 'vue-property-decorator';
import { vuetify, router } from '@/plugins';
import store from '@/store';
const { $axios: axios } = Vue.prototype;

Vue.config.productionTip = false;

router.beforeEach(async (to, from, next) => {
  const  { authenticatedUserOnly, globalRoute } = to.meta;

  try {
    const { data: user } = await axios.get('/api/auth/user');

    // Routes that are only for unauthenticated users are prevented
    // from being navigated to by logged in users.
    if (!authenticatedUserOnly && !globalRoute) next('/admin');
    
    next();
  } catch(error) {
    // Routes that are only accessible by authenticated users.
    if (authenticatedUserOnly) next('/auth/login');
    
    next();
  }
});

new Vue({
  store,
  router,
  vuetify,
  render: h => h('router-view')
  
}).$mount('#app-root');
