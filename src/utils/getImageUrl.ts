import { ImageType } from "@customTypes/services.types";

export const getImageUrl = (image: ImageType): string => {
  if ('url' in image) {
    return image.url;
  }
  return URL.createObjectURL(image);
};