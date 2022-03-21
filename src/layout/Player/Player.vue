<template>
  <div class="bottom">
    <div class="player">
      <div class="up_down">
        <div class="left bg_image">
          <a
            href="javascript:;"
            class="bg_image btn"
            :class="isClose ? 'btn_close' : 'btn_open'"
            @click="handleLock"
          ></a>
        </div>
        <div class="right bg_image"></div>
      </div>
      <div class="bg bg_image"></div>
      <div class="hand" title="展开播放条"></div>
      <div class="context" v-if="isSongReactive && isAudioReactive">
        <div class="btns">
          <a href="javascript:;" class="bg_image pre" title="上一首"></a>
          <a
            href="javascript:;"
            class="bg_image"
            title="播放/暂停"
            @click="play"
            :class="isPlay ? 'star' : 'pause'"
          ></a>
          <a href="javascript:;" class="bg_image next" title="下一首"></a>
        </div>
        <div class="avatar">
          <img :src="SongInfo[0].al.picUrl" />
          <a href="" class="bg_image"></a>
        </div>
        <div class="play">
          <div class="words">
            <a
              href="javascript:;"
              :title="SongInfo[0].name"
              class="song_name"
              >{{ SongInfo[0].name }}</a
            >
            <a href="javascript:;" title="MV" class="bg_image mv"></a>
            <span class="songer">
              <span :title="SongInfo[0].ar[0].name" class="songer">
                <a href="javascript:;">{{ SongInfo[0].ar[0].name }}</a>
              </span>
            </span>
            <a href="javascript:;" title="来自歌单" class="bg_image src"></a>
          </div>
          <div class="scoll">
            <el-slider
              v-model="time"
              :format-tooltip="formatTooltip"
              @change="changePlayTime"
            />
            <span class="duration">
              <em>{{ displayTime }}</em
              >/{{ song_time }}
            </span>
          </div>
        </div>
        <div class="oper">
          <a href="javascript:;" class="lyrics" title="画中画歌词"></a>
          <a href="javascript:;" class="collect" title="收藏"></a>
          <a href="javascript:;" class="share" title="分享"></a>
        </div>
        <div class="ctrl">
          <a href="javascript:;" class="bg_image icon_vol"></a>
          <a href="javascript:;" class="bg_image icon_loop"></a>
          <span class="play_list">
            <a href="javascript:;" class="bg_image icon_list">10</a>
          </span>
        </div>
      </div>
    </div>
    <audio
      v-if="isSongReactive && isAudioReactive"
      :src="SongAudioInfo[0].url"
      ref="audioRef"
      @loadedmetadata="loadedmetadata"
      @timeupdate="watchMusicTime"
      @ended="handleEnd"
    ></audio>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, ref, watch } from "vue";
import { formatSongTime } from "@/utils/format";
import { useStore } from "vuex";
export default defineComponent({
  setup() {
    //当前播放时间
    const time = ref(0);
    //进度条显示时间
    const displayTime = ref("00:00");
    // 判断当前播放兰是否锁住
    const isClose = ref<boolean>(true);
    // 判断当前是否播放
    const isPlay = ref<boolean>(false);
    // 总时长
    let duration: number | undefined;
    //格式化之后的总时长
    const song_time = ref<string>();
    //音频播放器实例
    const audioRef = ref<HTMLAudioElement | null>(null);
    const Store = useStore();
    //控制播放器信息渲染
    const isSongReactive = ref<boolean>(false);
    const isAudioReactive = ref<boolean>(false);
    //判断播放器是否锁住
    const handleLock = () => {
      isClose.value = !isClose.value;
    };

    // 获取播放数据
    Store.dispatch("getSongInfo", "1929025019");

    //当歌曲加载完成
    const loadedmetadata = () => {
      //获取总时长
      duration = audioRef.value?.duration;
      song_time.value = formatSongTime(duration);
    };

    // 格式化时间
    const formatTooltip = (val: number) => {
      if (duration) {
        return formatSongTime((val / 100) * duration);
      }
      return "";
    };

    //播放/暂停
    const play = () => {
      if (!isPlay.value) {
        isPlay.value = true;
        audioRef.value && audioRef.value.play();
      } else {
        isPlay.value = false;
        audioRef.value && audioRef.value.pause();
      }
    };

    const handelPlay = () => {
      isPlay.value = true;
      audioRef.value && audioRef.value.play();
    };

    //监听音乐播放时间
    const watchMusicTime = (event: any) => {
      let currentTime: number | undefined = audioRef.value?.currentTime;

      //显示当前时长
      displayTime.value = formatSongTime(currentTime);
      if (currentTime && duration) {
        // 进度条时长
        time.value = (currentTime / duration) * 100;
      }
    };

    //获取歌曲信息
    const SongInfo = computed(() =>
      Store.getters.getSongInfo ? Store.getters.getSongInfo : []
    );

    //获取歌曲资源
    const SongAudioInfo = computed(() =>
      Store.getters.getSongAudioInfo ? Store.getters.getSongAudioInfo : []
    );

    // 监听歌曲信息是否已经获取
    watch(SongInfo, () => {
      isSongReactive.value = true;
    });

    watch(SongAudioInfo, () => {
      isAudioReactive.value = true;
    });

    // 改变播放时长
    const changePlayTime = (val: number) => {
      if (duration && audioRef.value?.currentTime) {
        audioRef.value.currentTime = (val / 100) * duration;
      }
    };

    //当歌曲播放完毕的时候
    const handleEnd = () => {
      isPlay.value = false;
    };

    onMounted(() => {
      Store.commit("CHANGE_PLAY_INSTANCE", handelPlay);
    });

    return {
      time,
      isClose,
      audioRef,
      isPlay,
      song_time,
      SongInfo,
      SongAudioInfo,
      isSongReactive,
      isAudioReactive,
      displayTime,
      play,
      handleEnd,
      handleLock,
      formatTooltip,
      loadedmetadata,
      watchMusicTime,
      changePlayTime,
    };
  },
});
</script>

