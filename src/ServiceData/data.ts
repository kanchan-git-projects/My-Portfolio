import { IProject, IService, ISkill, ITools } from "./type";
import { RiComputerLine } from "react-icons/ri";
import { FaServer } from "react-icons/fa";
import { AiOutlineApi } from "react-icons/ai";
import { MdDeveloperMode } from "react-icons/md";
import { BsCircleFill } from "react-icons/bs";

export const servicesData: IService[] = [
  {
    Icon: RiComputerLine,
    title: "Front-End Web Development",
    about:
      "I can analyze specific project needs and create well-thought-out front-end designs.",
  },
  {
    Icon: AiOutlineApi,
    title: "UI/UX Development",
    about:
      " I can craft intuitive user-focused UI/UX designs for both mobile and web apps. ",
  },
  {
    Icon: FaServer,
    title: "SEO & Content Optimization",
    about:
      "I can help optimize website content for presentation and  improve their organic search traffic",
  },

  {
    Icon: MdDeveloperMode,
    title: "Analytical Dashboard ",
    about:
      "I can create analytical dashboards that can help businesses gain valuable insights from their data. ",
  },
];

export const languages: ISkill[] = [
  {
    name: "HTML & CSS",
    level: "90%",
    Icon: BsCircleFill,
  },
  {
    name: "Javascript",
    level: "80%",
    Icon: BsCircleFill,
  },
  {
    name: "React.js",
    level: "70%",
    Icon: BsCircleFill,
  },
  {
    name: "TypeScript",
    level: "50%",
    Icon: BsCircleFill,
  },

  // {
  //   name: "Angular",
  //   level: "60%",
  //   Icon: BsCircleFill,
  // },
  {
    name: "Node.js",
    level: "60%",
    Icon: BsCircleFill,
  },
];

export const tools: ITools[] = [
  {
    name: "Figma ",
    level: "60%",
    Icon: BsCircleFill,
  },
  {
    name: "Version Control ",
    level: "65%",
    Icon: BsCircleFill,
  },

  {
    name: "VS Code",
    level: "80%",
    Icon: BsCircleFill,
  },
  {
    name: "Framer Motion",
    level: "50%",
    Icon: BsCircleFill,
  },
  // {
  //   name: "Webpack",
  //   level: "60%",
  //   Icon: BsCircleFill,
  // },
];

export const projects: IProject[] = [
  {
    name: "Estate Dashboard",
    description: "Estate Dashboard Front-End Project",
    image_path: "../Images/React-Dashboard.png",
    github_url: "https://kanchan-git-projects.github.io/Estate-Dashboard/",
    category: ["ReactJS"],
    key_techs: ["React"],
  },
  {
    name: "Pet Shop",
    description: "Pet Shop Front-End Project",
    image_path: "../Images/Pet-Shop.png",
    github_url: "https://kanchan-git-projects.github.io/Happy-Pets-Shop/",
    category: ["Bootstrap"],
    key_techs: ["Bootstrap"],
  },
  {
    name: "Number Game",
    description: "Guess the number game",
    image_path: "../Images/Number-Game.png",
    github_url: "https://kanchan-git-projects.github.io/Number-Guess-Game/",
    category: ["JavaScript"],
    key_techs: ["JavaScript"],
  },
];
