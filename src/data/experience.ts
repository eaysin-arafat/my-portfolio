type Experience = {
  date: string;
  title: string;
  companyName: string;
  location: string;
  description: string;
  icon?: string;
};

type ExperienceData = Experience[];

export const experienceData: ExperienceData = [
  {
    date: "October 2022 - April 2023",
    title: "Frontend Developer",
    companyName: "Freelance Corner",
    location: "Natun Bazar, Sadar, Mymensingh",
    description:
      "Leveraged my front-end development expertise to contribute to various websites built with React JS.",
  },
  {
    date: "May 2023 - March 2024",
    title: "React Developer",
    companyName: "Excel Technologies Ltd.",
    location: "House #13, Road #07 Block #F, Banani Dhaka-1213",
    description:
      "Frontend development on multiple projects using React.js. Contributed to various website projects, applying React.js expertise. Ensured high-quality UI/UX and optimized performance.",
  },
];
