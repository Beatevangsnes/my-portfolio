import { useState } from "react";
import { FaBars, FaTimes, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { PiCodeBold, PiStackBold, PiBriefcaseBold, PiStudentBold, PiArmchairBold, PiPhoneBold } from "react-icons/pi";
import { SOCIAL_LINKS } from '../constants';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);


  const scrollToSection = (id) => {
    setIsOpen(false); 
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 py-4 left-4 right-4 z-50 flex items-center justify-between px-8 bg-custom_beige">
      <div className="relative flex items-center">
        <div className="flex items-center bg-white shadow-sm rounded-full overflow-hidden transition-all duration-500 ease-in-out w-12 h-12">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-12 h-12 flex items-center justify-center text-custom_black text-2xl transition-transform duration-500 ease-in-out"
          >
            <span className={`transition-transform duration-500 ${isOpen ? "rotate-180" : "rotate-0"}`}>
              {isOpen ? <FaTimes /> : <FaBars />}
            </span>
          </button>
        </div>

        {/* Mobil-meny (vertikal) */}
        <ul className={`absolute top-16 left-0 w-64 bg-white shadow-md rounded-lg flex flex-col items-start p-4 space-y-3 transition-all duration-500 ease-in-out
          ${isOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 hidden"}
          lg:hidden`}>
          <li><button onClick={() => scrollToSection("home")} className="flex items-center gap-2 hover:text-custom_pink"><PiCodeBold />Home</button></li>
          <li><button onClick={() => scrollToSection("projects")} className="flex items-center gap-2 hover:text-custom_pink"><PiBriefcaseBold />Projects</button></li>
          <li><button onClick={() => scrollToSection("stack")} className="flex items-center gap-2 hover:text-custom_pink"><PiStackBold />Stack</button></li>
          <li><button onClick={() => scrollToSection("education")} className="flex items-center gap-2 hover:text-custom_pink"><PiStudentBold />Education</button></li>
          <li><button onClick={() => scrollToSection("hobby")} className="flex items-center gap-2 hover:text-custom_pink"><PiArmchairBold />Hobby</button></li>
          <li><button onClick={() => scrollToSection("contact")} className="flex items-center gap-2 hover:text-custom_pink"><PiPhoneBold />Contact</button></li>
        </ul>

        {/* Desktop-meny (horisontal) */}
        <ul className={`hidden lg:flex transition-all duration-500 ease-in-out whitespace-nowrap items-center bg-white shadow-sm rounded-full px-6 py-2
          ${isOpen ? "opacity-100 scale-100 flex gap-6 pl-4" : "opacity-0 scale-95 hidden"}`}>
          <li><button onClick={() => scrollToSection("home")} className="flex items-center gap-2 hover:text-custom_pink"><PiCodeBold />Home</button></li>
          <li><button onClick={() => scrollToSection("projects")} className="flex items-center gap-2 hover:text-custom_pink"><PiBriefcaseBold />Projects</button></li>
          <li><button onClick={() => scrollToSection("stack")} className="flex items-center gap-2 hover:text-custom_pink"><PiStackBold />Stack</button></li>
          <li><button onClick={() => scrollToSection("education")} className="flex items-center gap-2 hover:text-custom_pink"><PiStudentBold />Education</button></li>
          <li><button onClick={() => scrollToSection("hobby")} className="flex items-center gap-2 hover:text-custom_pink"><PiArmchairBold />Hobby</button></li>
          <li><button onClick={() => scrollToSection("contact")} className="flex items-center gap-2 hover:text-custom_pink"><PiPhoneBold />Contact</button></li>
        </ul>
      </div>

      {/* Sosiale lenker */}
      <div className="flex gap-4 text-custom_black text-2xl">
        <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-custom_pink">
          <FaLinkedin />
        </a>
        <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" className="hover:text-custom_pink">
          <FaGithub />
        </a>
        <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-custom_pink">
          <FaInstagram />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;

