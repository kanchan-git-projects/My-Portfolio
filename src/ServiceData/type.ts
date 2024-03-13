import { IconType } from "react-icons";

export interface IService {
  title: string;
  about: string;
  Icon: IconType;
}

export interface ISkill {
  name: string;
  level: string;
  Icon: IconType;
}

export interface ITools {
  name: string;
  level: string;
  Icon: IconType;
}

export interface IProject {
  name: string;
  description: string;
  image_path: string;
  github_url: string;
  category: Category[];
  key_techs: string[];
}

export type Category =
  | "ReactJS"
  | "NodeJS"
  | "JavaScript"
  | "Angular"
  | "Tailwind CSS"
  | "Bootstrap"
  | "TypeScript"
  | "MongoDB";
