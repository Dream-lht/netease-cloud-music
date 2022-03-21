<template>
  <div class="login">
    <p>登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机</p>
    <a href="javascript:;" class="btn">用户登录</a>
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
.login {
  width: 100%;
  height: 126px;
  text-align: center;
  background: url("../../../../assets/image/index.png") no-repeat 0 9999px;
  background-position: 0 0;
  p {
    width: 205px;
    margin: 0 auto;
    padding: 16px 0;
    font-size: 12px;
    color: #666;
  }
  .btn {
    display: block;
    width: 100px;
    height: 31px;
    margin: 0 auto;
    color: #fff;
    line-height: 31px;
    font-size: 12px;
    background: url("../../../../assets/image/index.png") no-repeat 0 9999px;
    background-position: 0 -195px;
  }
  .btn:hover {
    background: url("../../../../assets/image/index.png") no-repeat 0 9999px;
    background-position: -110px -195px;
  }
}
</style>
