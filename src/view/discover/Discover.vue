<template>
  <div class="discover">
    <banner class="banner"></banner>
    <div class="context">
      <div class="left">
        <hot-recommend></hot-recommend>
        <new-disc></new-disc>
        <leaderboard></leaderboard>
      </div>
      <div class="right"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import Banner from "@/view/discover/cpn/banner/Banner.vue";
import HotRecommend from "./cpn/hotRecommed/HotRecommend.vue";
import NewDisc from "./cpn/newDisc/NewDisc.vue";
import Leaderboard from "./cpn/leaderboard/Leaderboard.vue";
export default defineComponent({
  components: {
    Banner,
    HotRecommend,
    NewDisc,
    Leaderboard,
  },
  setup() {
    return {};
  },
});
</script>

<style lang="less" scoped>
.discover {
  width: 100vw;
  height: auto;
  background-color: rgb(245 245 245);
}

.banner {
  width: 100vw;
  height: 285px;
}

.context {
  width: 980px;
  margin: 0 auto;
  height: auto;
  background-color: #fff;
  border-style: solid;
  border-color: rgb(211, 211, 211);
  border-image: initial;
  border-width: 0px 1px;
}

.left {
  width: 729px;
  padding: 20px 20px 40px;
  border-right: 1px solid #d3d3d3;
}

.right {
  width: calc(980px - 730px);
}
</style>
