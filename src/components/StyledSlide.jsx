import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import img1 from "../images/p-1.png";
import img2 from "../images/p-2.png";
import img3 from "../images/p-3.png";
import img4 from "../images/p-4.png";
import img5 from "../images/p-5.png";
import styled from "styled-components";

export default function ProductSlider() {
  return (
    <Swiper
      freeMode={true}
      grabCursor={true}
      modules={[FreeMode]}
      className="mySwiper"
      slidesPerView={5}
      spaceBetween={30}
    >
      <SwiperSlide>
        <img src={img1} alt="img1" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={img2} alt="img1" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={img3} alt="img1" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={img4} alt="img1" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={img5} alt="img1" />
      </SwiperSlide>
    </Swiper>
  );
}
