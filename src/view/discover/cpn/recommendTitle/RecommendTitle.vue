<template>
  <div class="recommend_title">
    <div class="left">
      <h2 class="title">{{ title }}</h2>
      <div class="types" v-if="category.length !== 0">
        <a href="#" v-for="item in category" :key="item.id">{{ item.value }}</a>
      </div>
    </div>
    <div class="right">
      <a href="#">更多</a>
      <span class="icon"></span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    title: String,
    category: {
      type: Array,
      default: () => {
        return [];
      },
    },
  },
  setup() {
    return {};
  },
});
</script>

<style lang="less" scoped>
.recommend_title {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 35px;
  padding: 0px 10px;
  border-bottom: 2px solid #c10d0c;
  .left {
    display: flex;
    align-items: center;
    .title {
      color: #333;
      font-size: 20px;
      padding-left: 24px;
      background: url("../../../../assets/image/index.png") no-repeat 0 9999px;
      background-position: -234px -157px;
    }
    .types {
      margin-left: 10px;
      a {
        padding: 0 15px;
        color: #666;
        font-size: 12px;
        border-left: 1px solid #666;
      }
      a:hover {
        text-decoration: underline;
      }
      a:nth-child(1) {
        border: 0px;
      }
    }
  }

  .right {
    font-size: 12px;
    color: #666;
    a {
      color: #666;
    }
    a:hover {
      text-decoration: underline;
    }
    .icon {
      width: 12px;
      height: 12px;
      margin-left: 3px;
      display: inline-block;
      background: url("../../../../assets/image/index.png") no-repeat 0 9999px;
      background-position: 0 -240px;
    }
  }
}
</style>
