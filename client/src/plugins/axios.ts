
import { AxiosRequestConfig, AxiosInstance } from 'axios';
import { Vue as _Vue } from 'vue-property-decorator';
import axios from 'axios';

export function AxiosPlugin(Vue: typeof _Vue, options?: AxiosRequestConfig) {
  const service: AxiosInstance = axios.create(options);
  
  service.interceptors.response.use(response => response, error => {
    const _err: { [key: string]: any } = {};

    if (typeof error.response === 'undefined') {
      const { message } = error.toJSON();

      _err.message = message;
    } else {
      const { response } = error;
      const { status, statusText } = response;
      const { message, errors } = response.data;

      _err.message = message;
      _err.status = status;
      _err.statusText = statusText;
      _err.data = errors;
    }

    return Promise.reject(_err);
  });

  Vue.prototype.$axios = service;
}