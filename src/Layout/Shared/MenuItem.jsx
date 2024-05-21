const MenuItem = ({ item }) => {
  const { name, image, price, recipe } = item;
  return (
    <div className="flex gap-8">
      <img src={image} alt="" className="rounded-custom w-[118px] h-[104px]" />
      <div className="space-y-2">
        <h3 className="cinzel uppercase text-[#151515]">
          {name} ------------------
        </h3>
        <p className="text-[#737373] inter">{recipe}</p>
      </div>
      <p className="text-[#BB8506] inter">${price}</p>
    </div>
  );
};

export default MenuItem;
