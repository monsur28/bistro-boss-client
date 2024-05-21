const SectionCover = ({ header, description, image }) => {
  return (
    <div
      className="hero h-[500px]"
      style={{
        background: `url(${image}) lightgray 50% / cover no-repeat`,
        backgroundAttachment: "fixed",
      }}
    >
      <div className="hero-overlay bg-opacity-10"></div>
      <div className="hero-content lg:p-15 lg:px-44 text-center bg-[#15151566] text-black">
        <div className="max-w-xl text-white ">
          <h1 className="mb-5 lg:text-[88px] font-bold cinzel">{header}</h1>
          <p className="mb-5 cinzel ">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default SectionCover;
