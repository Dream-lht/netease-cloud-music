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
export default request;
