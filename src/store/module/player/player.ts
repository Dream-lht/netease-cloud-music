import { Module } from "vuex";

import { IRootStore } from "../../rootStoreTypes";
import { IPlayerType, playPayload } from "./playerTypes";

import { getSongDetial, getTopList } from "@/api/recommend/recommend";

import { getSongUrl } from "@/api/player/player";
import cacheStore from "@/utils/Cache";
import { id } from "element-plus/lib/locale";
const PlayerModule: Module<IPlayerType, IRootStore> = {
  state: {
    songInfo: [],
    songAudioInfo: [],
    play: () => {
      console.log();
    },
  },

  getters: {
    //获取歌曲信息
    getSongInfo(state) {
      if (state.songInfo.length !== 0) {
        return state.songInfo;
      } else {
        return JSON.parse(cacheStore.getSession("songInfo"));
      }
    },

    //获取歌曲地址
    getSongAudioInfo(state) {
      if (state.songAudioInfo.length !== 0) {
        return state.songAudioInfo;
      } else {
        return JSON.parse(cacheStore.getSession("songAudioInfo"));
      }
    },
  },
  mutations: {
    //更改songInfo
    CHANGE_SONG_INFO(state, Payload) {
      state.songInfo = Payload;
    },
    //获取歌曲地址
    CHANGE_SONG_AUDIO_INFO(state, Payload) {
      state.songAudioInfo = Payload;
    },
    //获取音频实例play
    CHANGE_PLAY_INSTANCE(state, Payload) {
      state.play = Payload;
    },
  },
  actions: {
    // 获取歌曲信息
    async getSongInfo(context, Payload) {
      const {
        data: { songs },
      } = await getSongDetial(Payload);
      context.commit("CHANGE_SONG_INFO", songs);
      cacheStore.setSession("songInfo", songs);
      //获取歌曲地址
      const {
        data: { data },
      } = await getSongUrl(Payload);
      context.commit("CHANGE_SONG_AUDIO_INFO", data);
      cacheStore.setSession("songAudioInfo", data);
      console.log(songs, data);
    },

    //获取榜单信息
    async getTopList(context, Payload) {
      const {
        data: { privileges },
      } = await getTopList(Payload);
      return privileges;
    },

    async play(context, Payload: playPayload) {
      if (Payload.type === "LIST") {
        const res = await context.dispatch("getTopList", Payload.id);
        const songId = res[0].id;
        await context.dispatch("getSongInfo", songId);
        context.state.play();
      } else if (Payload.type === "SONG") {
        await context.dispatch("getSongInfo", Payload.id);
        context.state.play();
      } else {
        console.log("错误");
      }
    },
  },
};

export default PlayerModule;
