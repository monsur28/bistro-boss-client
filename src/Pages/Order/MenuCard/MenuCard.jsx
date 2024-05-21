const MenuCard = ({ item }) => {
  const { name, image, recipe, price } = item;
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
            style={{ borderBottom: "3px solid #1F2937" }}
            className="flex uppercase hover:bg-[#1F2937] p-3 font-semibold tracking-wide rounded-md dark:bg-[#E8E8E8] dark:text-[#BB8506]"
          >
            add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
