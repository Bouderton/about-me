import newsexplorer from "../images/newsexplorer.png";
import aroundtheus from "../images/aroundtheus.png";
import busyday from "../images/busyday.png";
import wtwr from "../images/wtwr.png";
import triplepeaks from "../images/triplepeaks.png";

export const list = {
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.25,
      delay: 1.5,
    },
  },
  hidden: {
    opacity: 0,
    transition: {
      when: "afterChildren",
    },
  },
};

export const item = {
  visible: {
    opacity: 1,
    y: 0,
  },
  hidden: { opacity: 0, y: -75 },
};

export const projectList = {
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.75,
      delay: 1.25,
    },
  },
  hidden: {
    opacity: 0,
    transition: {
      when: "afterChildren",
    },
  },
};

export const projectItem = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      bounce: 0.6,
    },
  },
  hidden: { opacity: 0, y: -50 },
};

export const techSkillsList = [
  "React",
  "JavScript",
  "HTML",
  "CSS",
  "Express",
  "Git",
  "Node",
  "MongoDB",
  "JSON",
  "GCP",
  "Python",
];
export const hobbyList = [
  "Basketball",
  "Health",
  "Fitness",
  "Blender",
  "Maya",
  "Photoshop",
  "Music",
  "Cinema",
  "Learning",
  "Reading",
];

export const projectsList = [
  {
    repo: "https://github.com/Bouderton/news_explorer_frontend",
    link: "https://newsexplorer.utdnews.com/",
    img: newsexplorer,
    live: true,
    title: "News Explorer",
    text: "NewsExplorer is a dynamic Full Stack Web Application designed to provide users with a seamless way to explore, search, and save the latest news articles.",
  },
  {
    img: wtwr,
    live: true,
    title: "What to Wear",
    link: "https://wtwr.mindhackers.org/",
    repo: "https://github.com/Bouderton/se_project_react",
    text: "What To Wear is a responsive Full Stack Web Applicationthat fetches realtime location and weather data to suggest the user clothing items to wear.",
  },
  {
    repo: "https://github.com/Bouderton/se_project_aroundtheus",
    title: "Around The US",
    live: true,
    img: aroundtheus,
    link: "https://bouderton.github.io/se_project_aroundtheus/",
    text: "This Instagram look-alike is a Front-End social media page on the Worldwide Explorer, Jacques Cousteau. Browse beautiful locations and add your favorites.",
  },
  {
    title: "Triple Peaks",
    img: triplepeaks,
    live: true,
    link: "https://bouderton.github.io/se_project_coffeeshop/",
    repo: "https://github.com/Bouderton/se_project_coffeeshop?tab=readme-ov-file",
    text: "This is a Front-End application that represents a landing page for a local coffee shop Triple Peaks. You can see their menu and see their coffee recommendations.",
  },
  {
    title: "Slopopedia",
    live: false,
    repo: "https://github.com/jahorwitz/slopopedia",
    text: "During my internship I contributed to the development of a movie sharing platform. However this project is still in development.",
  },
  {
    title: "Busy Day",
    repo: "https://github.com/skovakina/spring-to-do?tab=readme-ov-file",
    text: "Busy Day is a 1st Place Winner team project I worked on with 2 other developers, which is an enhanced Spring themed to-do list.",
    live: true,
    link: "https://skovakina.github.io/spring-to-do/",
    img: busyday,
  },
];
