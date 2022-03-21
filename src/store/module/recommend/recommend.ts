import { Module } from "vuex";
import {
  IRecommendStore,
  INewDiscType,
  ITopListCategory,
  ITopListType,
} from "./recommendType";
import {
  getBanner,
  getHotRecommend,
  getNewDisc,
  getTopList,
  getSettledSong,
  getHotAnchor,
} from "@/api/recommend/recommend";
import cacheStore from "@/utils/Cache";
import { IRootStore } from "../../rootStoreTypes";
import { topListIds } from "./config";

const RecommendModule: Module<IRecommendStore, IRootStore> = {
  state: {
    banner: [],
    hotRecommend: [],
    newDiscData: [],
    topList: [],
    settledSong: [],
    anchors: [],
  },
  getters: {
    // 获取轮播图数据
    getBanner(state) {
      if (state.banner.length !== 0) {
        return state.banner;
      } else {
        return JSON.parse(cacheStore.getSession("banners"));
      }
    },

    // 获取热门推荐数据
    getHotRecommend(state) {
      if (state.hotRecommend.length !== 0) {
        return state.hotRecommend;
      } else {
        return JSON.parse(cacheStore.getSession("hotRecommend"));
      }
    },

    // 获取新碟上架数据
    getNewDisc(state) {
      if (state.newDiscData.length !== 0) {
        return state.newDiscData;
      } else {
        return JSON.parse(cacheStore.getSession("newDiscData"));
      }
    },

    //获取榜单数据
    getTopList(state) {
      if (state.topList.length !== 0) {
        return state.topList;
      } else {
        return JSON.parse(cacheStore.getSession("topList"));
      }
    },

    //获取热门歌手
    getSettledSong(state) {
      if (state.settledSong.length !== 0) {
        return state.settledSong;
      } else {
        return JSON.parse(cacheStore.getSession("settledSong"));
      }
    },

    //获取热门主播数据
    getHotAnchors(state) {
      if (state.anchors.length !== 0) {
        return state.anchors;
      } else {
        return JSON.parse(cacheStore.getSession("anchors"));
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

    //更改topList
    CHANGE_TOP_LIST(state, Payload) {
      state.topList = Payload;
    },

    //更改热门歌手
    CHANGE_SETTLED_SONG(state, Payload) {
      state.settledSong = Payload;
    },

    //更改热门主播
    CHANGE_ANCHORS(state, Payload) {
      state.anchors = Payload;
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

    // 获取榜单数据
    async getTopListData(constxt) {
      const tempTopList: ITopListType = [];
      for (const topListId of topListIds) {
        const tempObj: ITopListCategory = {
          id: 1,
          imageUrl: "",
          name: "飙升榜",
          list: [],
        };
        const {
          data: { playlist },
        } = await getTopList(topListId);

        tempObj.id = playlist.id;
        tempObj.name = playlist.name;
        tempObj.imageUrl = playlist.coverImgUrl;
        tempObj.list = playlist.tracks.slice(0, 10);

        tempTopList.push(tempObj);
      }

      //存入vuex
      constxt.commit("CHANGE_TOP_LIST", tempTopList);
      // 存入浏览器缓存
      cacheStore.setSession("topList", constxt.getters.getTopList);
    },

    //获取热门歌手
    async getSettledSong(constxt) {
      const {
        data: { artists },
      } = await getSettledSong();

      // 保存到vuex当中
      constxt.commit("CHANGE_SETTLED_SONG", artists);
      // 保存到缓存当中
      cacheStore.setSession("settledSong", artists);
    },

    //获取热门主播
    async getHotAnchor(context) {
      const {
        data: {
          data: { list },
        },
      } = await getHotAnchor();

      //存入vuex当中
      context.commit("CHANGE_ANCHORS", list);

      //存入缓存
      cacheStore.setSession("anchors", list);
    },
  },
};

export default RecommendModule;
