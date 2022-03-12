import { Module } from "vuex";
import { IRecommendStore, INewDiscType } from "./recommendType";
import {
  getBanner,
  getHotRecommend,
  getNewDisc,
} from "@/api/recommend/recommend";
import cacheStore from "@/utils/Cache";
import { IRootStore } from "../../rootStoreTypes";

const RecommendModule: Module<IRecommendStore, IRootStore> = {
  state: {
    banner: [],
    hotRecommend: [],
    newDiscData: [],
    soarList: [],
    originalList: [],
    newsList: [],
  },
  getters: {
    getBanner(state) {
      if (state.banner.length !== 0) {
        return state.banner;
      } else {
        return JSON.parse(cacheStore.getSession("banners"));
      }
    },
    getHotRecommend(state) {
      if (state.hotRecommend.length !== 0) {
        return state.hotRecommend;
      } else {
        return JSON.parse(cacheStore.getSession("hotRecommend"));
      }
    },
    getNewDisc(state) {
      if (state.newDiscData.length !== 0) {
        return state.newDiscData;
      } else {
        return JSON.parse(cacheStore.getSession("newDiscData"));
      }
    },
  },
  mutations: {
    //更改banner
    CHANGE_BANNER(state, Payload) {
      state.banner = Payload;
    },
    // 更改hotRecommenf
    CHANGE_HOTRECOMMEND(state, Payload) {
      state.hotRecommend = Payload;
    },
    // 更改newDiscData
    CHANGE_NEWDISCDATA(state, Payload) {
      state.newDiscData = Payload;
    },
  },
  actions: {
    // 获取轮播图数据
    async getBannerData(context) {
      const {
        data: { banners },
      } = await getBanner();
      //保存到session当中
      cacheStore.setSession("banners", banners);
      context.commit("CHANGE_BANNER", banners);
    },

    // 获取热门推荐数据
    async getHotRecommend(context) {
      const {
        data: { result },
      } = await getHotRecommend();

      cacheStore.setSession("hotRecommend", result);
      context.commit("CHANGE_HOTRECOMMEND", result);
    },

    // 获取新碟上架数据
    async getNewDiscData(context) {
      const newDiscData: INewDiscType = [];
      const {
        data: { weekData },
      } = await getNewDisc();

      newDiscData[0] = {
        id: 0,
        childen: weekData.slice(0, 5),
      };
      newDiscData[1] = {
        id: 0,
        childen: weekData.slice(5, 10),
      };

      context.commit("CHANGE_NEWDISCDATA", newDiscData);
      cacheStore.setSession("newDiscData", newDiscData);
    },
  },
};

export default RecommendModule;
