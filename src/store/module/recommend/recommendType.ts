// 热门推荐类型
interface IHotRecommend {
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

// 新碟上架类型
export type INewDiscType = INewDiscChilden[];
interface INewDiscChilden {
  id: number;
  childen: unknown;
}

//recommend模块state的类型
export interface IRecommendStore {
  banner: unknown[];
  hotRecommend: IHotRecommend[];
  newDiscData: unknown[];
  originalList: unknown[];
  soarList: unknown[];
  newsList: unknown[];
}
