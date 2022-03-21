<template>
  <div class="settled_song">
    <settled-title title="入驻歌手"></settled-title>
    <list class="list">
      <list-item
        v-for="SongInfo in settledSongInfo"
        :key="SongInfo.id"
        class="list_item"
      >
        <img :src="imageSize(SongInfo.picUrl)" />
        <div class="info">
          <h2>
            <span>{{ SongInfo.name }}</span>
          </h2>
          <p>{{ SongInfo.alias.length ? SongInfo.alias[0] : "暂无" }}</p>
        </div>
      </list-item>
    </list>
    <button class="request_btn">申请称为网易云音乐人</button>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";

import List from "@/components/List/List.vue";
import ListItem from "@/components/ListItem/ListItem.vue";
import SettledTitle from "../settledTitle/SettledTitle.vue";

import { useStore } from "vuex";
export default defineComponent({
  components: {
    List,
    ListItem,
    SettledTitle,
  },
  setup() {
    const Store = useStore();
    Store.dispatch("getSettledSong");

    //格式化图片大小
    const imageSize: (url: string) => string = (url: string) => {
      return `${url}?param62y62`;
    };
    const settledSongInfo = computed(() => Store.getters.getSettledSong);
    return { settledSongInfo, imageSize };
  },
});
</script>

<style lang="less" scoped>
.settled_song {
  width: 249px;
}

.list {
  width: 210px;
  height: auto;
  margin: 6px 0 14px 20px;
  .list_item {
    display: flex;
    width: 100%;
    height: 62px;
    margin-top: 14px;
    cursor: pointer;
    background-color: #fafafa;
    img {
      width: 62px;
      height: 62px;
    }
    .info {
      width: calc(100% - 62px);
      padding-left: 14px;
      border: 1px solid #e9e9ee;
      h2 {
        font-size: 14px;
        font-weight: bold;
        color: #333;
        margin-top: 8px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
      p {
        font-size: 12px;
        color: #666;
        margin-top: 8px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
    }
  }
}
.request_btn {
  display: block;
  width: 210px;
  height: 31px;
  margin: 0 auto;
  outline: none;
  color: #333;
  font-size: 12px;
  font-weight: bold;
  cursor: pointer;
  border-radius: 4px;
  border: 1px solid #ccc;
  background-color: #f9f9f9;
}

.request_btn:hover {
  background-color: #fff;
}
</style>
