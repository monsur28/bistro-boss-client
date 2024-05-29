import { RiDeleteBin6Line } from "react-icons/ri";
import useCart from "../../../Hooks/useCart";
import SectionTitle from "../../../Layout/Shared/SectionTitle";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
const Cart = () => {
  const [cart, refetch] = useCart();
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);
  const axiosSecure = useAxiosSecure();
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/carts/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };
  return (
    <div className="cinzel">
      <div>
        <SectionTitle
          heading={"WANNA ADD MORE?"}
          subHeading={"My Cart"}
        ></SectionTitle>
      </div>
      <div className="bg-white w-max p-8">
        <div className="flex justify-evenly items-center gap-32 uppercase">
          <h2 className="text-3xl font-bold">Total orders: {cart.length}</h2>
          <h1 className="text-3xl font-bold">total price: ${totalPrice}</h1>
          <button className="btn bg-[#D1A054] p-4">Pay</button>
        </div>
        <div className="overflow-x-auto mt-9  rounded-t-xl ">
          <table className="table p-6">
            <thead className="p-6">
              <tr className="bg-[#D1A054] ">
                <th></th>
                <th>ITEM IMAGE</th>
                <th>ITEM NAME</th>
                <th>PRICE</th>
                <th>ACTION</th>
              </tr>
            </thead>
            {cart.map((item, index) => (
              <>
                <tbody>
                  <tr key={item._id}>
                    <td>{index + 1}</td>
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img
                              src={item.image}
                              alt="Avatar Tailwind CSS Component"
                            />
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="font-bold">{item.name}</td>
                    <td>${item.price}</td>
                    <th>
                      <button
                        onClick={() => handleDelete(item._id)}
                        className="btn bg-[#B91C1C]"
                      >
                        <RiDeleteBin6Line className="text-white" />
                      </button>
                    </th>
                  </tr>
                </tbody>
              </>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
};

export default Cart;
