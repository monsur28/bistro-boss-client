import { Outlet } from "react-router-dom";
import Footer from "../../Layout/Shared/Footer";
import Navbar from "../../Layout/Navbar/Navbar";

const Main = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
