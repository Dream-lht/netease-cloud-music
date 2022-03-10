/* eslint-disable vue/return-in-computed-property */
<template>
  <div class="header">
    <div class="top_nav">
      <div class="logo">
        <a href="/discover" hidefocus="true" class="logo_icon"></a>
      </div>
      <ul class="navigation">
        <li class="item" v-for="item in navigatData" :key="item.id">
          <router-link
            v-if="item.handleRouter()"
            :to="item.path"
            :aria-current-value="currentActive"
            :active-class="activeClass"
            >{{ item.title }}</router-link
          >
          <a :href="item.href" target="_blank" v-else>{{ item.title }}</a>
          <sub class="current" v-if="item.path === isCurrent"> </sub>
          <sub class="hot" v-if="item.path === '/download'"></sub>
        </li>
      </ul>
      <div class="options">
        <el-input
          class="search_input"
          size="large"
          placeholder="音乐/视频/电台/用户"
          :prefix-icon="Search"
        ></el-input>
        <el-button class="center">创作者中心</el-button>
        <a class="login">登录</a>
      </div>
    </div>
  </div>
  <nav-bar></nav-bar>
</template>

<script lang="ts">
import { computed, defineComponent, ref, watchEffect } from "vue";

import NavBar from "@/layout/navBar/NavBar.vue";

import { navigatData } from "./config";
import { navBarData, INavBarType } from "@/layout/navBar/config";
import { Search } from "@element-plus/icons-vue";
import { useRoute } from "vue-router";
import matchStr from "@/utils/matchStr";

export default defineComponent({
  components: {
    NavBar,
  },
  setup() {
    const currentActive = "current_active";
    const activeClass = "active_class";
    const route = useRoute();
    const isCurrent = ref<string>("");

    watchEffect(() => {
      if (matchStr("/discover", route.path)) {
        isCurrent.value = "/discover";
      } else {
        isCurrent.value = route.path;
      }
    });
    return {
      navigatData,
      currentActive,
      activeClass,
      Search,
      route,
      isCurrent,
      matchStr,
    };
  },
});
</script>

<style lang="less" scoped>
.header {
  width: 100vw;
  height: 71px;
  background-color: #242424;
  border: 1px solid #000;
}
.top_nav {
  position: relative;
  right: 130px;
  width: 1100px;
  height: 71px;
  margin: 0 auto;
}
.logo {
  float: left;
  width: 176px;
  height: 69px;
  font-size: 30px;
  cursor: pointer;
  .logo_icon {
    width: 175px;
    height: 69px;
    display: inline-block;
    background: url("../../assets/image/topbar.png") no-repeat 0 3px;
  }
}

.navigation {
  float: left;
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 69px;
  .item {
    position: relative;
    display: flex;
    height: 69px;
    justify-content: space-around;
    align-items: center;

    a {
      height: 69px;
      line-height: 69px;
      color: #ccc;
      padding: 0 19px;
    }
    .active_class {
      background-color: #000;
      color: #fff;
    }
    .current {
      position: absolute;
      top: 64px;
      width: 12px;
      height: 7px;
      background: url("../../assets/image/topbar.png") no-repeat 0 9999px;
      background-position: -226px 0;
    }
    .hot::after {
      position: absolute;
      top: 15px;
      right: -20px;
      content: "";
      background: url("../../assets/image/topbar.png") no-repeat 0 9999px;
      background-position: -170px 0;
      width: 48px;
      height: 37px;
    }
  }
}

.options {
  float: right;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 69px;

  .search_input {
    height: 32px;
    /deep/.el-input__inner {
      width: 158px;
      height: 32px !important;
      border-radius: 32px;
    }
    /deep/.el-input__inner::placeholder {
      color: #ccc;
      font-size: 10px;
    }
  }
  .center {
    width: 90px;
    height: 32px;
    margin-right: 20px;
    background-color: #242424;
    color: #ccc;
    font-size: 12px;
    border-radius: 20px;
    border: 1px solid #4f4f4f;
  }
  .center:hover {
    border: 1px solid #fff;
    color: #fff;
  }
  .login {
    width: 50px;
    display: block;
    color: #787878;
    font-size: 12px;
  }
  .login:hover {
    text-decoration: underline;
  }
}
</style>
