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

// 获取榜单
export const getList = function (): AxiosPromise {
  return request({
    method: "GET",
    url: "/toplist/detail",
  });
};

//获取榜单详情
export const getTopList = function (id: number): AxiosPromise {
  return request({
    method: "GET",
    url: "/playlist/detail",
    params: {
      id,
    },
  });
};

// 获取歌曲详情
export const getSongDetial = function (ids: string): AxiosPromise {
  return request({
    method: "GET",
    url: "/song/detail",
    params: {
      ids,
    },
  });
};

// 获取入驻歌手
export const getSettledSong = function (): AxiosPromise {
  return request({
    method: "GET",
    url: "/top/artists?offset=0&limit=5",
  });
};
// 获取热门主播
export const getHotAnchor = function (): AxiosPromise {
  return request({
    method: "GET",
    url: "/dj/toplist/popular?limit=5",
  });
};

//获取歌单详情
export const getSongAll = function (
  id: number | string,
  limit: number,
  offset: number
): AxiosPromise {
  return request({
    method: "GET",
    url: "/playlist/track/all",
    params: {
      id,
      limit,
      offset,
    },
  });
};
