import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { assets } from "../constants/constants";

const Footer = () => {
  const socialMediaLinks = [
    {
      name: "Facebook",
      icon: <FaFacebook />,
      url: "https://www.facebook.com",
    },
    {
      name: "Instagram",
      icon: <FaInstagram />,
      url: "https://www.instagram.com",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin />,
      url: "https://www.linkedin.com",
    },
    {
      name: "Twitter",
      icon: <FaTwitter />,
      url: "https://www.twitter.com",
    },
  ];

  return (
    <footer className="bg-gray-900 text-white px-6 md:px-16 lg:px-24 py-12">
      <div className="flex flex-col md:flex-row md:justify-between gap-10">
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

        {/* Navigation  */}
        <div className="flex-1 text-center ">
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-400 flex flex-col justify-center items-center md:flex-row md:space-x-6 md:space-y-0">
            <li className="hover:text-orange-400 cursor-pointer">Home</li>
            <li className="hover:text-orange-400 cursor-pointer">About Us</li>
            <li className="hover:text-orange-400 cursor-pointer">Services</li>
            <li className="hover:text-orange-400 cursor-pointer">Blog</li>
            <li className="hover:text-orange-400 cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="flex-1 text-center ">
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex justify-center  space-x-4">
            {socialMediaLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-orange-400 cursor-pointer"
              >
                {link.icon}
              </a>
            ))}
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
