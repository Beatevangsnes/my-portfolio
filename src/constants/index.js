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
