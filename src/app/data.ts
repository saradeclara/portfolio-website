import { AllowedRepo } from "@/types/ProjectGrid";
import codetunes from "../../public/images/codetunes-thumbnail.png";

const allowedRepos: AllowedRepo[] = [
  {
    name: "spotify-clone",
    thumbnail: "/images/codetunes-thumbnail.png",
    demoLink: "https://spotify-clone-tawny-tau.vercel.app",
    devDiaryIndex: 1,
    description:
      "This project is a web application built with Next.js that emulates the core functionalities of Spotify. It features a sleek user interface for browsing and playing music, user authentication, playlist management, and real-time search. This project highlights my skills in front-end development, server-side rendering, API integration, and managing state in a Next.js environment.",
  },
  {
    name: "react-calculator",
    thumbnail: "/images/reactulator-thumbnail.png",
    demoLink: "https://magenta-youtiao-11e494.netlify.app/",
    description:
      "This project is a web-based application designed to perform basic arithmetic operations. Built with React.js, it features a clean user interface with digit and operation buttons, a dynamic display, and robust state management to handle user inputs and calculations efficiently. This project showcases my skills in React component architecture, state management, and event handling.",
  },
];

const navbarItems: { title: string; sectionId: string }[] = [
  {
    title: "home",
    sectionId: "home",
  },
  {
    title: "projects",
    sectionId: "0",
  },
  {
    title: "dev blog",
    sectionId: "1",
  },
  {
    title: "contact",
    sectionId: "2",
  },
];

export { allowedRepos, navbarItems };
