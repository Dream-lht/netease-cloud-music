import axios from "axios";
import { AxiosInstance } from "axios";

import { TIME_OUT, BASE_URL, HEADER_TYPE } from "./config";

const request: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  headers: HEADER_TYPE,
});

//请求拦截

//响应拦截
axios.interceptors.response.use(
  function (response) {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么

    return response;
  },
  function (error) {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    console.log(error);
    return Promise.reject(error);
  }
);
export default request;
