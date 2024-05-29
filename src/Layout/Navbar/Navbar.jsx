import { Link, NavLink, useNavigate } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import userImg from "../../assets/icon/user.jpg";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import useCart from "../../Hooks/useCart";
const MySwal = withReactContent(Swal);

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  const [cart] = useCart();

  const handleLogOut = () => {
    logOut()
      .then(() => {
        MySwal.fire({
          title: "Good job!",
          text: "LogOut Succesfully",
          icon: "success",
        });
        navigate("/login");
      })
      .catch((error) => {
        MySwal.fire({
          icon: "error",
          title: "Oops...",
          text: `${error.message}`,
        });
      });
  };
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
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-black"
            >
              {navlinks}
            </ul>
          </div>
          <div className="flex justify-between">
            <a href="/" className="cinzel ">
              <span className="text-[32px] font-black ">BISTRO BOSS</span>{" "}
              <br />
              <span className="text-2xl font-bold tracking-[9px]">
                Restaurant
              </span>
            </a>
          </div>
          <Link to="/dashboard/cart">
            <button className="btn  lg:hidden bg-transparent text-white border-none hover:bg-transparent hover:border-solid">
              <FaCartShopping className="text-xl" />
              <div className="badge badge-secondary">+{cart.length}</div>
            </button>
          </Link>
        </div>
        <div className="navbar-center">
          <div className=" hidden lg:flex justify-center items-center">
            <ul className="menu menu-horizontal px-1">{navlinks}</ul>
            <Link to="/dashboard/cart">
              <button className="btn bg-transparent text-white border-none hover:bg-transparent hover:border-solid">
                <FaCartShopping className="text-xl" />
                <div className="badge badge-secondary">+{cart.length}</div>
              </button>
            </Link>
            <ul className="menu menu-horizontal px-1">
              <li className="li">
                {user ? (
                  <button
                    onClick={handleLogOut}
                    className="btn bg-transparent text-white"
                  >
                    LogOut
                  </button>
                ) : (
                  <NavLink to="/login">Log In</NavLink>
                )}
              </li>
            </ul>
          </div>
          <div tabIndex={0} role="button" className="avatar lg:block hidden">
            {user ? (
              <div className="w-10 rounded-full">
                <img alt="Tailwind CSS Navbar component" src={user.photoURL} />
              </div>
            ) : (
              <div className="w-10 rounded-full">
                <img alt="Tailwind CSS Navbar component" src={userImg} />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
