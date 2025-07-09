import { assets } from "../constants/constants";
import { Menu } from "lucide-react";

const Navbar = () => {
  return (
    <>
      <div className="flex justify-between items-center py-4 px-12 bg-[#021738] text-white">
        {/* navbar logo */}
        <div className="cursor-pointer">
          <img src={assets.logo} alt="company_logo" className="w-20 h-20" />
          <p>Lorem Company</p>
        </div>

        {/* navbar links */}
        <nav>
          <ul className="hidden md:flex space-x-12 cursor-pointer text-xl transition-transform duration-300 ease-in-out">
            <li className="hover:scale-105">Home</li>
            <li className="hover:scale-105">About us</li>
            <li className="hover:scale-105">Studies</li>
            <li className="hover:scale-105">Career</li>
            <li className="hover:scale-105">Blog</li>
          </ul>
        </nav>

        <div className="flex items-center space-x-8">
          <button className="bg-white text-black p-3 px-6 rounded-full hover:bg-gray-100 font-semibold cursor">
            Contact
          </button>

          <div className="text-white md:hidden">
            <Menu />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
