<template>
  <div class="board">
    <recommend-title title="榜单"></recommend-title>
    <div class="list">
      <div class="list_category" v-for="playItem in topList" :key="playItem.id">
        <dl>
          <dt class="list_title">
            <img :src="playItem.imageUrl" />
            <div class="title">
              <a href="javascript:;" class="list_name">{{ playItem.name }}</a>
              <div class="options">
                <a href="javascript:;" class="play" title="播放"></a>
                <a href="javascript:;" class="collect" title="收藏"></a>
              </div>
            </div>
          </dt>
          <dd class="list_detial">
            <ol>
              <li v-for="(song, index) in playItem.list" :key="song.id">
                <div class="song_info">
                  <span class="index">{{ index + 1 }}</span>
                  <a href="javascript:;" class="song_name" :title="song.name">{{
                    song.name
                  }}</a>
                  <div class="oper">
                    <a
                      href="javascript:;"
                      class="oper_play"
                      title="播放"
                      @click="play(song.id)"
                    ></a>
                    <a
                      href="javascript:;"
                      class="oper_add"
                      title="添加到播放列表"
                    ></a>
                    <a
                      href="javascript:;"
                      class="oper_collect"
                      title="收藏"
                    ></a>
                  </div>
                </div>
              </li>
            </ol>
          </dd>
          <div class="more">
            <a href="javascript:;">查看全部></a>
          </div>
        </dl>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { useStore } from "vuex";
import RecommendTitle from "../recommendTitle/RecommendTitle.vue";
export default defineComponent({
  components: {
    RecommendTitle,
  },
  setup() {
    const Store = useStore();

    Store.dispatch("getTopListData");

    const topList = computed(() => Store.getters.getTopList);

    const play = (id: number) => {
      Store.dispatch("play", { type: "SONG", id: id });
    };
    return {
      topList,
      play,
    };
  },
});
</script>

<style lang="less" scoped>
.board {
  margin-top: 20px;
}

.list {
  display: flex;
  width: 689px;
  height: 472px;
  margin-top: 20px;
  background: url("../../../../assets/image/index_bill.png") no-repeat;
}

.list_category {
  flex: 1;
  height: 100%;
}

.list_title {
  display: flex;
  width: 230px;
  height: 120px;
  padding: 20px 0 0 19px;
  img {
    width: 80px;
    height: 80px;
  }
  .title {
    display: flex;
    flex-wrap: wrap;
    margin: 6px 0 0 10px;
    .list_name {
      display: block;
      width: 50px;
      color: #333;
      font-size: 14px;
      font-weight: bold;
    }
    .list_name:hover {
      text-decoration: underline;
    }
    .options {
      width: 100%;
      height: 40px;

      a {
        display: inline-block;
        width: 22px;
        height: 22px;
        margin-right: 10px;
      }
      .play {
        background: url("../../../../assets/image/index.png") no-repeat 0 9999px;
        background-position: -267px -205px;
      }
      .collect {
        background: url("../../../../assets/image/index.png") no-repeat 0 9999px;
        background-position: -300px -205px;
      }
    }
  }
}

.list_detial {
  width: 100%;
  li {
    width: 100%;
    height: 32px;
    padding: 0 10px 0 10px;
    .song_info {
      display: flex;
      height: 32px;
      line-height: 32px;
      .index {
        display: inline-block;
        width: 35px;
        height: 32px;
        text-align: center;
        font-size: 16px;
        color: #666;
      }
      .song_name {
        display: inline-block;
        width: 170px;
        height: 32px;
        color: #000;
        font-size: 12px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      .song_name:hover {
        text-decoration: underline;
      }

      .oper {
        display: none;
        a {
          display: inline-block;
          width: 17px;
          height: 17px;
          margin-left: 5px;
        }
        .oper_play {
          background: url("../../../../assets/image/index.png") no-repeat 0
            9999px;
          background-position: -267px -268px;
        }
        .oper_add {
          background: url("../../../../assets/image/icon.png") no-repeat 0
            9999px;
          background-position: 2px -698px;
        }
        .oper_collect {
          background: url("../../../../assets/image/index.png") no-repeat 0
            9999px;
          background-position: -297px -268px;
        }
      }
    }
    &:nth-child(-n + 3) {
      .index {
        color: #c10d0c;
      }
    }
    .song_info:hover {
      .song_name {
        width: 80px !important;
      }
      .oper {
        display: inline-block !important;
      }
    }
  }
}

.more {
  width: 100%;
  height: 32px;
  line-height: 32px;
  text-align: right;
  padding-right: 32px;
  a {
    font-size: 12px;
    color: #000;
  }
  a:hover {
    text-decoration: underline;
  }
}
</style>
