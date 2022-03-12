<template>
  <div class="board">
    <recommend-title title="榜单"></recommend-title>
    <div class="list">
      <div class="soar"></div>
      <div class="new"></div>
      <div class="original"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import RecommendTitle from "../recommendTitle/RecommendTitle.vue";
export default defineComponent({
  components: {
    RecommendTitle,
  },
  setup() {
    return {};
  },
});
</script>

<style lang="less" scoped>
.board {
  margin-top: 20px;
}
</style>
