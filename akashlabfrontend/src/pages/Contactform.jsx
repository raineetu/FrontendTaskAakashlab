import SectionHeader from "../components/SectionHeader";
import { sectionheader } from "../constants/constants";

const Contactform = () => {
  const form = [
    { id: "name", placeholder: "Enter your name" },
    { id: "email", placeholder: "Enter your email" },
  ];
  return (
    <div className="bg-gray-50 py-20 px-6 md:px-16 lg:px-24">
      <SectionHeader
        title={sectionheader[2].title}
        subtitle={sectionheader[2].subtitle}
      />

      <form className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg space-y-6 ">
        <div className="flex flex-col space-y-6">
          {form.map((field) => (
            <input
              type="text"
              id={field.id}
              placeholder={field.placeholder}
              className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          ))}
        </div>

        <div className="flex flex-col">
          <textarea
            id="message"
            rows="5"
            placeholder="Write your message..."
            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-md transition"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contactform;
