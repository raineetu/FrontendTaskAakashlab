import { assets } from "../constants/constants";

const Slider = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-around items-center pt-28 px-4 md:px-15 lg:px-24 ">
        <div className="text-center md:text-left space-y-6 md:space-y-8 flex-1">
          <p className="text-2xl sm:text-3xl md:text-5xl font-bold leading-tight">
            Team of <span className="text-green-600">Professionals </span>
            Business
          </p>
          <p className="text-gray-600 text-base sm:text-lg md:text-xl font-medium">
            Our expert team is committed to your success.
          </p>
          <div className="flex flex-col sm:flex-row items-center sm:justify-center md:justify-start gap-4">
            <button className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition duration-300 w-full sm:w-auto">
              Get Started
            </button>
            <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition duration-300 w-full sm:w-auto">
              See How it Works
            </button>
          </div>
        </div>
        <div className="flex-1 flex justify-center">
          <img
            src={assets.hero}
            alt="Hero"
            className="w-96 h-96 sm:w-120 sm:h-120 md:w-[550px] md:h-[550px] object-contain"
          />
        </div>
      </div>
    </>
  );
};

export default Slider;
