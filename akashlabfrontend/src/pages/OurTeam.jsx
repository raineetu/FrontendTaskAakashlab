import SectionHeader from "../components/SectionHeader";
import { teamMembers, sectionheader } from "../constants/constants";

const OurTeam = () => {
  return (
    <div
      id="team"
      className="bg-gray-50 py-20 px-6 md:px-16 lg:px-24 scroll-mt-10"
    >
      {/* Heading */}
      <SectionHeader
        title={sectionheader[1].title}
        subtitle={sectionheader[1].subtitle}
      />
      {/* Team  */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg p-6 text-center transform hover:scale-105 transition duration-300 ease-in-out"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-32 h-32 mx-auto rounded-full object-cover mb-4 border-4 border-orange-500"
            />
            <h3 className="text-xl font-semibold text-gray-800">
              {member.name}
            </h3>
            <p className="text-orange-500 font-medium">{member.position}</p>
            <p className="text-gray-600 text-sm mt-2">{member.bio}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurTeam;
