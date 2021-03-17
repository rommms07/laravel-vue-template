import { AxiosInstance } from 'axios';

declare module '*.vue' {
  interface Vue {
    $axios: AxiosInstance
  }
};

declare module '*.vue' {
  import Vue from 'vue'
  export default Vue
}