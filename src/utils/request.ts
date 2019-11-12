import * as axios from 'axios';
import store from '@/store';
// 这里可以根据使用的UI组件库进行替换
import { Toast } from 'vant';
import { AxiosResponse, AxiosRequestConfig } from 'axios';

/**
 * baseURL按实际项目来定义
 */
const baseURL = 'http://www.pangbing.top';

/**
 * 创建axios实例
 */
const service = axios.default.create({
  baseURL,
  timeout: 60000,//超时时间设置为1分钟
  maxContentLength: 4000,
});

service.interceptors.request.use((config: AxiosRequestConfig) => {
  return config;
}, (error: any) => {
  Promise.reject(error);
});

service.interceptors.response.use((response: AxiosResponse) => {
  if (response.status !== 200) {
    Toast.fail('请求出错！');
  } else {
    return response.data;
  }
}, (error: any) => {
  return Promise.reject(error);
});

export default service;
