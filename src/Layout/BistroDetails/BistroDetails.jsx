import chef from "../../assets/home/chef-service.jpg";

const BistroDetails = () => {
  return (
    <div>
      <div
        className="hero h-[500px] mt-24"
        style={{
          backgroundImage: `url(${chef})`,
        }}
      >
        <div className="hero-overlay bg-opacity-20"></div>
        <div className="hero-content bg-white p-16 px-36 text-center text-black">
          <div className="max-w-md">
            <h1 className="mb-5 lg:text-5xl cinzel">Bistro Boss</h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BistroDetails;
