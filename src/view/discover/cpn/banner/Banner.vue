<template>
  <div class="main" :style="{ backgroundImage: 'url(' + bgImageUrl + '' }">
    <div class="center_box">
      <div class="banner">
        <el-carousel
          :interval="100000"
          arrow="hover"
          @change="changeBgImage"
          ref="carouseRef"
          v-if="isReactive"
        >
          <el-carousel-item v-for="banner in banners" :key="banner.imageUrl">
            <img :src="banner.imageUrl" class="image" />
          </el-carousel-item>
        </el-carousel>
      </div>
      <div class="download">
        <a href="javascript:;" class="dow_bnt" @click="routeDownload"></a>
        <span> PC 安卓 iPhone WP iPad Mac 六大客户端 </span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  onMounted,
  reactive,
  ref,
  toRefs,
  watch,
  nextTick,
} from "vue";

import { useStore } from "vuex";
import { useRouter } from "vue-router";
import cacheStore from "@/utils/Cache";

import { formatImageUrl } from "@/utils/format";

export default defineComponent({
  setup() {
    //获取Store实例
    const Store = useStore();
    Store.dispatch("getBannerData");
    const router = useRouter();
    // 设置当前播放张数序号
    const bannerIndex = ref(0);
    const carouselState = reactive<any>({
      carouseRef: null,
    });

    const isReactive = ref(false);
    // 获取轮播图数据
    // eslint-disable-next-line no-debugger
    const banners = computed(() => {
      return Store.getters.getBanner ? Store.getters.getBanner : [];
    });

    const bgImageUrl = computed(() => {
      if (banners.value.length !== 0) {
        return formatImageUrl(banners.value[bannerIndex.value].imageUrl);
      } else {
        return "";
      }
    });

    //当轮播图发生变化
    const changeBgImage: (to: number, from: number) => void = (to, from) => {
      bannerIndex.value = to;
    };

    //跳转路由
    const routeDownload = () => {
      console.log("跳转");
      router.push("/download");
    };

    watch(banners, (count, prevCount) => {
      isReactive.value = true;
    });

    onMounted(() => {
      // const carouselRefProxy: any = carouselState.carouseRef;
    });
    return {
      banners,
      bgImageUrl,
      isReactive,
      ...toRefs(carouselState),
      changeBgImage,
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
  /deep/.el-carousel {
    width: 730px;
    height: 285px;
    .el-carousel__container {
      height: 285px;
      .el-carousel__item {
        width: 730px;
        height: 285px;
        .image {
          width: 100%;
          height: 100%;
        }
      }
    }

    .el-carousel__indicators {
      .el-carousel__button {
        width: 15px;
      }
    }
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
