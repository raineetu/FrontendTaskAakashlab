import { useEffect, useState } from "react";
import { assets } from "../constants/constants";
import { Menu } from "lucide-react";
import MobileView from "./MobileView";

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
        {/* navbar logo */}
        <div className="cursor-pointer flex items-center space-x-2">
          <img src={assets.logo} alt="company_logo" className="w-16 h-16" />
          <p className="text-orange-500 font-bold hidden md:block">
            Lorem Company
          </p>
        </div>

        {/* navbar links */}
        <nav>
          <ul className="hidden md:flex space-x-4 lg:space-x-12 cursor-pointer text-xl transition-transform duration-300 ease-in-out">
            <li className="hover:scale-105">
              <a href="#">Home</a>
            </li>
            <li className="hover:scale-105">
              <a href="#news">News</a>
            </li>
            <li className="hover:scale-105">
              <a href="#about">About us</a>
            </li>

            <li className="hover:scale-105">
              <a href="#team">Team</a>
            </li>
          </ul>
        </nav>

        <div className="flex items-center space-x-4">
          <a href="#contact">
            <button className="bg-orange-500 text-white p-2 px-4 md:px-6 rounded-full hover:bg-orange-600 font-semibold">
              Contact
            </button>
          </a>

          {/* Hamburger Menu for Mobile */}
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
