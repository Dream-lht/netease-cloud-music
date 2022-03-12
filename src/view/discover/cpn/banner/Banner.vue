<template>
  <div class="main" :style="{ backgroundImage: 'url(' + bgImageUrl + '' }">
    <div class="center_box">
      <div class="banner">
        <swiper @next="onNext" @prev="onPrev">
          <swiper-slide v-for="banner in banners" :key="banner.imageUrl">
            <img :src="banner.imageUrl" class="image" />
          </swiper-slide>
        </swiper>
      </div>
      <div class="download">
        <a href="javascript:;" class="dow_bnt" @click="routeDownload"></a>
        <span> PC 安卓 iPhone WP iPad Mac 六大客户端 </span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue";

import Swiper from "@/components/Swiper/Swiper.vue";
import SwiperSlide from "@/components/SwiperSlide/SwiperSlide.vue";

import { useStore } from "vuex";
import { useRouter } from "vue-router";
import cacheStore from "@/utils/Cache";
import { formatImageUrl } from "@/utils/format";

export default defineComponent({
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    //获取Store实例
    const Store = useStore();
    Store.dispatch("getBannerData");

    const router = useRouter();
    // 设置当前播放张数序号
    const bannerIndex = ref(0);
    // 获取轮播图数据
    // eslint-disable-next-line no-debugger
    const banners = computed(() => Store.getters.getBanner);

    console.log(banners.value);
    const bgImageUrl = computed(() => {
      return formatImageUrl(banners.value[bannerIndex.value].imageUrl);
    });

    //当轮播图发生变化
    const onNext: () => void = () => {
      if (bannerIndex.value < banners.value.length - 1) {
        bannerIndex.value++;
      } else {
        bannerIndex.value = 0;
      }
    };

    const onPrev: () => void = () => {
      if (bannerIndex.value < 1) {
        bannerIndex.value = banners.value.length - 1;
      } else {
        bannerIndex.value--;
      }
    };

    //跳转路由

    const routeDownload = () => {
      console.log("跳转");
      router.push("/download");
    };
    return {
      banners,
      bgImageUrl,
      onNext,
      onPrev,
      routeDownload,
    };
  },
});
</script>

<style lang="less" scoped>
.main {
  width: 100%;
  height: 285px;
}

.center_box {
  display: flex;
  margin: 0 auto;
  width: 985px;
  height: 285px;
}

.banner {
  width: 730px;
  height: 285px;
  .image {
    width: 100%;
    height: 100%;
  }
}

.download {
  position: relative;
  width: calc(985px - 730px);
  height: 285px;
  background-image: url("../../../../assets/image/download.png");
  .dow_bnt {
    display: block;
    width: 217px;
    height: 56px;
    margin-top: 185px;
    margin-left: 18px;
    background-image: url("../../../../assets/image/download.png");
    background-position: -19px 168px;
  }
  .dow_bnt:hover {
    background-image: url("../../../../assets/image/download.png");
    background-position: 0px 64px;
  }
  span {
    position: absolute;
    bottom: 10px;
    left: 10px;
    font-size: 12px;
    color: #8d8d8d;
  }
}
</style>
