<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import { useRoute } from "vue-router";

export default defineComponent({
  setup() {
    const route = useRoute();
    return {};
  },
});
</script>
