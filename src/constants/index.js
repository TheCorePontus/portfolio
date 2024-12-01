import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. I have honed my skills in front-end technologies like React.js, as well as back-end technologies like Node.js, Express.js and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences. I also love competitive programming as it challenges me to use my problem solving skills to develop new solutions for unseen problems.`;

export const ABOUT_TEXT = `I am currently a pre-final year student at GLA University, Mathura. I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. Aside from development, I have achieved incredible success on various competitive programming platforms. Some of them includes :`;
export const ACH1 = `• Achieved a rating of 1700+ on LeetCode, solving 500+ DSA problems across all coding platforms. `
export const ACH2 = `• Secured a rating of 1397 (pupil) on CodeForces. `
export const ACH3 = `• Earned a rating of 1677 (3-star) on CodeChef. `
export const ACH4 = `• GLOBAL rank 51 in CodeChef Starters 150 out of 30,000+ total participants. `

export const PROJECTS = [
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A sleek and modern portfolio website that highlights my projects, skills, achievements, and contact details. Designed with a contemporary aesthetic and enhanced by Framer Motion for smooth, eye-catching animations.",
    link : "https://pritishfolio.vercel.app/",
    technologies: ["JavaScript", "ReactJs", "TailwindCSS", "Framer Motion"],
  },
  {
    title: "CoCoderz",
    image: project1,
    description:
      "A fully functional online competitive programming platform with clean UI. Supports solving problems, participating in contests and Online Judge for submission checking.",
      link : "https://pritishfolio.vercel.app/",
      technologies: ["JavaScript", "React.js", "Node.js","Express.js", "MongoDB", "TailwindCSS", "CodeMirror"],
  },
  {
    title: "DummyPe",
    image: project2,
    description:
      "DummyPe aims to replicate the basic functionality of any payments app, allowing users to perform transactions, view their account balance, send money to other users or receive money from them. ",
      link : "https://github.com/TheCorePontus/DummyPe",
      technologies: ["React.js", "Node.js","Express.js", "MongoDB", "TailwindCSS"],
  },
  {
    title: "Daily Tracker",
    image: project4,
    description:
      "An application for managing tasks, with features such as task creation, progress tracking, task deletion and completion.",
      link : "https://urdailytracker.netlify.app/",
      technologies: [,"React.js", "TailwindCSS"],
  },
];

export const CONTACT = {
  address: "",
  phoneNo: "+91 9039254316",
  email: "pritishjadon25@gmail.com",
};
