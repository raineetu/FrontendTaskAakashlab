import { useState, useEffect } from "react";
import { sliderData } from "../constants/constants";
import { FaPlay } from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa6";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = sliderData.length;

  // Auto slide every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
    }, 2000);

    return () => clearInterval(interval);
  }, [totalSlides]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <>
      {sliderData.map(
        (slide, index) =>
          index === currentSlide && (
            <div
              key={index}
              className="flex flex-col md:flex-row justify-around items-center pt-28 px-4 md:px-15 lg:px-24 transition-all duration-500"
            >
              {/* Left section - Text and buttons */}

              <div className="text-center md:text-left space-y-6 md:space-y-8 flex-1">
                <div className="flex flex-col md:flex-row items-center md:items-start justify-center md:justify-start text-center md:text-left font-bold">
                  <button className="bg-pink-500 text-white rounded-full px-4 py-2 mb-2 md:mb-0 md:mr-4">
                    Welcome
                  </button>
                  <p className="text-pink-500 p-2">SIGN IN TODAY</p>
                </div>

                <p className="text-xl sm:text-2xl md:text-3xl text-gray-700 font-bold leading-tight">
                  {slide.title}
                </p>
                <p className="text-gray-600 text-base sm:text-[13px] md:text-[15px] font-medium">
                  {slide.subtitle}
                </p>
                <div className="flex flex-row items-center justify-center md:justify-start gap-4 ">
                  <button className="bg-orange-500 flex items-center gap-x-3 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition duration-300 ">
                    {slide.button1} <FaLocationArrow className="text-white" />
                  </button>

                  <button className="bg-green-400 text-white p-3 rounded-full hover:bg-green-700 transition duration-300 ">
                    <FaPlay className="text-white text-xl" />
                  </button>
                </div>
              </div>

              {/* Right section - Image */}
              <div className="flex-1 flex justify-center">
                <img
                  src={slide.image}
                  alt="Hero"
                  className="w-96 h-96 sm:w-120 sm:h-120 md:w-[550px] md:h-[550px] object-contain"
                />
              </div>
            </div>
          )
      )}

      <div className="flex justify-center mt-6 space-x-2">
        {sliderData.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentSlide ? "bg-orange-500" : "bg-gray-300"
            }`}
          ></button>
        ))}
      </div>
    </>
  );
};

export default Slider;
