export type Project = {
  id: number;
  title: string;
  description: string[];
  image: { url: string; title: string }[];
  technologies: string[];
  githubLink: string;
  externalLink: string;
};

export type ProjectData = Project[];

export const projectData: ProjectData = [
  {
    id: 1,
    title: "Health Care Ecosystem",
    description: [
      "Contributed to the development of a government-sponsored healthcare ecosystem project within a collaborative team environment.",
      "Played a key role in designing and implementing features to manage medical treatments, patient records, and doctor interactions.",
      "Facilitated the integration of diverse medical facilities under different departments.",
      "Collaborated effectively with team members and stakeholders to meet project objectives and comply with government regulations.",
    ],
    image: [
      // { url: "/project-image/healthcare/Screenshot_1.png", title: "beach" },
      // { url: "/project-image/healthcare/Screenshot_2.png", title: "boat" },
      // { url: "/project-image/healthcare/Screenshot_3.png", title: "forest" },
      // { url: "/project-image/healthcare/Screenshot_4.png", title: "city" },
      // { url: "/project-image/healthcare/Screenshot_5.png", title: "italy" },
      // {
      //   url: "/project-image/healthcare/Screenshot_6.png",
      //   title: "screenshot 6",
      // },
      // {
      //   url: "/project-image/healthcare/Screenshot_7.png",
      //   title: "screenshot 7",
      // },
      // {
      //   url: "/project-image/healthcare/Screenshot_8.png",
      //   title: "screenshot 8",
      // },
      // {
      //   url: "/project-image/healthcare/Screenshot_9.png",
      //   title: "screenshot 9",
      // },
      // {
      //   url: "/project-image/healthcare/Screenshot_10.png",
      //   title: "screenshot 10",
      // },
      // {
      //   url: "/project-image/healthcare/Screenshot_11.png",
      //   title: "screenshot 11",
      // },
      // {
      //   url: "/project-image/healthcare/Screenshot_12.png",
      //   title: "screenshot 12",
      // },
      // {
      //   url: "/project-image/healthcare/Screenshot_13.png",
      //   title: "screenshot 13",
      // },
      // {
      //   url: "/project-image/healthcare/Screenshot_14.png",
      //   title: "screenshot 14",
      // },
      // {
      //   url: "/project-image/healthcare/Screenshot_15.png",
      //   title: "screenshot 15",
      // },
      // {
      //   url: "/project-image/healthcare/Screenshot_16.png",
      //   title: "screenshot 16",
      // },
      // {
      //   url: "/project-image/healthcare/Screenshot_17.png",
      //   title: "screenshot 17",
      // },
      // {
      //   url: "/project-image/healthcare/Screenshot_18.png",
      //   title: "screenshot 18",
      // },
      // {
      //   url: "/project-image/healthcare/Screenshot_19.png",
      //   title: "screenshot 19",
      // },
    ],
    technologies: [
      "TypeScript",
      "React Js",
      "Redux Toolkit",
      "RTK Query",
      "Tailwind Css",
    ],
    githubLink: "",
    // githubLink: "https://github.com/dev-Anamul/carepro.web",
    externalLink: "https://addons.mozilla.org/addon/wordy-birdy-scramble-game/",
  },
  {
    id: 2,
    title: "Help Desk",
    description: [
      "Developed a problem management system adaptable for various projects or institutions.",
      "Implemented role-based relationships to facilitate efficient problem resolution, ensuring the right individuals have appropriate access levels.",
      "Incorporated JWT token-based authentication to enhance security, allowing for secure access control and user authentication.",
      "Integrated a client-to-administrator messaging system within the application for streamlined communication.",
      "Incorporated JWT token-based authentication for enhanced security, allowing secure access control and user authentication.",
      "Integrated a client-to-administrator messaging system within the application for streamlined communication.",
    ],
    image: [
      // {
      //   url: "/project-image/problem-management/Screenshot_1.png",
      //   title: "screenshot 1",
      // },
      // {
      //   url: "/project-image/problem-management/Screenshot_2.png",
      //   title: "screenshot 2",
      // },
      // {
      //   url: "/project-image/problem-management/Screenshot_3.png",
      //   title: "screenshot 3",
      // },
      // {
      //   url: "/project-image/problem-management/Screenshot_4.png",
      //   title: "screenshot 4",
      // },
      // {
      //   url: "/project-image/problem-management/Screenshot_5.png",
      //   title: "screenshot 5",
      // },
      // {
      //   url: "/project-image/problem-management/Screenshot_6.png",
      //   title: "screenshot 6",
      // },
      // {
      //   url: "/project-image/problem-management/Screenshot_7.png",
      //   title: "screenshot 7",
      // },
      // {
      //   url: "/project-image/problem-management/Screenshot_8.png",
      //   title: "screenshot 8",
      // },
      // {
      //   url: "/project-image/problem-management/Screenshot_20.png",
      //   title: "screenshot 20",
      // },
    ],
    technologies: [
      "Typescript",
      "React Js",
      "Redux Toolkit",
      "RTK Query",
      "Tailwind Css",
    ],
    githubLink: "",
    // githubLink: "https://github.com/amirhamja4bd/tuso.web",
    externalLink: "https://addons.mozilla.org/addon/wordy-birdy-scramble-game/",
  },
  {
    id: 3,
    title: "A Library Js-utility Like Lodash",
    description: [
      "A modern JavaScript utility library delivering modularity, performance & extras",
      "JavaScript library which provides utility functions for common programming tasks using the functional programming paradigm.",
      "It can be broken down into several main areas: Utilities, Function, String, Array, Collection, Object, Sequence.",
    ],
    image: [],
    technologies: ["JavaScript"],
    githubLink: "https://github.com/eaysin-arafat/js-utility",
    externalLink: "https://addons.mozilla.org/addon/wordy-birdy-scramble-game/",
  },
  {
    id: 4,
    title: "Ecommarce Platform",
    description: [
      "Led the development of an eCommerce platform leveraging JavaScript, React.js, Redux Toolkit, and Tailwind CSS.",
      "Implemented features for seamless product browsing, cart management, and secure checkout processes.",
      "Utilized Redux Toolkit for state management to ensure efficient data flow and application stability.",
      "Designed and styled the user interface with Tailwind CSS to achieve a modern and responsive design.",
      "Employed JavaScript to enhance user interactions and provide dynamic functionality throughout the platform.",
    ],
    image: [
      {
        url: "/project-image/comfy_store/Screenshot_1.png",
        title: "screenshot 1",
      },
      {
        url: "/project-image/comfy_store/Screenshot_2.png",
        title: "screenshot 2",
      },
      {
        url: "/project-image/comfy_store/Screenshot_3.png",
        title: "screenshot 3",
      },
      {
        url: "/project-image/comfy_store/Screenshot_4.png",
        title: "screenshot 4",
      },
      {
        url: "/project-image/comfy_store/Screenshot_5.png",
        title: "screenshot 5",
      },
      {
        url: "/project-image/comfy_store/Screenshot_6.png",
        title: "screenshot 6",
      },
      {
        url: "/project-image/comfy_store/Screenshot_7.png",
        title: "screenshot 7",
      },
      {
        url: "/project-image/comfy_store/Screenshot_8.png",
        title: "screenshot 8",
      },
      {
        url: "/project-image/comfy_store/Screenshot_9.png",
        title: "screenshot 9",
      },
    ],
    technologies: ["JavaScript", "React JS", "Redux Toolkit", "Tailwind Css"],
    githubLink: "https://github.com/eaysin-arafat/ecommarce_app_comfy_store",
    externalLink: "https://addons.mozilla.org/addon/wordy-birdy-scramble-game/",
  },
];
