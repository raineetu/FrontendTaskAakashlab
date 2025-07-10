const SectionHeader = ({ title, subtitle }) => {
  // console.log(title, "gfdsgfd");
  // console.log("dsgfdasbfvdc", subtitle);

  return (
    <div>
      <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-4">
        {title}
      </h2>
      <p className="text-center text-gray-600 text-lg md:text-xl max-w-2xl mx-auto mb-12">
        {subtitle}
      </p>
    </div>
  );
};

export default SectionHeader;
