
import { AxiosRequestConfig } from 'axios';
import { Vue as _Vue } from 'vue-property-decorator';
import axios from 'axios';

export function AxiosPlugin(Vue: typeof _Vue, options?: AxiosRequestConfig) {
  const service = axios.create(options);

  Vue.prototype.$axios = service;
}