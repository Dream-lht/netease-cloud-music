<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <slot></slot>
    </div>
    <div class="swiper-pagination"></div>
    <div class="swiper-button-prev" @click="prev()"></div>
    <div class="swiper-button-next" @click="next()"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";

import Swiper from "swiper";
import "swiper/css/swiper.css";

export default defineComponent({
  setup(props, context) {
    onMounted(() => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const newSwiper = new Swiper(".swiper-container", {
        loop: true,
        autoplay: false,
        direction: "horizontal",
        pagination: {
          el: ".swiper-pagination",
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
    });

    //下一个
    const next = () => {
      context.emit("next");
    };

    // 上一个
    const prev = () => {
      context.emit("prev");
    };

    return {
      next,
      prev,
    };
  },
});
</script>

<style lang="less">
.swiper-container {
  width: 100%;
  height: 285px;
}

.swiper-wrapper {
  width: 100%;
}
</style>
