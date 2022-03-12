<template>
  <div>
    <recommend-title
      :category="categoryData"
      title="热门推荐"
    ></recommend-title>
    <ul class="hot_list">
      <li
        class="hot_item"
        v-for="hotItem in hotRecommend.slice(0, 8)"
        :key="hotItem.id"
      >
        <div class="context">
          <img :src="hotItem.picUrl" />
          <div class="options">
            <span class="listen"></span>
            <span class="number">{{ formatCount(hotItem.playCount) }}</span>
            <a href="javascript:;"></a>
          </div>
        </div>
        <p class="title">
          <a href="javascript:;">{{ hotItem.name }}</a>
        </p>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";

import { useStore } from "vuex";
import { categoryData } from "../../config";
import { formatCount } from "@/utils/format";

import RecommendTitle from "../recommendTitle/RecommendTitle.vue";

export default defineComponent({
  components: {
    RecommendTitle,
  },
  setup() {
    const Store = useStore();
    Store.dispatch("getHotRecommend");

    //获取热门推荐数据
    const hotRecommend = computed(() => Store.getters.getHotRecommend);
    console.log(hotRecommend.value);
    [].slice;
    return {
      categoryData,
      hotRecommend,
      formatCount,
    };
  },
});
</script>

<style lang="less" scoped>
.hot_list {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 100%;
  height: auto;
}

.hot_item {
  width: 140px;
  height: 204px;
  margin-top: 20px;
}

.context {
  position: relative;
  width: 140px;
  height: 140px;
  img {
    width: 100%;
    height: 100%;
  }
  .options {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 140px;
    height: 27px;
    padding: 0 10px;
    background: url("../../../../assets/image/coverall.png") no-repeat 0 9999px;
    background-position: 0 -537px;
    .listen {
      display: inline-block;
      width: 14px;
      height: 11px;
      margin-top: 8px;
      background: url("../../../../assets/image/iconall.png") no-repeat 0 9999px;
      background-position: 0 -23px;
    }
    .number {
      color: #fff;
      font-size: 12px;
      margin-left: 3px;
    }
    a {
      position: absolute;
      bottom: 4px;
      right: 10px;
      display: inline-block;
      width: 16px;
      height: 17px;
      background: url("../../../../assets/image/iconall.png") no-repeat 0 9999px;
      background-position: 0 0;
    }
  }
}
.title {
  margin: 8px 0 3px;

  a {
    max-width: 100%;
    color: #000;
    font-size: 14px;
    vertical-align: middle;
  }
  a:hover {
    text-decoration: underline;
  }
}
</style>
