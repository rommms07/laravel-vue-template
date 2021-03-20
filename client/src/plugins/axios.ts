/* eslint-disable */
import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { Vue } from 'vue-property-decorator';

export default function(_Vue: typeof Vue, options?: AxiosRequestConfig): void {
  const service: AxiosInstance = axios.create(options);

  interface ErrorResponse {
    message?: string;
    errors?: Record<string, any>;
    status?: number,
    statusText?: string
  }

  service.interceptors.response.use(response => response, error => {
    const _err: ErrorResponse = {};

    if (!error.response) {
      /** Network connectivity issue */
      const { message } = error;

      _err.message = message;
      _err.errors = {};
      _err.status = 0;
      _err.statusText = 'NetworkAccessError';
    } else {
      const { response: { data, message, status, statusText } } = error;

      _err.errors = data;
      _err.message = message;
      _err.status = status;
      _err.statusText = statusText;
    }

    return Promise.reject(_err);
  });

  _Vue.prototype.$axios = service;
}