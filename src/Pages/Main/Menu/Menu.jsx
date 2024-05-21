import { Helmet } from "react-helmet-async";
import SectionCover from "../../../Layout/Shared/SectionCover";
import banner from "../../../assets/menu/banner3.jpg";
import desert from "../../../assets/menu/dessert-bg.jpeg";
import pizzaimg from "../../../assets/menu/pizza-bg.jpg";
import saladimg from "../../../assets/menu/salad-bg.jpg";
import soupimg from "../../../assets/menu/soup-bg.jpg";
import SectionTitle from "../../../Layout/Shared/SectionTitle";
import useMenu from "../../../Hooks/useMenu";
import MenuCategory from "../../../Layout/Shared/MenuCategory";
const Menu = () => {
  const [menu] = useMenu();
  const offered = menu.filter((item) => item.category === "offered");
  const dessert = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");
  const salad = menu.filter((item) => item.category === "salad");
  const soup = menu.filter((item) => item.category === "soup");
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Our Menu</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <SectionCover
        header={"OUR MENU"}
        description={"Would you like to try a dish?"}
        image={banner}
      ></SectionCover>
      {/* offer Menu */}
      <SectionTitle
        subHeading={"Don't miss"}
        heading={"TODAY'S OFFER"}
      ></SectionTitle>
      <MenuCategory items={offered}></MenuCategory>
      {/* dessert Menu */}
      <MenuCategory
        items={dessert}
        title={"desert"}
        image={desert}
      ></MenuCategory>
      {/* pizza menu */}
      <MenuCategory
        items={pizza}
        title={"pizza"}
        image={pizzaimg}
      ></MenuCategory>
      {/* salad menu */}
      <MenuCategory
        items={salad}
        title={"salad"}
        image={saladimg}
      ></MenuCategory>
      {/* soup menu */}
      <MenuCategory items={soup} title={"soup"} image={soupimg}></MenuCategory>
    </div>
  );
};

export default Menu;
