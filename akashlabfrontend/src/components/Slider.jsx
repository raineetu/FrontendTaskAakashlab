import { assets } from "../constants/constants";

const Slider = () => {
  return (
    <>
      <div className="pt-34 flex justify-around items-center">
        <div>
          <p>Team of Professionals</p>
          <p>Our expert team is committed to your success.</p>
        </div>
        <div>
          <img src={assets.hero} className="w-140 h-140" />
        </div>
      </div>
    </>
  );
};

export default Slider;
