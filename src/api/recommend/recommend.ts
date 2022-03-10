import request from "@/utils/http";
import { AxiosPromise } from "axios";

interface IReturnType extends AxiosPromise {
  banners: BannerType;
}

interface BannerType {
  imageUrl: string;
}

export const getBanner = function (): AxiosPromise<IReturnType> {
  return request({
    method: "GET",
    url: "/banner",
  });
};
