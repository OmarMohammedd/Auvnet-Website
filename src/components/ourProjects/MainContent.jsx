import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useNavigate } from "react-router-dom";
import { Autoplay, Mousewheel, Pagination, Navigation } from "swiper/modules";
import { BiSolidLeftArrow, BiSolidRightArrow } from "react-icons/bi";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

function MainContent({ data, index, showDesc }) {
  const { t, i18n } = useTranslation();
  const [projectDetails, setProjectDetails] = useState(data?.data[index]);
  const params = {
    modules: [Pagination, Autoplay, Mousewheel, Navigation],
    breakpoints: {
      992: {
        slidesPerView: 1,
        spaceBetween: 15,
      },
    },
    loop: true,
  };
  const navigate = useNavigate();
  useEffect(() => {
    setProjectDetails(data?.data[index]);
  }, [index]);

  return (
    <Swiper
      navigation={{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
        // @ts-ignore
        clickable: true,
      }}
      pagination={{
        type: "fraction",
      }}
      {...params}
    >
      <SwiperSlide>
        <div style={{ position: "relative", height: "100%" }}>
          <img src={projectDetails?.thumbnail} alt="img" loading="lazy" />
          {!showDesc && (
            <div>
              {projectDetails?.link && (
                <a href={`https://${projectDetails?.link}`}>
                  <button
                    style={{
                      position: "absolute",
                      background: "#D9D9D9",
                      display: "flex",
                      alignItems: "center",
                      paddingLeft: "1rem",
                      zIndex: 11,
                      bottom: "80px",
                      right: "80px",
                      width: "166px",
                      height: "42px",
                      borderRadius: 11,
                      fontWeight: 500,
                      fontSize: "15px",
                      color: "black",
                    }}
                  >
                    {i18n.language === "en" && "Visit Project"}
                    {i18n.language === "ar" && "زيارة المشروع"}
                  </button>
                  <button
                    style={{
                      position: "absolute",
                      background: "#000000",
                      paddingLeft: "1rem",
                      zIndex: 11,
                      bottom: "68px",
                      right: "60px",
                      width: "70px",
                      height: "70px",
                      borderRadius: "50%",
                      fontWeight: 500,
                      fontSize: "15px",
                      color: "black",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <BiSolidRightArrow fontSize={"2rem"} color="#ffffff" />
                  </button>
                </a>
              )}

              <button
                onClick={() => {
                  navigate(`/projects/${projectDetails?.namespace}`, {
                    state: projectDetails,
                  });

                  localStorage.setItem("namespace", projectDetails?.namespace);
                }}
                className="pro-link pre-link"
                style={{
                  position: "absolute",
                  zIndex: 11,
                  bottom: "77px",
                  right: "280px",
                  borderRadius: 11,
                  fontWeight: 500,
                  fontSize: "15px",
                }}
              >
                {i18n.language === "en" && "View Presentation"}
                {i18n.language === "ar" && "انظر العرض التقديمي"}
              </button>
            </div>
          )}

          {showDesc && (
            <div
              style={{
                padding: "1rem",
                backdropFilter: "blur(10px)",
                background: "#000000A6",
                position: "absolute",
                bottom: "32px",
                right: "0",
                height: "100%",
                width: "40%",
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                justifyContent: "space-around",
                gap: "1rem",
                zIndex: 12,
              }}
            >
              <div className="pro-name">{projectDetails?.name}</div>
              <div className="pro-desc">{projectDetails?.description}</div>
              <div className="d-flex align-items-center flex-column gap-4">
                {projectDetails?.link && (
                  <a href={`https://${projectDetails.link}`} className="pro-link">
                    {i18n.language === "en" && "Visit This Project"}
                    {i18n.language === "ar" && "قم بزيارة هذا المشروع"}
                  </a>
                )}
                <button
                  onClick={() => {
                    navigate(`/projects/${projectDetails?.namespace}`, {
                      state: projectDetails,
                    });

                    localStorage.setItem(
                      "namespace",
                      projectDetails?.namespace
                    );
                  }}
                  className="pro-link pre-link"
                >
                  {i18n.language === "en" && "View Presentation"}
                  {i18n.language === "ar" && "انظر العرض التقديمي"}
                </button>
              </div>
            </div>
          )}
        </div>
      </SwiperSlide>

      <div className="slider-controler">
        <div className="swiper-button-prev slider-arrow">
          <BiSolidLeftArrow className="icon" />
        </div>
        <div className="swiper-button-next slider-arrow">
          <BiSolidRightArrow className="icon" />
        </div>
        <div className="swiper-pagination"></div>
      </div>
    </Swiper>
  );
}

export default MainContent;
