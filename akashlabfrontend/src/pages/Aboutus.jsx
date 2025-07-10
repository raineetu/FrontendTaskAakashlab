import SectionHeader from "../components/SectionHeader";
import { sectionheader, aboutcomp } from "../constants/constants";

const Aboutus = () => {
  return (
    <div id="about" className="pt-20 bg-gray-50 scroll-mt-10">
      {/* Section Heading */}
      <SectionHeader
        title={sectionheader[0].title}
        subtitle={sectionheader[0].subtitle}
      />

      {/* First Section */}
      <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 lg:px-32 py-4 gap-10">
        <div className="flex-1 space-y-6 text-gray-700 text-base md:text-lg leading-relaxed">
          <p>{aboutcomp[0].ptitle}</p>
        </div>
        <div className="flex-1">
          <img
            src={aboutcomp[0].image}
            alt="about"
            className="rounded-lg shadow-lg w-full h-auto max-w-md mx-auto"
          />
        </div>
      </div>

      {/* Second Section - reversed */}
      <div className="flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-16 lg:px-32 py-12 gap-10 bg-white">
        <div className="flex-1">
          <img
            src={aboutcomp[1].image}
            alt="about"
            className="rounded-lg shadow-lg w-full h-auto max-w-md mx-auto"
          />
        </div>
        <div className="flex-1 space-y-6 text-gray-700 text-base md:text-lg leading-relaxed">
          <p>{aboutcomp[1].ptitle}</p>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
