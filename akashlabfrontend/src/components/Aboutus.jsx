import { assets } from "../constants/constants";

const Aboutus = () => {
  return (
    <div className="pt-20 bg-gray-50">
      {/* Section Heading */}
      <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-12 underline decoration-orange-400">
        About Us
      </h1>

      {/* First Section */}
      <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 lg:px-32 py-12 gap-10">
        <div className="flex-1 space-y-6 text-gray-700 text-base md:text-lg leading-relaxed">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam,
            quibusdam. Suscipit, pariatur. Consequuntur a cumque repellendus
            dicta autem, maiores temporibus quasi non fugit. Modi commodi ad
            aliquid est omnis qui?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit illo
            nisi maiores voluptas, culpa nobis iusto qui molestiae nesciunt
            beatae esse quos itaque id rerum omnis, sapiente debitis alias unde.
          </p>
        </div>
        <div className="flex-1">
          <img
            src={assets.about1}
            alt="about"
            className="rounded-lg shadow-lg w-full h-auto max-w-md mx-auto"
          />
        </div>
      </div>

      {/* Second Section - reversed */}
      <div className="flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-16 lg:px-32 py-12 gap-10 bg-white">
        <div className="flex-1">
          <img
            src={assets.about1}
            alt="about"
            className="rounded-lg shadow-lg w-full h-auto max-w-md mx-auto"
          />
        </div>
        <div className="flex-1 space-y-6 text-gray-700 text-base md:text-lg leading-relaxed">
          <p>
            Our team is dedicated to delivering high-quality solutions that
            exceed client expectations. We believe in transparency,
            collaboration, and innovation.
          </p>
          <p>
            Whether you're a small startup or a large enterprise, we tailor our
            services to meet your unique needs and help your business thrive in
            a competitive world.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
