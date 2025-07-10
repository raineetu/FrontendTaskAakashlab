import React from "react";
import { assets } from "../constants/constants";

const teamMembers = [
  {
    name: "Nisha Rai",
    position: "CEO & Founder",
    image: assets.member1,
    bio: "Visionary leader focused on innovation and team growth.",
  },
  {
    name: "Ravi Shrestha",
    position: "Lead Developer",
    image: assets.member2,
    bio: "Expert in full-stack development and clean architecture.",
  },
  {
    name: "Anjali K.C.",
    position: "UX/UI Designer",
    image: assets.member3,
    bio: "Designs elegant, user-centered interfaces with empathy.",
  },
  {
    name: "Bikash Thapa",
    position: "Marketing Head",
    image: assets.member4,
    bio: "Strategic thinker driving brand growth and awareness.",
  },
];

const OurTeam = () => {
  return (
    <div className="bg-gray-50 py-20 px-6 md:px-16 lg:px-24">
      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-4">
        Meet Our Team
      </h2>
      <p className="text-center text-gray-600 text-lg md:text-xl max-w-2xl mx-auto mb-12">
        A team of passionate professionals committed to delivering excellence
        and innovation across every project we undertake.
      </p>

      {/* Team Grid */}
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
