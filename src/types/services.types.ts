import { ImageType } from "./general";

export type IServices = {
	_id: string;
	title: string;
	description: string;
	image: ImageType;
};

export interface IUseAddServices {
  _id?: string;
  title: {
    ar: string;
    en: string;
  };
  description: {
    ar: string;
    en: string;
  };
  image: File | string;
}