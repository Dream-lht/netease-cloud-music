import { createStore } from "vuex";

// import { RootStore } from "./types";

import RecommendModule from "./module/recommend/recommend";
import PlayerModule from "./module/player/player";
import { IRootStore } from "./rootStoreTypes";
const store = createStore<IRootStore>({
  state() {
    return {
      count: 0,
    };
  },
  modules: {
    RecommendModule,
    PlayerModule,
  },
});

export default store;
