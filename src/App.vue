<template>
  <div>
    <Header></Header>
    <router-view />
    <Footer></Footer>
    <Player></Player>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Header from "@/layout/Header/Header.vue";
import Footer from "@/layout/Footer/Footer.vue";
import Player from "@/layout/Player/Player.vue";
import cacheStore from "@/utils/Cache";

export default defineComponent({
  name: "App",
  components: {
    Header,
    Footer,
    Player,
  },
  setup() {
    //当页面加载之后，五分钟之后删除session当中的数据
    const closeTime = setTimeout(() => {
      cacheStore.clearSession();
    }, 300000);

    window.addEventListener("beforeunload", function () {
      clearTimeout(closeTime);
    });
    return {};
  },
});
</script>

<style lang="less">
@import "./global/global.less";
</style>
