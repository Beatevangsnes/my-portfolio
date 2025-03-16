import onlineShop from "../assets/projects/onlineShop.png";
import auctionHouse from "../assets/projects/auctionHouse.png";
import holidaze from "../assets/projects/holidaze.png";

export const HERO_CONTENT =
  "I am a 26 year old developer with a passion for design and web development.";

export const SOCIAL_LINKS = {
  linkedin: "https://www.linkedin.com/in/beate-vangsnes/",
  github: "https://github.com/Beatevangsnes",
  instagram: "https://www.instagram.com/beatevangsnes/",
};

export const ABOUT_TEXT =
  "I am a dedicated and versatile frontend developer with a passion for creating efficient and user-friendly web applications. I recently completed my studies in frontend development at Noroff, where I learned a wide range of technologies including HTML, CSS, React, JavaScript, working with APIs, and CSS frameworks like Tailwind. At Noroff, we also designed projects in Figma which we later coded. I am currently finishing my bachelor's degree in Information Science at the University of Bergen, where I have also gained experience with Python.\n\nMy journey in web development began with a deep curiosity for how things work, and it has led me to continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions.\n\nOutside of coding, I enjoy staying active, skiing, hiking, cooking, gaming, and being social.";

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Information Science",
    company: "Uinversity of Bergen",
    description: "Student",
    technologies: [],
  },
  {
    year: "2022 - 2024",
    role: "Front-end Development",
    company: "Noroff",
    description: "Student",
    technologies: [],
  },
  {
    year: "2021 - 2022",
    role: "Law",
    company: "Western Norway University of Applied Sciences",
    description: "Student",
    technologies: [],
  },
  {
    year: "2017 - 2010",
    role: "Business Administration",
    company: "BI Norwegian Business School",
    description: "Student",
    technologies: [],
  },
];

export const PROJECTS = [
  {
    title: "Holidaze",
    image: holidaze,
    description:
      "This project involved developing a new front end for Holidaze, an accommodation booking site. It includes a customer-facing interface for booking holidays and an admin-facing interface for managing venues and bookings, integrating with the Holidaze API.",
    technologies: ["React", "Tailwind", "Vite"],
    netlify: "https://project-exam-2-bv.netlify.app/",
    github: "https://github.com/Beatevangsnes/Project-exam-2",
  },
  {
    title: "Online-Shop",
    image: onlineShop,
    description:
      "This React-based e-commerce store uses the Noroff API to display products, manage a shopping cart, and handle user checkout. It employs Vite for faster development and React Router for navigation across various pages.",
    technologies: ["React", "Tailwind", "Vite"],
    netlify: "https://javascript-frameworks-bv.netlify.app/",
    github: "https://github.com/Beatevangsnes/javascript-frameworks-ca",
  },
  {
    title: "Auction House Website",
    image: auctionHouse,
    description:
      "An online auction platform where users can buy and sell items through bidding. New users receive 1000 credits for bidding or earning more credits by selling items. Registered users can bid on listings, while non-registered users can only browse.",
    technologies: ["JavaScript", "Tailwind", "HTML"],
    netlify: "https://semesterproject2bv.netlify.app/",
    github: "https://github.com/Beatevangsnes/Semester-Project-2",
  },
];

export const CONTACT = {
  address: "Ibsens gate 64, 5053 Bergen, Norway",
  phoneNo: "+47 480 97 882 ",
  email: "beatevangsnes@icloud.com",
  linkedin: "https://www.linkedin.com/in/beate-vangsnes/",
};
