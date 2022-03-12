import { AxiosPromise } from "axios";

export interface IReturnType extends AxiosPromise {
  banners: BannerType;
}

export interface BannerType {
  imageUrl: string;
}

export interface IHotReturn extends AxiosPromise {
  result: IResultType;
}

export interface IResultType {
  alg: string;
  canDislike: boolean;
  copywriter?: null;
  highQuality: boolean;
  id: number;
  name: string;
  picUrl: string;
  playCount: string;
  trackCount: string;
  trackNumberUpdateTime: string;
  type: string;
}
