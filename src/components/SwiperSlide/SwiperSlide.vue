<template>
  <div class="swiper-slide">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return {};
  },
});
</script>

<style lang="less" scoped>
.swiper-slide {
  width: 100%;
}
</style>
