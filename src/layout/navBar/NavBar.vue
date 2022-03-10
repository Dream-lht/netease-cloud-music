<template>
  <div class="nab_bar">
    <ul class="nav_bar_list">
      <li v-for="navBar in navBarData" :key="navBar.id" class="nav_bar_item">
        <router-link
          :to="navBar.path"
          :active-class="activeClass"
          v-if="matchStr('/discover', route.path)"
          >{{ navBar.title }}</router-link
        >
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import { navBarData } from "@/layout/navBar/config";
import { useRoute } from "vue-router";
import matchStr from "@/utils/matchStr";
export default defineComponent({
  setup() {
    const activeClass = "active_class";
    const route = useRoute();
    return {
      activeClass,
      navBarData,
      route,
      matchStr,
    };
  },
});
</script>

<style lang="less" scoped>
.nab_bar {
  width: 100vw;
  min-height: 5px;
  background-color: #c20c0c;
  border-top: 1px solid #a40011;
  border-bottom: 1px solid #a40011;
}

.nav_bar_list {
  width: 1100px;
  margin: 0 auto;
  padding-left: 50px;
  display: flex;
  align-items: center;
}
.nav_bar_item {
  a {
    display: block;
    margin: 8px 17px;
    padding: 3px 13px;
    font-size: 12px;
    color: #fff;
  }

  a:hover {
    background-color: #9b0909;
    border-radius: 10px;
  }
}

.active_class {
  background-color: #9b0909;
  border-radius: 10px;
}
</style>
