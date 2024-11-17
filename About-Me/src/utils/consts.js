export const list = {
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.2,
      delay: 0.5,
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
  "Blender",
  "Maya",
  "Photoshop",
  "Music",
  "Cinema",
  "Learning",
  "Reading",
];
