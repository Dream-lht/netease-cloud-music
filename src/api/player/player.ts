import request from "@/utils/http/index";
import { AxiosPromise } from "axios";
export const getSongUrl = function (id: string): AxiosPromise {
  return request({
    method: "GET",
    url: "/song/url",
    params: {
      id,
    },
  });
};
