import useMenu from "../../Hooks/useMenu";
import SectionCover from "../../Layout/Shared/SectionCover";
import orderimg from "../../assets/shop/banner2.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import MenuCard from "./MenuCard/MenuCard";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
const Order = () => {
  const [menu] = useMenu();
  const categories = ["salad", "pizza", "soup", "desert", "drinks"];
  const { category } = useParams();
  const initialIndex = categories.indexOf(category);
  const [tabIndex, setTabIndex] = useState(initialIndex);
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const soup = menu.filter((item) => item.category === "soup");
  const dessert = menu.filter((item) => item.category === "dessert");
  const drinks = menu.filter((item) => item.category === "drinks");
  return (
    <div className="mb-10">
      <Helmet>
        <title>Bistro Boss | Our Shop</title>
      </Helmet>
      <SectionCover
        header={"OUR SHOP"}
        description={"Would you like to try a dish?"}
        image={orderimg}
      ></SectionCover>
      <div className="mt-32 flex justify-center">
        <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList>
            <Tab>Salad</Tab>
            <Tab>pizza</Tab>
            <Tab>soups</Tab>
            <Tab>desserts</Tab>
            <Tab>drinks</Tab>
          </TabList>
          <TabPanel>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 ">
              {salad.map((item) => (
                <MenuCard key={item._id} item={item}></MenuCard>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              {pizza.map((item) => (
                <MenuCard key={item._id} item={item}></MenuCard>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              {soup.map((item) => (
                <MenuCard key={item._id} item={item}></MenuCard>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              {dessert.map((item) => (
                <MenuCard key={item._id} item={item}></MenuCard>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              {drinks.map((item) => (
                <MenuCard key={item._id} item={item}></MenuCard>
              ))}
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Order;
