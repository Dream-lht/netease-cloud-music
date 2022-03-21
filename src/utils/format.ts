type ImageUrlType = (imageUrl: string) => string;
type CountType = (count: number) => string;

//格式化图片路径
export const formatImageUrl: ImageUrlType = (imageUrl) => {
  return `${imageUrl}?imageView&blur=40x20`;
};

//格式化播放数量
export const formatCount: CountType = (count) => {
  if (count / 10000 > 10) {
    return `${Math.ceil(count / 10000)}万`;
  } else {
    return `${count}`;
  }
};

//格式化播放时间
export const formatSongTime = (currentTime: number | undefined): string => {
  if (currentTime === undefined) {
    return "00:00";
  }
  // const minute = parseInt(((duration as number) / 60).toFixed(0));

  // let sec = ((duration as number) % 60).toFixed(0) + "";
  // const isM0 = ":";

  // let template = "";
  // if (minute === 0) {
  //   template = "00";
  // } else if (minute < 10) {
  //   template = "0" + minute;
  // }
  // if (sec.length == 1) {
  //   sec = "0" + sec;
  // }

  let tempTime = "";
  if (currentTime) {
    let min = 0;
    if (currentTime >= 60) {
      min = Math.floor(currentTime / 60);
      if (min >= 10) {
        tempTime = min + "";
      } else {
        tempTime = "0" + min;
      }
    } else {
      tempTime = "0" + min;
    }

    const sec = Math.ceil(currentTime % 60);
    if (sec >= 10) {
      tempTime = tempTime + ":" + sec;
    } else {
      tempTime = tempTime + ":" + "0" + sec;
    }
  }
  return tempTime;
};