<style lang="less" scoped>
.bg_image {
  background: url("../../assets/image/playbar.png") no-repeat 0 9999px;
}

.bottom {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100vw;
  z-index: 1002;
  zoom: 1;
}

.player {
  position: absolute;
  left: 0;
  top: -53px;
  zoom: 1;
  width: 100%;
  height: 53px;
  z-index: 1002;
  visibility: visible;
}

.up_down {
  position: relative;
  z-index: 11;
}

.left {
  position: absolute;
  top: -14px;
  right: 15px;
  width: 52px;
  height: 67px;
  background-position: 0 -380px;
  .btn {
    display: block;
    width: 18px;
    height: 18px;
    margin: 0 auto;
    margin-top: 4px;
  }
  .btn_close {
    background-position: -100px -380px;
  }
  .btn_open {
    background-position: -80px -380px;
  }
}

.right {
  position: absolute;
  top: -1px;
  right: 0;
  width: 15px;
  height: 54px;
  background-position: -52px -393px;
  pointer-events: none;
}

.bg {
  height: 53px;
  zoom: 1;
  margin-right: 67px;
  background-position: 0 0;
  background-repeat: repeat-x;
}

.hand {
  position: absolute;
  top: -10px;
  width: 100%;
  height: 20px;
  cursor: pointer;
}

.context {
  display: flex;
  align-items: center;
  position: absolute;
  left: 50%;
  top: 6px;
  z-index: 15;
  width: 980px;
  height: 47px;
  margin: 0 auto;
  transform: translateX(-50%);
  .btns {
    display: flex;
    align-items: center;
    width: 137px;
    height: 100%;
    a {
      display: block;
      float: left;
      width: 28px;
      height: 28px;
      margin-right: 6px;
    }
    .pre {
      background-position: 0 -130px;
    }
    .pause {
      width: 36px;
      height: 36px;
      background-position: 0 -204px;
    }
    .star {
      width: 36px;
      height: 36px;
      background-position: 0 -165px;
    }
    .next {
      background-position: -80px -130px;
    }
  }

  .avatar {
    position: relative;
    margin-right: 15px;
    img {
      width: 34px;
      height: 34px;
    }
    a {
      position: absolute;
      top: 0;
      left: 0;
      display: block;
      width: 35px;
      height: 35px;
      background-position: 0 -80px;
    }
  }
  .play {
    width: 581px;
    .words {
      display: flex;
      height: 22px;
      overflow: hidden;
      a {
        display: block;
      }
      .song_name {
        font-size: 12px;
        color: #e8e8e8;
      }
      .mv {
        width: 19px;
        height: 17px;
        margin-left: 3px;
        background-position: 0 -57px;
      }
      .songer {
        display: block;
        margin-left: 15px;
        a {
          font-size: 12px;
          color: #9b9b9b;
        }
        a:hover {
          text-decoration: underline;
        }
      }
      .src {
        width: 14px;
        height: 15px;
        margin-left: 13px;
        background-position: -110px -103px;
      }
    }
    .scoll {
      display: flex;
      align-items: center;
      width: 100%;
      height: 9px;
      /deep/.el-slider {
        width: 466px;
        height: 9px;
        margin-right: 30px;
        .el-slider__runway {
          background-color: transparent;
          background: url("../../assets/image/statbar.png");
          background-position: center 0px;
          .el-slider__bar {
            background: url("../../assets/image/statbar.png");
            background-position: center -66px;
          }
          .el-slider__button {
            border: none;
            background-color: transparent;
            background: url("../../assets/image/iconall.png") no-repeat 0 9999px;
            background-position: 0 -250px;
          }
        }
      }

      .duration {
        display: block;
        font-size: 12px;
        color: #797979;
        em {
          color: #a1a1a1;
        }
      }
    }
  }

  .oper {
    display: flex;
    width: 87px;
    border-right: 1px solid rgba(0, 0, 0, 0.5);
    a {
      display: block;
      width: 25px;
      height: 25px;
    }
    .lyrics {
      background: url("https://p1.music.126.net/DLVi_1eymwAX8gDunfd2bg==/109951165524394991")
        no-repeat 0 0;
      height: 25px;
    }

    .collect {
      background: url("../../assets/image/playbar.png") no-repeat 0 9999px;
      background-position: -88px -163px;
    }
    .share {
      background: url("../../assets/image/playbar.png") no-repeat 0 9999px;
      background-position: -114px -163px;
    }
  }

  .ctrl {
    display: flex;
    margin-left: 10px;
    a {
      display: block;
      width: 25px;
      height: 25px;
    }

    .icon_vol {
      background-position: -2px -248px;
    }

    .icon_loop {
      background-position: -3px -344px;
    }

    .play_list {
      .icon_list {
        width: 59px;
        height: 25px;
        color: #666;
        font-size: 12px;
        text-align: right;
        line-height: 25px;
        padding-right: 10px;
        background-position: -42px -68px;
      }
    }
  }
}
</style>
