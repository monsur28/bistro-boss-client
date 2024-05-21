import SectionTitle from "../../../Layout/Shared/SectionTitle";
import MenuItem from "../../../Layout/Shared/MenuItem";
import useMenu from "../../../Hooks/useMenu";

const FromMenu = () => {
  const [menu] = useMenu();
  const populer = menu.filter((item) => item.category === "popular");
  // const [menu, setMenu] = useState([]);

  // useEffect(() => {
  //   fetch("menu.json")
  //     .then((res) => res.json())
  //     .then((data) =>
  //       setMenu(data.filter((item) => item.category === "popular"))
  //     );
  // }, []);
  return (
    <section>
      <SectionTitle
        subHeading={"Check it out"}
        heading={"FROM OUR MENU"}
      ></SectionTitle>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {populer.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <div className="flex justify-center items-center mt-16">
        <button
          style={{ borderBottom: "3px solid #1F2937" }}
          className="btn py-5 px-8 text-[#1F2937]"
        >
          View Full Menu
        </button>
      </div>
    </section>
  );
};

export default FromMenu;
