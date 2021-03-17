import { Vue } from 'vue-property-decorator';
import { AxiosRequestConfig } from 'axios';

/** Plugins */
const VuePlugins = [
  {
    plugin: require('./axios').AxiosPlugin,
    options() {
      const axiosDefaultOptions: AxiosRequestConfig = {
        withCredentials: true,

        // Default options
      };

      return axiosDefaultOptions;
    }
  }
];

for (const { plugin, options } of VuePlugins) Vue.use(plugin, options);
