import SectionTitle from "../../../Layout/Shared/SectionTitle";
import salad from "../../../assets/home/slide1.jpg";
import salad2 from "../../../assets/home/slide2.jpg";
import salad3 from "../../../assets/home/slide3.jpg";

const ChefRecommand = () => {
  return (
    <div>
      <SectionTitle
        subHeading={"Should Try"}
        heading={"CHEF RECOMMENDS"}
      ></SectionTitle>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 inter text-center">
        <div className=" rounded-md shadow-md dark:bg-gray-50 bg-[#F3F3F3] dark:text-gray-800">
          <img
            src={salad}
            alt=""
            className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500"
          />
          <div className="flex flex-col justify-between p-6 space-y-8">
            <div className="space-y-2">
              <h2 className="text-2xl font-semibold tracking-wide">
                Caeser Salad
              </h2>
              <p className="dark:text-gray-800">
                Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <button
                type="button"
                style={{ borderBottom: "3px solid #1F2937" }}
                className="flex uppercase hover:bg-[#1F2937] p-3 font-semibold tracking-wide rounded-md dark:bg-[#E8E8E8] dark:text-[#BB8506]"
              >
                add to cart
              </button>
            </div>
          </div>
        </div>
        <div className=" rounded-md shadow-md dark:bg-gray-50 bg-[#F3F3F3] dark:text-gray-800">
          <img
            src={salad2}
            alt=""
            className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500"
          />
          <div className="flex flex-col justify-between p-6 space-y-8">
            <div className="space-y-2">
              <h2 className="text-2xl font-semibold tracking-wide">
                Caeser Salad
              </h2>
              <p className="dark:text-gray-800">
                Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <button
                type="button"
                style={{ borderBottom: "3px solid #1F2937" }}
                className="flex uppercase hover:bg-[#1F2937] p-3 font-semibold tracking-wide rounded-md dark:bg-[#E8E8E8] dark:text-[#BB8506]"
              >
                add to cart
              </button>
            </div>
          </div>
        </div>
        <div className=" rounded-md shadow-md dark:bg-gray-50 bg-[#F3F3F3] dark:text-gray-800">
          <img
            src={salad3}
            alt=""
            className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500"
          />
          <div className="flex flex-col justify-between p-6 space-y-8">
            <div className="space-y-2">
              <h2 className="text-2xl font-semibold tracking-wide">
                Caeser Salad
              </h2>
              <p className="dark:text-gray-800">
                Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <button
                type="button"
                style={{ borderBottom: "3px solid #1F2937" }}
                className="flex uppercase hover:bg-[#1F2937] p-3 font-semibold tracking-wide rounded-md dark:bg-[#E8E8E8] dark:text-[#BB8506]"
              >
                add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChefRecommand;
