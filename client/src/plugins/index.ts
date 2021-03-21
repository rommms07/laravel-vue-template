/* eslint-disable */

import _router from '@/plugins/router';

import { Vue } from 'vue-property-decorator';
import { PluginFunction, PluginObject } from 'vue';
import { AxiosRequestConfig } from 'axios';

/** Plugins */
import AxiosPlugin from '@/plugins/axios';
import VuetifyPlugin from '@/plugins/vuetify';
import VuexPlugin from 'vuex';

interface VuePlugin {
  plugin: PluginObject<any> | PluginFunction<any>;
  options?: any | undefined;
};

const plugins: VuePlugin[] = [
  {
    plugin: AxiosPlugin,
    options: {
      withCredentials: true,
      baseURL: process.env.VUE_APP_AXIOS_API_BASE_URL

    } as AxiosRequestConfig
  },
  {
    plugin: VuetifyPlugin,
    options: undefined
  },
  {
    plugin: VuexPlugin,
    options: undefined
  }
];

for (const { plugin, options } of plugins) Vue.use(plugin, options);

export const router = _router;
export const vuetify = new VuetifyPlugin({
  icons: {
    iconfont: 'mdiSvg'
  }
})
