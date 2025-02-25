import { ImageType } from "./general";
export interface IProject {
	_id: string;
	link: string;
	type: string;
	title: string;
	description: string;
	technologies: string[];
	image: ImageType;
}
