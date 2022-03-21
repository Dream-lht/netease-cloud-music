<template>
  <div class="title">
    <span>{{ title }}</span>
    <a href="javascript:;" v-if="isJump">查看全部></a>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    title: String,
    isJump: {
      type: Boolean,
      default: true,
    },
  },
  setup() {
    return {};
  },
});
</script>

<style lang="less" scoped>
.title {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 210px;
  height: 24px;
  margin: 0 auto;
  border-bottom: 1px solid #ccc;
  span {
    font-size: 12px;
    font-weight: bold;
    color: #333;
  }
  a {
    font-size: 12px;
    color: #666;
  }
  a:hover {
    text-decoration: underline;
  }
}
</style>
