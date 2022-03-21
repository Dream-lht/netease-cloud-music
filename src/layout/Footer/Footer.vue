<template>
  <footer class="main">
    <div class="context">
      <div class="left">
        <ul class="rules_list">
          <li v-for="rule in rules" :key="rule.id" class="rule_item">
            <a :href="rule.href">{{ rule.title }}</a>
          </li>
        </ul>
        <p>
          网易公司版权所有©1997-2022杭州乐读科技有限公司运营：浙网文[2021]
          1186-054号
        </p>
        <p>
          粤B2-20090191-18 工业和信息化部备案管理系统网站 浙公网安备
          33010902002564号
        </p>
      </div>
      <div class="right">
        <ul class="icons_list">
          <li v-for="icon in icons" :key="icon.id">
            <a
              href="javascrip:;"
              :style="{
                backgroundPosition: `${icon.iconPositionX}px ${icon.iconPositionY}px`,
              }"
            ></a>
            <span
              :style="{
                backgroundPosition: `${icon.titlePositionX}px ${icon.titlePositionY}px`,
              }"
            ></span>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import { rules, icons } from "./config";
export default defineComponent({
  setup() {
    return {
      rules,
      icons,
    };
  },
});
</script>

<style lang="less" scoped>
.main {
  width: 100vw;
  height: 172px;
  background-color: #f5f5f5;
  border-top: 1px solid #ccc;
}
.context {
  display: flex;
  width: 980px;
  margin: 0 auto;
}
.left {
  width: 520px;
  padding-top: 15px;
  .rules_list {
    display: flex;

    .rule_item {
      padding: 0 10px;
      border-left: 1px solid #ccc;
      a {
        color: #999;
        font-size: 12px;
      }
      a:hover {
        text-decoration: underline;
      }
    }
    .rule_item:nth-child(1) {
      padding-left: 0;
      border: 0;
    }
  }
  p {
    font-size: 12px;
    color: #666;
    line-height: 24px;
  }
}
.right {
  width: calc(980px - 520px);
  .icons_list {
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 103px;
    li {
      a {
        display: block;
        width: 54px;
        height: 45px;
        background: url("../../assets/image/foot_enter_new.png") no-repeat;
        background-size: 110px 552px;
      }
      span {
        display: block;
        width: 72px;
        height: 14px;
        margin-top: 5px;
        margin-right: 5px;
        background: url("../../assets/image/foot_enter_tt.png") no-repeat;
        background-size: 180px 139px;
      }
    }
  }
}
</style>
