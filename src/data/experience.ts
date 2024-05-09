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
      "I utilized my expertise in front-end development to contribute significantly to multiple websites. These websites were constructed using React JS, a framework renowned for its versatility and efficiency. My role involved implementing various features and ensuring a seamless user experience across these platforms.",
  },
  {
    date: "May 2023 - March 2024",
    title: "React Developer",
    companyName: "Excel Technologies Ltd.",
    location: "House #13, Road #07 Block #F, Banani Dhaka-1213",
    description:
      "I've engaged in frontend development across multiple projects, employing React.js as the primary framework. Within these endeavors, I've played a pivotal role in contributing to various website projects, leveraging my expertise in React.js to enhance functionality and user experience. My focus remains steadfast on delivering high-quality UI/UX designs while optimizing performance for optimal user satisfaction.",
  },
];
