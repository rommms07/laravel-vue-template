import { Vue } from 'vue-property-decorator';
import { AxiosRequestConfig } from 'axios';

import AxiosPlugin from './axios';
import VuetifyPlugin from './vuetify';

import _router from '@/router';

const plugins = [
  {
    plugin: AxiosPlugin,
    options: {
      withCredentials: true,
      baseURL: process.env.AXIOS_BASE_URL

    } as AxiosRequestConfig
  },
  {
    plugin: VuetifyPlugin,
    options: undefined
  }
];

for (const { plugin, options } of plugins) Vue.use(plugin, options);

/** */
export const router = _router;
export const vuetify = new VuetifyPlugin({

});