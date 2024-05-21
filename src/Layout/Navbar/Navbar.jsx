import { NavLink } from "react-router-dom";
import cart from "../../assets/icon/151-1511569_cart-notifications-free-shopping-cart-favicon-hd-png-removebg-preview.png";
import user from "../../assets/icon/user.jpg";

const Navbar = () => {
  const navlinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/contact">CONTACT US</NavLink>
      </li>
      <li>
        <NavLink to="/dashboard">DASHBOARD</NavLink>
      </li>
      <li>
        <NavLink to="/ourmenu">Our Menu</NavLink>
      </li>
      <li>
        <NavLink to="/ourshop/salad">Our Shop</NavLink>
      </li>
    </>
  );
  return (
    <>
      <div className="navbar max-h-min fixed z-10 bg-[#15151580]/20 bg-opacity-10 max-w-screen-xl text-white inter text-xl font-extrabold">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navlinks}
            </ul>
          </div>
          <a href="/" className="cinzel ">
            <span className="text-[32px] font-black ">BISTRO BOSS</span> <br />
            <span className="text-2xl font-bold tracking-[9px]">
              Restaurant
            </span>
          </a>
        </div>
        <div className="navbar-center">
          <div className=" hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{navlinks}</ul>
            <img src={cart} alt="" className="w-[60px] h-[55px]" />
            <ul className="menu menu-horizontal px-1">
              <li className="li">
                <NavLink to="/login">Sign In</NavLink>
              </li>
            </ul>
          </div>
          <div tabIndex={0} role="button" className="avatar lg:block hidden">
            <div className="w-10 rounded-full">
              <img alt="Tailwind CSS Navbar component" src={user} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
