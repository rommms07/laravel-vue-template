import { PluginFunction } from 'vue';
import { AxiosRequestConfig, AxiosInstance } from 'axios';
import { Vue as _Vue } from 'vue-property-decorator';
import axios from 'axios';

export function AxiosPlugin<PluginFunction>(Vue: typeof _Vue, options?: AxiosRequestConfig) {
  const service = axios.create(options);
  
  Vue.prototype.$axios = service;
}