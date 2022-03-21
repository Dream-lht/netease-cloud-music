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

//排行榜
export type ITopListType = ITopListCategory[];

export interface ITopListCategory {
  id: number;
  name: string;
  imageUrl: string;
  list: unknown[];
}

//recommend模块state的类型
export interface IRecommendStore {
  banner: unknown[];
  hotRecommend: IHotRecommend[];
  newDiscData: unknown[];
  topList: ITopListType[];
  settledSong: unknown[];
  anchors: unknown[];
}
