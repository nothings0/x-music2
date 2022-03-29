import React, { useContext } from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { SongContext } from "../Contexts/SongContext";
import { Autoplay ,Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

const Banner = () => {
  const { banner } = useContext(SongContext)
  return (
    <Swiper
        slidesPerView={3}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          500: {
            slidesPerView: 1
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          }
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper banner"
      >
      {
        banner.map((item, index) => (
          <SwiperSlide key={index}><img src={item.banner} alt="" /></SwiperSlide>
        ))
      }
        
      </Swiper>
  );
};

export default Banner;
