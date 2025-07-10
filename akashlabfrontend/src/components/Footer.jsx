import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { assets } from "../constants/constants";
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white px-6 md:px-16 lg:px-24 py-12">
      <div className="flex flex-col md:flex-row justify-between gap-10">
        {/* Logo and Description */}
        <div className="flex-1 space-y-4 text-center md:text-left">
          <div className="flex justify-center md:justify-start items-center space-x-2">
            <img src={assets.logo} alt="Logo" className="w-12 h-12" />
            <h2 className="text-xl font-bold">Lorem Company</h2>
          </div>
          <p className="text-gray-400">
            We deliver innovative solutions to help your business grow with
            technology, design, and strategy.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex-1 text-center md:text-left">
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-400">
            <li className="hover:text-orange-400 cursor-pointer">Home</li>
            <li className="hover:text-orange-400 cursor-pointer">About Us</li>
            <li className="hover:text-orange-400 cursor-pointer">Services</li>
            <li className="hover:text-orange-400 cursor-pointer">Blog</li>
            <li className="hover:text-orange-400 cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="flex-1 text-center md:text-left">
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex justify-center md:justify-start space-x-4">
            <Facebook className="hover:text-orange-400 cursor-pointer" />
            <Twitter className="hover:text-orange-400 cursor-pointer" />
            <Instagram className="hover:text-orange-400 cursor-pointer" />
            <Linkedin className="hover:text-orange-400 cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Lorem Company. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
