import { AxiosRequestConfig } from 'axios';
import { Vue } from 'vue-property-decorator';

const AxiosPluginOptions: AxiosRequestConfig = {
  withCredentials: true,
  baseURL: 'http://172.16.0.250:8000'
};

/** Plugins */
const VuePlugins = [
  {
    plugin: require('./axios').AxiosPlugin,
    options: AxiosPluginOptions
  }
];

for (const { plugin, options } of VuePlugins) Vue.use(plugin, options);
