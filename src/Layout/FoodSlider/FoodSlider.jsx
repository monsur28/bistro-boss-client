import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";

import img1 from "../../assets/home/slide1.jpg";
import img2 from "../../assets/home/slide2.jpg";
import img3 from "../../assets/home/slide3.jpg";
import img4 from "../../assets/home/slide4.jpg";
// import img5 from "../../assets/home/slide5.jpg";

const FoodSlider = () => {
  return (
    <div className="mt-20 text-center inter">
      <h2 className="text-[#D99904] text-xl">---From 11:00am to 10:00pm---</h2>
      <hr className="bg-[#E8E8E8] w-[424px] h-1 my-4 m-auto" />
      <h2 className="lg:text-[40px] text-2xl">ORDER ONLINE</h2>
      <hr className="bg-[#E8E8E8] w-[424px] h-1 mt-4 m-auto mb-12" />
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={img1} alt="" />
          <h2 className="lg:text-[32px] Cinzel text-white -mt-16">Salads</h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} alt="" />
          <h2 className="lg:text-[32px] Cinzel text-white -mt-16">Soups</h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} alt="" />
          <h2 className="lg:text-[32px] Cinzel text-white -mt-16">pizzas</h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img4} alt="" />
          <h2 className="lg:text-[32px] Cinzel text-white -mt-16">desserts</h2>
        </SwiperSlide>
        {/* <SwiperSlide>
          <img src={img5} alt="" />
          <h2 className="text-[32px] Cinzel text-white -mt-16">Soups</h2>
        </SwiperSlide> */}
      </Swiper>
    </div>
  );
};

export default FoodSlider;
