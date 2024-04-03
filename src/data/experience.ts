type Experience = {
  date: string;
  title: string;
  location: string;
  description: string[];
  icon?: string;
};

type ExperienceData = Experience[];

export const experienceData: ExperienceData = [
  {
    date: "March 2022 - 2023 January",
    title: "Freelance Corner",
    location: "Natun Bazar, Sadar, Mymensingh",
    description: [
      "Leveraged my front-end development expertise to contribute to various websites built with React JS.",
      "While primarily focused on development, I also provided introductory guidance on HTML, CSS, and JavaScript to enhance team collaboration and project understanding.",
    ],
  },
  {
    date: "September 2023 - Current",
    title: "Excel Technologies Let.",
    location: "House #13, Road #07 Block #F, Banani Dhaka-1213v",
    description: [
      "Frontend development on multiple projects using React.js.",
      "Contributed to various website projects, applying React.js expertise.",
      "Ensured high-quality UI/UX and optimized performance.",
      "Engaged in Agile methodologies for efficient project delivery.",
    ],
  },
];
