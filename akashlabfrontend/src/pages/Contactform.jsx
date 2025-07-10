import { useState } from "react";
import SectionHeader from "../components/SectionHeader";
import { sectionheader } from "../constants/constants";

const Contactform = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleonChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://api.aakashlabs.com/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      console.log("Response from API:", result);

      //reset form data after successful submission
      if (response.ok) {
        setFormData({ name: "", email: "", message: "" });
        alert("Your message has been sent successfully!");
      } else {
        alert("Failed to send your message. Please try again later.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert(
        "There was an error submitting your message. Please try again later."
      );
    }
  };

  return (
    <div
      id="contact"
      className="bg-gray-50 py-20 px-6 md:px-16 lg:px-24 scroll-mt-8"
    >
      <SectionHeader
        title={sectionheader[2].title}
        subtitle={sectionheader[2].subtitle}
      />

      <form
        className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg space-y-6"
        onSubmit={onSubmit}
      >
        <div className="flex flex-col space-y-6">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleonChange}
            placeholder="Enter your name"
            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
          />

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleonChange}
            placeholder="Enter your email"
            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
        </div>

        <div className="flex flex-col">
          <textarea
            name="message"
            rows="5"
            placeholder="Write your message..."
            value={formData.message}
            onChange={handleonChange}
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
