import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Autoplay, Mousewheel, Pagination, Navigation } from "swiper/modules";
import { BiSolidLeftArrow, BiSolidRightArrow } from "react-icons/bi";
import { useState } from "react";

function OurProjectsLeftSideSm({ index, setIndex, data }) {
  return (
    <div className="left-side">
      <Swiper
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          // @ts-ignore
          clickable: true,
        }}
        modules={[Navigation]}
        loop={true}
        breakpoints={{
          150: {
            slidesPerView: 3,
          },
        }}
      >
        {data.map((ele, idx) => {
          return (
            <SwiperSlide key={ele?._id}>
              <div
                className={`div ${idx === index && "active"} `}
                onClick={() => setIndex(idx)}
              >
                {ele.name}
              </div>
            </SwiperSlide>
          );
        })}
        <div className="swip-container">
          <div className="swiper-button-prev">
            <BiSolidLeftArrow className="icon" />
          </div>
          <div className="swiper-button-next">
            <BiSolidRightArrow className="icon" />
          </div>
        </div>
      </Swiper>
    </div>
  );
}

export default OurProjectsLeftSideSm;
