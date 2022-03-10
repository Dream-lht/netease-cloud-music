import request from "@/utils/http";
import { AxiosPromise } from "axios";

export interface IPhoneLogin {
  phone: string;
  password: string;
}

export function phoneLogin(params: IPhoneLogin): AxiosPromise {
  return request({
    method: "GET",
    params,
    url: "/login/cellphone",
  });
}
