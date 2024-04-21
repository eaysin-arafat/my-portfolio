import { accountUrl } from "./account_url";

type AboutData = {
  pageTitle: string;
  greetings: string;
  name: string;
  role: string;
  passion: string;
  description: string;
  githubLink: string;
  interests: string;
};

export const aboutData: AboutData = {
  pageTitle: "About Me",
  greetings: "Hi",
  name: "Eaysin Arafat",
  role: "React Developer",
  passion: "Frontend Development",
  description: `In my initial job, I contributed to the development of various websites using React JS skills while working part-time at a company. Then I shifted to Excel Technologies Ltd., where I have been working and have completed several projects. For instance, the Healthcare Ecosystem and Problem Solving Management. The Healthcare Ecosystem is a government project that manages all health-related issues, such as doctors, patients, doctor-patient relationships, various departments, age-wise information, and UI changes based on patient data. The Problem Management project generally resolves all system problems through role-based management. These projects utilize technologies like TypeScript, React JS, Redux Toolkit, RTK Query, Tailwind CSS, and others. Additionally, I have personal projects like an eCommerce project, a Hotel Management System, and a JavaScript utility library (which hasn't been published anywhere, created for enhancing problem-solving skills). I used TypeScript in my library project, and JavaScript, Redux Toolkit, and Tailwind CSS in other personal projects. Currently, I am studying clean code, data structures, algorithms, and backend development.`,
  githubLink: accountUrl?.github,
  interests: `In my free time, I love to learn new technologies and keep
      up-to-date with full stack development. Outside of programming, I
      love to watch movies.`,
};
