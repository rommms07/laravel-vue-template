/* eslint-disable */

import { Vue } from 'vue-property-decorator';
import axios, { AxiosRequestConfig, AxiosInstance } from 'axios';
import { PluginObject } from 'vue';

export default new class implements PluginObject<AxiosRequestConfig> {
  private service!: AxiosInstance;

  private addInterceptors(): void {
    interface ErrorResponse {
      message?: string,
      errors?: Array<{ [key: string]: any }>,
      status?: number,
      statusText?: string
    }

    this.service.interceptors.response.use(response => response, error => {
      const _err: ErrorResponse = {};

      if (!error.response) {
        const { message } = error.toJSON();

        _err.message = message;
        _err.errors = [];
        _err.status = 0;
        _err.statusText = 'NetworkConnectivityError';
      } else {
        const { status, statusText, data: { errors, message } } = error.response;

        _err.message = message;
        _err.errors = errors;
        _err.status = status;
        _err.statusText = statusText;
      }

      return Promise.reject(_err);
    });
  }

  public install(_Vue: typeof Vue, options?: AxiosRequestConfig) {
    this.service = axios.create(options);

    this.addInterceptors();

    _Vue.prototype.$axios =this.service;
  }
}