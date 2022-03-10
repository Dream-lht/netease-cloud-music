type ImageUrlType = (imageUrl: string) => string;
export const formatImageUrl: ImageUrlType = (imageUrl) => {
  return `${imageUrl}?imageView&blur=40x20`;
};
