import { AxiosRequestConfig, AxiosResponse } from 'axios';
import { createAxios } from 'rich-axios';

export type Method = 'get' | 'cancelGet' | 'delete' | 'head' | 'options' | 'post' | 'cancelPost' | 'put'  | 'patch'

export type ApiConfig = {
  name: string;
  path: string;
  type: Method
}

export type Module = {
  [key: string]: (obj: AxiosRequestConfig<any> | undefined, resetConfig: AxiosRequestConfig<any> | undefined) => any
}

export const instance = createAxios({
  timeout: 5000
});
