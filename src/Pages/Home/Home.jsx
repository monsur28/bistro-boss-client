import { Helmet } from "react-helmet-async";
import Banner from "./Banner/Banner";
import BistroDetails from "./BistroDetails/BistroDetails";
import ChefRecommand from "./ChefRecommand/ChefRecommand";
import FeaturedMenu from "./FeaturedMenu/FeaturedMenu";
import FoodSlider from "./FoodSlider/FoodSlider";
import FromMenu from "./FromMenu/FromMenu";
import PhoneSection from "./PhoneSection/PhoneSection";
import Testimonials from "./Testimonials/Testimonials";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Home</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <Banner></Banner>
      <FoodSlider></FoodSlider>
      <BistroDetails></BistroDetails>
      <FromMenu></FromMenu>
      <PhoneSection></PhoneSection>
      <ChefRecommand></ChefRecommand>
      <FeaturedMenu></FeaturedMenu>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;
