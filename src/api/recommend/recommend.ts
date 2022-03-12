import request from "@/utils/http";
import { AxiosPromise } from "axios";

import { IReturnType, IHotReturn } from "./recommendTypes";

//获取轮播图
export const getBanner = function (): AxiosPromise<IReturnType> {
  return request({
    method: "GET",
    url: "/banner",
  });
};

// 获取热门推荐
export const getHotRecommend = function (): AxiosPromise<IHotReturn> {
  return request({
    method: "GET",
    url: "/personalized",
  });
};

//获取新碟上架
export const getNewDisc = function (): AxiosPromise {
  return request({
    method: "GET",
    url: "/top/album?offset=1&limit=5",
  });
};

//获取榜单
export const topList = function (): AxiosPromise {
  return request({
    method: "GET",
    url: "/top/list?idx=6",
  });
};
