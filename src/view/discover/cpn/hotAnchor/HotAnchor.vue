<template>
  <div class="anchor">
    <settled-title title="热门主播" :isJump="false"></settled-title>
    <list class="list">
      <list-item class="list_item" v-for="anchor in acchors" :key="anchor.id">
        <img :src="formatUrl(anchor.avatarUrl)" />
        <div class="info">
          <a href="javascript:;">{{ anchor.nickName }}</a>
          <p>
            <span>{{ anchor.mainAuthDesc }}</span>
          </p>
        </div>
      </list-item>
    </list>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";

import { useStore } from "vuex";

import SettledTitle from "../settledTitle/SettledTitle.vue";
import List from "@/components/List/List.vue";
import ListItem from "@/components/ListItem/ListItem.vue";
export default defineComponent({
  components: { SettledTitle, List, ListItem },
  setup() {
    const Store = useStore();
    Store.dispatch("getHotAnchor");

    const acchors = computed(() => Store.getters.getHotAnchors);
    const formatUrl: (url: string) => string = (url) => {
      return `${url}?param40y40`;
    };
    return {
      acchors,
      formatUrl,
    };
  },
});
</script>

<style lang="less" scoped>
.anchor {
  margin-top: 20px;
}
.list {
  width: 249px;
  height: auto;
  margin-top: 20px;
  .list_item {
    display: flex;
    width: 210px;
    height: 50px;
    margin: 0 auto;
    img {
      width: 40px;
      height: 40px;
    }
    .info {
      padding-left: 10px;
      a {
        font-size: 14px;
        color: #000;
        line-height: 21px;
      }
      p {
        font-size: 12px;
        color: #666;
        line-height: 21px;
      }
    }
  }
}
</style>
