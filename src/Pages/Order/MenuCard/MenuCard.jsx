import Swal from "sweetalert2";
import useAuth from "../../../Hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useCart from "../../../Hooks/useCart";

const MenuCard = ({ item }) => {
  const { name, image, recipe, price, _id } = item;
  const { user } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const axiousSecure = useAxiosSecure();
  const [, refetch] = useCart();

  const handleAddToCart = () => {
    if (user && user.email) {
      const cartItem = {
        menuId: _id,
        email: user.email,
        name,
        image,
        price,
      };
      axiousSecure.post("/carts", cartItem).then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: `Your ${name} has been Add on the Cart`,
            showConfirmButton: false,
            timer: 1500,
          });
          refetch();
        }
      });
    } else {
      Swal.fire({
        title: "You are Not Logged in",
        text: "Please Login to add to Cart",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };
  return (
    <div className="card bg-[#F3F3F3] text-center rounded-lg relative">
      <img src={image} alt="Shoes" className=" rounded-t-lg" />
      <div className="card-body">
        <h2 className="inter text-2xl font-semibold ">{name}</h2>
        <p className="text-[#737373]">{recipe}</p>
        <h3 className="absolute top-5 right-6 bg-[#111827] text-white py-3 px-5">
          ${price}
        </h3>
        <div className="flex items-center justify-center">
          <button
            onClick={handleAddToCart}
            style={{ borderBottom: "3px solid #1F2937" }}
            className="flex uppercase hover:bg-[#1F2937] hover:border-b-4 hover:border-b-white p-3 font-semibold tracking-wide rounded-md dark:bg-[#E8E8E8] dark:text-[#BB8506]"
          >
            add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
