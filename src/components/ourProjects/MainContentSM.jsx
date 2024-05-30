import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { useEffect, useState } from "react";
function MainContent({ data, index, showDesc }) {
  const [projectDetails, setProjectDetails] = useState(data?.data[index]);
  const params = {
    modules: [Pagination],
    breakpoints: {
      992: {
        slidesPerView: 1,
        spaceBetween: 15,
      },
    },
    loop: true,
  };

  useEffect(() => {
    setProjectDetails(data?.data[index]);
  }, [index]);

  return (
    <Swiper
      pagination={{
        clickable: true,
      }}
      {...params}
    >
      <>
        <SwiperSlide style={{position:'relative'}} className="sm-our-projects">
        {/* <div className="btns">
              {projectDetails?.tools?.map((ele, idx) => (
                <button key={idx}>{ele}</button>
              ))}
            </div> */}
          <img src={projectDetails?.thumbnail} alt="img" loading="lazy" />
        </SwiperSlide>
      </>
    </Swiper>
  );
}

export default MainContent;
