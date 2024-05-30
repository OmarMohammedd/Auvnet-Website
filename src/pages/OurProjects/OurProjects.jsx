// @ts-nocheck
import "./OurProjects.scss";
// @ts-ignore

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { motion } from "framer-motion";
import { useGetAllProjectsQuery } from "../../store/projects/ProjectsApiSlice";
import OurProjectsLeftSide from "../../components/ourProjects/OurProjectsLeftSide";
import MainContent from "../../components/ourProjects/MainContent";
import { useState } from "react";
import Noprojects from "../../pages/NoProjects/Noprojects";
import OurProjectsSm from "../../components/ourProjects/OurProjectsSm";
import HtmlHead from "../../components/HtmlHead/HtmlHead";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import { Spinner } from "react-bootstrap";
import { IoIosArrowRoundDown, IoIosArrowRoundUp } from "react-icons/io";
import { showFunction } from "../../utils/motion";
import UniLoading from "../../components/loading/Loading";

function OurProjects() {
  const { t, i18n } = useTranslation();
  const title = "OurProjects | AUVNET";
  const description = "OurProjects | AUVNET";
  const location = useLocation();
  const [index, setIndex] = useState(location.state || 0);
  const { data, isLoading } = useGetAllProjectsQuery();
  const [showDesc, setShowDesc] = useState(true);
  localStorage.setItem("services-visited", "false");
  return (
    <>
      <HtmlHead title={title} description={description}>
        <meta property="og:site_name" content="AUVNET Our Projects" />
        <meta
          property="og:title"
          content="AUVNET is a leading technology company that specializes in providing comprehensive design services and software development solutions"
        />
        <meta
          property="og:description"
          content="AUVNET is a leading technology company that specializes in providing comprehensive design services and software development solutions. With a strong focus on creativity, innovation, and technical expertise, we offer a wide range of services including UI/UX design, graphic design, logo design, AI development, website building, mobile app development, app security, desktop app development, and more. Our mission is to empower businesses and individuals with cutting-edge technology and captivating designs that drive growth and success in the digital world.
      "
        />
        <meta
          property="og:image"
          itemProp="image"
          content="https://media.auvnet.com/auvnet/AUVNET%20Logo%20B.png"
        />
        <meta
          property="og:url"
          content="https://AUVNET.com/projects/our-projects"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </HtmlHead>
      {isLoading ? (
              <UniLoading />

      ) : (
        <motion.div  variants={showFunction(0, 1)}
        initial="hidden"
        whileInView={"show"} >
          <div className="sm-screen-hide">
            {data?.data?.length > 0 ? (
              <div
                className="our-projects"
                style={{
                  backgroundImage: `linear-gradient(to right, ${data?.data[index]?.color} -50%, rgba(175, 25, 94, 0) 50%, var(--background-color) 100%)`,
                }}
              >
                <div className="overlay"></div>

                <div className="content main-container">
                  <OurProjectsLeftSide
                    data={data?.data}
                    index={index}
                    setIndex={setIndex}
                  />

                  <MainContent index={index} data={data} showDesc={showDesc} />

                  <div className="last-right-side">
                    <div
                      className="about-this-project"
                      style={{
                        display: "flex",
                        gap: "2rem",
                        cursor: "initial",
                      }}
                    >
                      <div
                        onClick={() => setShowDesc((prev) => !prev)}
                        style={{
                          cursor: "pointer",
                          textDecoration: showDesc ? "none" : "underline",
                        }}
                      >
                        {i18n.language === "en" && "About this Project"}
                        {i18n.language === "ar" && "حول هذا المشروع"}
                      </div>

                      {!showDesc && (
                        <div>
                          <IoIosArrowRoundDown fontSize={"2rem"} />
                        </div>
                      )}
                      {!showDesc && <div>"{data?.data[index]?.subTitle}"</div>}
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <Noprojects />
            )}
          </div>

          <OurProjectsSm />
        </motion.div>
      )}
    </>
  );
}

export default OurProjects;
