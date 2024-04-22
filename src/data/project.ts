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
    id: 0,
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
    id: 1,
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
    id: 2,
    title: "Ecommarce Platform",
    description: [
      "I have led the development of the eCommerce platform that utilizes JavaScript, React.js, Redux Toolkit and Tailwind CSS.",
      "Adapted functionalities of easy product browsing, cart management and secure checkout systems.",
      "Utilized the Redux Toolkit for state management to ensure proper data flow and the system stability.",
      "Using Tailwind CSS to design an interface with a modern, reactive and responsive look and feel.",
      "Employed JavaScript for user interactions to ensure that the entire platform is dynamic and user-friendly.",
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
    title: "File Drive",
    description: [
      "FileDrive is a comprehensive file management platform designed to streamline the process of storing, sharing, and managing files among individuals and organizations.",
      "With FileDrive, users can securely upload files of various types, including PDFs, images, PNGs, SVGs, and more.",
      "Users can create organizations to manage files within specific groups or teams and grant role-based access to files.",
      "The platform offers advanced features such as category-based file organization and authentication powered by Clerk. FileDrive also integrates with Convex, a third-party service, for backend operations.",
    ],
    image: [
      {
        url: "/project-image/file_drive/file-drive-10.png",
        title: "screenshot 1",
      },
      {
        url: "/project-image/file_drive/file-drive-08.png",
        title: "screenshot 2",
      },
      {
        url: "/project-image/file_drive/file-drive-07.png",
        title: "screenshot 3",
      },
      {
        url: "/project-image/file_drive/file-drive-06.png",
        title: "screenshot 4",
      },
      {
        url: "/project-image/file_drive/file-drive-05.png",
        title: "screenshot 5",
      },
      {
        url: "/project-image/file_drive/file-drive-04.png",
        title: "screenshot 6",
      },
      {
        url: "/project-image/file_drive/file-drive-2.png",
        title: "screenshot 8",
      },
      {
        url: "/project-image/file_drive/file-drive-1.png",
        title: "screenshot 9",
      },
    ],
    technologies: [
      "JavaScript",
      "React Js",
      "Next Js",
      "Clerk(Authentication)",
      "Convex(Backend)",
      "Tailwind Css",
    ],
    githubLink: "https://github.com/eaysin-arafat/ecommarce_app_comfy_store",
    externalLink: "https://addons.mozilla.org/addon/wordy-birdy-scramble-game/",
  },
];
