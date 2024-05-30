import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./CoursesSM.scss";
// @ts-ignore
import slide_image_1 from '../../assets/newProgramingImg.jpg'
// import slide_image_1 from '../../assets/Mask group6.png'
// @ts-ignore
import slide_image_2 from '../../assets/uiuxCourses.jpg'
// @ts-ignore
import slide_image_3 from '../../assets/aiCourses.jpg'
// import slide_image_3 from '../../assets/Mask group4.png'
// @ts-ignore
// import slide_image_4 from '../../assets/Mask group 5.png'
import slide_image_4 from '../../assets/pythonCourses.jpg'
// @ts-ignore
import slide_image_5 from '../../assets/backEndCourses.jpg'
// @ts-ignore
// import slide_image_6 from '../../assets/Mask group 2.png'
import slide_image_6 from '../../assets/FrontEndCourses.jpg'


import { EffectCoverflow, Navigation } from "swiper/modules";
import { HiArrowLongLeft, HiArrowLongRight } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
function App() {
  const navigate = useNavigate();
  return (
    <div className="sm-course-com ">
      <div className="courses-sm">
        <div className="sm-container sm-screen-show " style={{}}>
          <span>AUVNET library</span>
          <h5 className="heading">Courses</h5>
          <div className="span">Made For You</div>
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            slidesPerView={"auto"}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
              // @ts-ignore
              clickable: true,
            }}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
            }}
            modules={[EffectCoverflow, Navigation]}
            className="swiper_container"
          >
            <SwiperSlide>
              <div
                style={{ position: "relative" }}
                onClick={() =>
                  navigate("/courses/our-courses", { state: "Programming" })
                }
              >
                <img src={slide_image_1} alt="slide_image" />
                <div
                  style={{
                    position: "absolute",
                    bottom: "1rem",
                    padding: "1rem",
                  }}
                >
                  <div className="swiper-slider-headings">
                    Penetration Testing{" "}
                  </div>
                  <div className="swiper-slider-type">Cyber Security</div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                style={{ position: "relative" }}
                onClick={() =>
                  navigate("/courses/our-courses", { state: "UIUX" })
                }
              >
                <img src={slide_image_2} alt="slide_image" />
                <div
                  style={{
                    position: "absolute",
                    bottom: "1rem",
                    padding: "1rem",
                  }}
                >
                  <div className="swiper-slider-headings">
                    Programming Fundamentals
                  </div>
                  <div className="swiper-slider-type">IT Fundamentals</div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                style={{ position: "relative" }}
                onClick={() =>
                  navigate("/courses/our-courses", { state: "AI Technology" })
                }
              >
                <img src={slide_image_3} alt="slide_image" />
                <div
                  style={{
                    position: "absolute",
                    bottom: "1rem",
                    padding: "1rem",
                  }}
                >
                  <div className="swiper-slider-headings">Machine Learning</div>
                  <div className="swiper-slider-type">AI Technology</div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                style={{ position: "relative" }}
                onClick={() =>
                  navigate("/courses/our-courses", { state: "Python" })
                }
              >
                <img src={slide_image_4} alt="slide_image" />
                <div
                  style={{
                    position: "absolute",
                    bottom: "1rem",
                    padding: "1rem",
                  }}
                >
                  <div className="swiper-slider-headings">
                    Artificial intelligence Development{" "}
                  </div>
                  <div className="swiper-slider-type">Python</div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                style={{ position: "relative" }}
                onClick={() =>
                  navigate("/courses/our-courses", { state: "Back-End" })
                }
              >
                <img src={slide_image_5} alt="slide_image" />
                <div
                  style={{
                    position: "absolute",
                    bottom: "1rem",
                    padding: "1rem",
                  }}
                >
                  <div className="swiper-slider-headings">
                    Back-End Development{" "}
                  </div>
                  <div className="swiper-slider-type">Node JS</div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                style={{ position: "relative" }}
                onClick={() =>
                  navigate("/courses/our-courses", { state: "Front-End" })
                }
              >
                <img src={slide_image_6} alt="slide_image" />
                <div
                  style={{
                    position: "absolute",
                    bottom: "1rem",
                    padding: "1rem",
                  }}
                >
                  <div className="swiper-slider-headings">
                    Front-End Development{" "}
                  </div>
                  <div className="swiper-slider-type">React JS</div>
                </div>
              </div>
            </SwiperSlide>
            <div className="slider-controler">
              <div className="swiper-button-prev slider-arrow">
                <HiArrowLongLeft className="icon" />
              </div>
              <div className="swiper-button-next slider-arrow">
                <HiArrowLongRight className="icon" />
              </div>
              <div className="swiper-pagination"></div>
            </div>
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default App;
