import { Module } from "vuex";
import { IRecommendStore } from "./recommendType";
import { getBanner } from "@/api/recommend/recommend";
import cacheStore from "@/utils/Cache";
import { IRootStore } from "../../rootStoreTypes";
const RecommendModule: Module<IRecommendStore, IRootStore> = {
  state: {
    banner: [],
  },
  getters: {
    getBanner(state) {
      if (state.banner.length !== 0) {
        return state.banner;
      } else {
        return JSON.parse(cacheStore.getSession("banners"));
      }
    },
  },
  mutations: {
    //更改banner
    CHANGE_BANNER(state, Payload) {
      state.banner = Payload;
    },
  },
  actions: {
    async getBannerData(context) {
      const {
        data: { banners },
      } = await getBanner();
      //保存到session当中
      cacheStore.setSession("banners", banners);
      context.commit("CHANGE_BANNER", banners);
    },
  },
};

export default RecommendModule;
