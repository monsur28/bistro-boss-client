const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="mt-20 text-center inter">
      <h2 className="text-[#D99904] text-xl">---{subHeading}---</h2>
      <hr className="bg-[#E8E8E8] lg:w-[424px] h-1 my-4 m-auto" />
      <h2 className="lg:text-[40px] text-2xl">{heading}</h2>
      <hr className="bg-[#E8E8E8] lg:w-[424px] h-1 mt-4 m-auto mb-12" />
    </div>
  );
};

export default SectionTitle;
