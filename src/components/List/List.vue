<template>
  <ul class="list">
    <slot></slot>
  </ul>
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
.list {
  width: 100%;
  height: 100px;
}
</style>
