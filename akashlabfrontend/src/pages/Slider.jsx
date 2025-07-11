import { useState, useEffect } from "react";
import { sliderData } from "../constants/constants";

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
                <p className="text-2xl sm:text-3xl md:text-5xl font-bold leading-tight">
                  {slide.title}
                </p>
                <p className="text-gray-600 text-base sm:text-lg md:text-xl font-medium">
                  {slide.subtitle}
                </p>
                <div className="flex flex-col sm:flex-row items-center sm:justify-center md:justify-start gap-4">
                  <button className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition duration-300 w-full sm:w-auto">
                    {slide.button1}
                  </button>
                  <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition duration-300 w-full sm:w-auto">
                    {slide.button2}
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
