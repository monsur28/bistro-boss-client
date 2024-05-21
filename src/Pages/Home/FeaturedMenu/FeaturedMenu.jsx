import featured from "../../../assets/home/featured.jpg";
import SectionTitle from "../../../Layout/Shared/SectionTitle";
import "./featureditem.css";

const FeaturedMenu = () => {
  return (
    <div className="mt-32 inter featuredItem lg:py-24 py-8 lg:px-28 text-white">
      <SectionTitle
        subHeading={"Check it out"}
        heading={"FROM OUR MENU"}
      ></SectionTitle>
      <div className="md:flex justify-center items-center py-8 px-16 gap-16">
        <div>
          <img src={featured} alt="" />
        </div>
        <div className="md:ml-10">
          <h2 className="text-2xl">March 20, 2023</h2>
          <p className="text-2xl">WHERE CAN I GET SOME?</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            voluptate facere, deserunt dolores maiores quod nobis quas quasi.
            Eaque repellat recusandae ad laudantium tempore consequatur
            consequuntur omnis ullam maxime tenetur.
          </p>
          <button
            style={{ borderBottom: "3px solid #FFF" }}
            className="btn bg-transparent mt-6 px-7 py-5 text-white border-none hover:text-black"
          >
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedMenu;
