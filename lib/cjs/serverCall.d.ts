import { AxiosRequestConfig, AxiosPromise } from 'axios';
declare const serverCall: (config: AxiosRequestConfig) => AxiosPromise;
export default serverCall;
