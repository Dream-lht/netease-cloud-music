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
