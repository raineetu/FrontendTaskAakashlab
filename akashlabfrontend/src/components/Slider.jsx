import { assets } from "../constants/constants";

const Slider = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-around items-center pt-28">
        <div className="space-y-8 text-center">
          <p className="text-green-600 text-3xl md:text-5xl font-bold">
            Team of Professionals
          </p>
          <p className="text-gray-600 text-xl md:text-2xl font-semibold">
            Our expert team is committed to your success.
          </p>
        </div>
        <div>
          <img src={assets.hero} className="w-120 h-120 md:w-150 md:h-150" />
        </div>
      </div>
    </>
  );
};

export default Slider;
