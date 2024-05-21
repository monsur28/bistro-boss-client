import { Link } from "react-router-dom";
import MenuItem from "./MenuItem";
import SectionCover from "./SectionCover";

const MenuCategory = ({ items, image, title }) => {
  return (
    <div className="">
      {title && (
        <SectionCover
          header={title}
          description={
            "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          }
          image={image}
        ></SectionCover>
      )}
      <div className=" mt-24 grid grid-cols-1 lg:grid-cols-2 gap-6">
        {items.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <div className="flex justify-center items-center mt-16 mb-14">
        <Link to={`/ourshop/${title}`}>
          <button
            style={{ borderBottom: "3px solid #1F2937" }}
            className="btn bg-transparent border-none py-5 px-8 text-[#1F2937]"
          >
            ORDER YOUR FAVOURITE FOOD
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MenuCategory;
