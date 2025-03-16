// src/components/Navbar.jsx
import logo from "../assets/bvLogo.png";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { SOCIAL_LINKS } from '../constants';

const Navbar = () => {
  return (
    <nav className=" flex items-center justify-between">
      <div className="flex flex-shrink-0 items-center">
        <img src={logo} alt="Beate Vangsnes logo" className="mx-2 w-10" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
