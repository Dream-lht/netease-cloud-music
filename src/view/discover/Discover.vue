<template>
  <div class="discover">
    <banner></banner>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import Banner from "@/view/discover/cpn/banner/Banner.vue";
export default defineComponent({
  components: {
    Banner,
  },
  setup() {
    return {};
  },
});
</script>

<style lang="less" scoped></style>
