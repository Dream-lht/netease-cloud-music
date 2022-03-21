<template>
  <div>
    <recommend-title title="新碟上架"></recommend-title>
    <el-carousel
      :interval="2000"
      arrow="always"
      :autoplay="false"
      v-if="isReactive"
    >
      <el-carousel-item v-for="(desc, index) in newDiscDataReview" :key="index">
        <ul class="desc_list">
          <li v-for="item in desc.childen" :key="item.id" class="desc_item">
            <div>
              <img :src="item.picUrl" class="desc_picUrl" />
              <a href="javasript:;" class="desc_bg"></a>
              <a
                href="javascript:;"
                class="desc_play"
                @click="play(item.id)"
              ></a>
            </div>
            <p class="title">
              <a href="javascript:;">
                {{ item.name }}
              </a>
            </p>
            <p class="author">
              <a href="javascript:;">
                {{ item.artist.name }}
              </a>
            </p>
          </li>
        </ul>
      </el-carousel-item>
    </el-carousel>
    <div class=""></div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref, watch } from "vue";

import RecommendTitle from "../recommendTitle/RecommendTitle.vue";

import { useStore } from "vuex";
export default defineComponent({
  components: { RecommendTitle },
  setup() {
    const Store = useStore();
    Store.dispatch("getNewDiscData");
    const isReactive = ref(false);
    const newDiscData = computed(() => Store.getters.getNewDisc);
    const newDiscDataReview = computed(() =>
      newDiscData.value ? newDiscData.value : []
    );

    const play = (id: number) => {
      console.log(id);
      Store.dispatch("play", { type: "SONG", id: id });
    };

    watch(newDiscDataReview, () => {
      isReactive.value = true;
    });
    return { newDiscData, newDiscDataReview, isReactive, play };
  },
});
</script>

<style lang="less" scoped>
/deep/.el-carousel {
  width: 100%;
  height: 180px;
  margin-top: 20px;
  background-color: #f5f5f5;
  border: 1px solid #d3d3d3;
  .el-carousel__container {
    height: 100%;
    .el-carousel__item {
      width: 100%;
      height: 100%;
      .desc_list {
        display: flex;
        justify-content: space-around;
        align-items: center;
        padding-right: 20px;
        height: 150px;
        .desc_item {
          position: relative;
          width: 100px;
          height: 100px;
          .desc_picUrl {
            position: absolute;
            width: 100%;
            height: 100%;
          }
          .desc_bg {
            display: inline-block;
            width: 117px;
            height: 100px;
            background: url("../../../../assets/image/coverall.png") no-repeat 0
              9999px;
            background-position: 0 -570px;
          }
          .desc_play {
            position: absolute;
            bottom: 5px;
            right: 5px;
            display: inline-block;
            width: 17px;
            height: 17px;
            background: url("../../../../assets/image/iconall.png") no-repeat 0
              9999px;
            background-position: 0 0;
          }
          .title a {
            display: inline-block;
            width: 100px;
            font-size: 12px;
            color: #000;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
          }
          .author a {
            display: inline-block;
            width: 100px;
            font-size: 12px;
            color: #666;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
          }
        }
      }
    }
    .el-carousel__arrow {
      width: 30px;
      height: 30px;
    }
    .el-carousel__arrow--right {
      right: 1px;
    }
    .el-carousel__arrow--left {
      left: 1px;
    }
  }

  .el-carousel__indicators {
    display: none;
  }
}
</style>
