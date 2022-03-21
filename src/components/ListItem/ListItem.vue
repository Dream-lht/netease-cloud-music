<template>
  <li class="list_item">
    <slot></slot>
  </li>
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
.list_item {
  width: 100px;
}
</style>
