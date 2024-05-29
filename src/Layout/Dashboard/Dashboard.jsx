import { FaCalendarAlt, FaHome, FaShoppingCart } from "react-icons/fa";
import { GiHamburgerMenu, GiShoppingBag, GiWallet } from "react-icons/gi";
import { MdCalendarMonth, MdEmail } from "react-icons/md";
import { PiFolderSimpleStarBold } from "react-icons/pi";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../../Hooks/useCart";

const Dashboard = () => {
  const [cart] = useCart();
  return (
    <div className="flex cinzel bg-[#F6F6F6]">
      <div className="w-64 min-h-screen bg-[#D1A054]">
        <ul className="menu p-4 uppercase">
          <div className="my-14">
            <h1 className="text-2xl cinzel font-black">BISTRO BOSS</h1>
            <span className="text-lg font-bold tracking-[6px]">Restaurant</span>
          </div>
          <li>
            <NavLink to="/dashboard/userHome">
              <FaHome></FaHome> User Home
            </NavLink>
          </li>
          <li className="my-2">
            <NavLink to="/dashboard/resevation">
              <FaCalendarAlt></FaCalendarAlt> Reservation
            </NavLink>
          </li>
          <li className="my-2">
            <NavLink to="/dashboard/resevation">
              <GiWallet /> payment history
            </NavLink>
          </li>
          <li className="my-2">
            <NavLink to="/dashboard/cart">
              <FaShoppingCart></FaShoppingCart> My Cart ({cart.length})
            </NavLink>
          </li>
          <li className="my-2">
            <NavLink to="/dashboard/addReview">
              <PiFolderSimpleStarBold />
              add review
            </NavLink>
          </li>
          <li className="my-2">
            <NavLink to="/dashboard/myBooking">
              <MdCalendarMonth></MdCalendarMonth>
              my booking
            </NavLink>
          </li>
          <div className="divider"></div>
          <li>
            <NavLink to="/">
              <FaHome></FaHome> Home
            </NavLink>
          </li>
          <li className="my-2">
            <NavLink to="/ourmenu">
              <GiHamburgerMenu /> Menu
            </NavLink>
          </li>
          <li className="my-2">
            <NavLink to="/ourshop/salad">
              <GiShoppingBag /> Shop
            </NavLink>
          </li>
          <li className="my-2">
            <NavLink to="/contact">
              <MdEmail /> Contact
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="flex-1 px-8">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
