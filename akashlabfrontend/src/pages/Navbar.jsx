import { useEffect, useState } from "react";
import { assets } from "../constants/constants";
import { Menu } from "lucide-react";
import MobileView from "./MobileView";
import {
  FaHome,
  FaNewspaper,
  FaInfoCircle,
  FaUsers,
  FaPhoneAlt,
} from "react-icons/fa";

const Navbar = () => {
  const [scroll, setScroll] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div
        className={`fixed w-full z-50 flex justify-between items-center py-4 px-6 md:px-12 shadow-md ${
          scroll ? "bg-opacity-50 backdrop-blur-lg shadow-md" : ""
        }`}
      >
        {/* Logo */}
        <div className="cursor-pointer flex items-center space-x-2">
          <img src={assets.logo} alt="company_logo" className="w-16 h-16" />
          <p className="text-orange-500 font-bold hidden md:block">
            Lorem Company
          </p>
        </div>

        {/* Navigation  */}
        <nav>
          <ul className="hidden md:flex space-x-4 lg:space-x-12 cursor-pointer font-semibold text-xl transition-transform duration-300 ease-in-out text-gray-700">
            <li className="flex items-center gap-2 hover:scale-105 hover:text-orange-500">
              <FaHome />
              <a href="#">Home</a>
            </li>
            <li className="flex items-center gap-2 hover:scale-105 hover:text-orange-500">
              <FaNewspaper />
              <a href="#news">News</a>
            </li>
            <li className="flex items-center gap-2 hover:scale-105 hover:text-orange-500">
              <FaInfoCircle />
              <a href="#about">About us</a>
            </li>
            <li className="flex items-center gap-2 hover:scale-105 hover:text-orange-500">
              <FaUsers />
              <a href="#team">Team</a>
            </li>
          </ul>
        </nav>

        {/* Contact Button and Menu */}
        <div className="flex items-center space-x-4">
          <a href="#contact">
            <button className="flex items-center gap-2 bg-orange-500 text-white p-2 px-4 md:px-6 rounded-full hover:bg-orange-600 font-semibold">
              <FaPhoneAlt />
              Contact
            </button>
          </a>

          {/* Mobile Menu for Mobile */}
          <div className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            <Menu className="cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && <MobileView isOpen={isOpen} setIsOpen={setIsOpen} />}
    </>
  );
};

export default Navbar;
