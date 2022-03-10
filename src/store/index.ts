import { createStore } from "vuex";

// import { RootStore } from "./types";

import RecommendModule from "./module/recommend/recommend";
import { IRootStore } from "./rootStoreTypes";
const store = createStore<IRootStore>({
  state() {
    return {
      count: 0,
    };
  },
  modules: {
    RecommendModule,
  },
});

export default store;
