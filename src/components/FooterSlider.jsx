import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay } from "swiper";
import SwiperCore, { Navigation, Pagination } from "swiper";
import img1 from "../images/p-1.png";
// import img1 from "../images/kb손해보험.png";
import img2 from "../images/삼성화재다이렉트.png";
import img3 from "../images/db손해보험.png";
import img4 from "../images/현대해상_로고_(1).png";
import img5 from "../images/axa.png";
import smu from "../images/smu_log.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css"; //basic
import "swiper/css/navigation";
import "swiper/css/pagination";
SwiperCore.use([Navigation, Pagination]);

export default function FooterSlider() {
  return (
    // <Inner>
    <Swiper
      spaceBetween={30}
      slidesPerView={5}
      loop={true}
      // autoplay={{ delay: 2000 }}
      // breakpoints={{
      //   500: {
      //     slidesPerView: 4,
      //   },
      // }}
    >
      <SwiperSlide>
        <img src={img1} alt="img1" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={img2} alt="img2" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={img3} alt="img3" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={img4} alt="img4" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={img5} alt="img5" className="axa" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={smu} alt="smu" className="axa" />
      </SwiperSlide>
    </Swiper>
    // </Inner>
  );
}
