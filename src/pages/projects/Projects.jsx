import "./Projects.scss";
// @ts-ignore
import projectImg from "../../assets/project-mon.svg";
// @ts-ignore
import secondMon from "../../assets/second-montain-project.svg";
import { BsArrowRight } from "react-icons/bs";
import { motion } from "framer-motion";
import {
  altProjectMontain,
  hideFunction,
  projectDescFunction,
  projectHeadingFunction,
  projectHeadingFunctionres,
  projectMontain,
  showFunction,
} from "../../utils/motion";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useProjectsTrackingMutation } from "../../store/tracking/TrackingApiSlice";
import { useTranslation } from "react-i18next";

import HtmlHead from "../../components/HtmlHead/HtmlHead";
import { Spinner } from "react-bootstrap";
// @ts-ignore
import brainImg from "../../assets/brain-projects-img.png";
import { IoIosArrowDown } from "react-icons/io";
import UniLoading from "../../components/loading/Loading";

function Projects() {
  const { t, i18n } = useTranslation();
  const [loaded, setLoaded] = useState(true);
  const [showBottomContent, setShowBottomContent] = useState(false);

  const title = "Projects | AUVNET";
  const description = "Projects | AUVNET";

  const navigate = useNavigate();
  const [clicked, setClicked] = useState(false);
  const [showTriangle, setShowTriangle] = useState(false);
  const [firstImg, setFirstImg] = useState(false);
  const [secondImg, setSecondImg] = useState(false);
  const [projectsTracking, { isSuccess }] = useProjectsTrackingMutation();

  useEffect(() => {
    if (clicked) {
      setTimeout(() => {
        setShowTriangle(true);
      }, 1000);
    }
  }, [clicked]);

  useEffect(() => {
    const tr = async () => {
      if (!localStorage.getItem("projects-tracking")) {
        await projectsTracking({
          projects: localStorage.getItem("ipAddress"),
        }).unwrap();
      }
    };

    tr();
  }, []);

  useEffect(() => {
    if (isSuccess) {
      localStorage.setItem("projects-tracking", "true");
    }
  }, [isSuccess]);
  localStorage.setItem("services-visited", "false");

  useEffect(() => {
    if (firstImg && secondImg) {
      setLoaded(false);
    }
  }, [firstImg, secondImg]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <HtmlHead title={title} description={description}>
        <meta property="og:site_name" content="AUVNET Projects" />
        <meta
          property="og:title"
          content="AUVNET is a leading technology company that specializes in providing comprehensive design services and software development solutions"
        />
        <meta
          property="og:description"
          content="AUVNET is a leading technology company that specializes in providing comprehensive design services and software development solutions. With a strong focus on creativity, innovation, and technical expertise, we offer a wide range of services including UI/UX design, graphic design, logo design, AI development, website building, mobile app development, app security, desktop app development, and more. Our mission is to empower businesses and individuals with cutting-edge technology and captivating designs that drive growth and success in the digital world."
        />
        <meta
          property="og:image"
          itemProp="image"
          content="https://media.auvnet.com/auvnet/AUVNET%20Logo%20B.png"
        />
        <meta property="og:url" content="https://AUVNET.com/projects" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </HtmlHead>
      {loaded && <UniLoading />}

      <div
        style={{
          opacity: loaded ? 0 : 1,
          backgroundColor: loaded && "#202020",
        }}
      >
        <div className="projects-section">
          <motion.div
            variants={showFunction(1, 2.5)}
            initial="hidden"
            animate={clicked ? "show" : "hidden"}
            className="triangle"
          >
            <p>
              {i18n.language === "en" &&
                "Join Us and CASHBACK 50$ FOR YOUR FIRIST SERVICE"}
              {i18n.language === "ar" &&
                "انضم إلينا واحصل على استرداد نقدي بقيمة 50 دولارًا مقابل خدمتك الأولى"}
            </p>
            <button onClick={() => navigate("/services")}>
              {i18n.language === "en" && "SERVICE"}
              {i18n.language === "ar" && "خدمة"}
            </button>
          </motion.div>
          <motion.img
            loading="lazy"
            className="mon-image"
            src={projectImg}
            alt="project img"
            variants={projectMontain(0, 2.5)}
            onLoad={() => setFirstImg(true)}
            initial="hidden"
            animate={clicked ? "show" : "hidden"}
          />
          <motion.img
            loading="lazy"
            variants={altProjectMontain(0, 3)}
            initial="hidden"
            onLoad={() => setSecondImg(true)}
            animate={clicked ? "show" : "hidden"}
            className="second-mont"
            src={secondMon}
            alt="second"
          />
          <div className="content-txt">
            <motion.h1
              variants={
                window.innerWidth > 768
                  ? projectHeadingFunction(0, 3)
                  : projectHeadingFunctionres(0, 3)
              }
              initial="hidden"
              animate={clicked ? "show" : "hidden"}
            >
              {i18n.language === "en" && "Our initial Projects"}
              {i18n.language === "ar" && "مشاريعنا الأولية"}
            </motion.h1>
            <motion.button
              variants={hideFunction(0, 3)}
              initial="hidden"
              animate={clicked ? "show" : "hidden"}
              onClick={() => setClicked(true)}
              className="main-btn hovered-btn"
            >
              {i18n.language === "en" && "See our projects"}
              {i18n.language === "ar" && "انظر مشاريعنا"}
            </motion.button>
          </div>
          <motion.div
            variants={projectDescFunction(3, 1)}
            initial="hidden"
            animate={clicked ? "show" : "hidden"}
            className="txt-details main-container"
          >
            {i18n.language === "en" &&
              "We take pride in our diverse portfolio of successful projects. Our team has worked on a wide range of exciting ventures, including website development for e-commerce businesses, mobile app development for startups, and software solutions for enterprise clients. Each project is approached with a focus on understanding our clients' unique needs and delivering tailored solutions that exceed their expectations. We are committed to staying at the forefront of technology trends and leveraging the latest tools and frameworks to create innovative and cutting-edge projects."}
            {i18n.language === "ar" &&
              "نحن نفخر بمحفظتنا المتنوعة من المشاريع الناجحة. لقد عمل فريقنا على مجموعة واسعة من المشاريع المثيرة، بما في ذلك تطوير مواقع الويب لشركات التجارة الإلكترونية، وتطوير تطبيقات الهاتف المحمول للشركات الناشئة، وحلول البرامج لعملاء المؤسسات. يتم التعامل مع كل مشروع مع التركيز على فهم الاحتياجات الفريدة لعملائنا وتقديم حلول مخصصة تتجاوز توقعاتهم. نحن ملتزمون بالبقاء في طليعة اتجاهات التكنولوجيا والاستفادة من أحدث الأدوات والأطر لإنشاء مشاريع مبتكرة ومتطورة"}
          </motion.div>
          <motion.button
            onClick={() => navigate("/projects/our-projects")}
            variants={showFunction(0, 3)}
            initial="hidden"
            animate={clicked ? "show" : "hidden"}
            className="main-btn details-btn"
            style={{zIndex:clicked ? 124 : 122}}
          >
            {i18n.language === "en" && "See Our Projects"}
            {i18n.language === "ar" && "انظر مشاريعنا"}
            <BsArrowRight fontSize="2rem" style={{ marginLeft: "0.4rem" }} />
          </motion.button>

          {!loaded && (
            <>
              <motion.div
                variants={hideFunction(0, 3)}
                initial="hidden"
                animate={clicked ? "show" : "hidden"}
                className="arrow"
                style={{ bottom: showBottomContent && "10px" }}
                onClick={() => setShowBottomContent((prev) => !prev)}
              >
                <IoIosArrowDown
                  style={{
                    transform: showBottomContent
                      ? "rotate(180deg)"
                      : "rotate(0)",
                  }}
                  color="white"
                  fontSize={"1.6rem"}
                />
              </motion.div>

              <motion.div
                variants={hideFunction(0, 3)}
                initial="hidden"
                style={{ bottom: showBottomContent && "-268px" }}
                animate={clicked ? "show" : "hidden"}
                className="project-bottom-content d-flex align-items-end"
              >
                <div
                  className="left-side d-flex align-items-center  justify-content-center"
                  style={{ flex: 1 }}
                >
                  {i18n.language === "en" ? (
                    <div>
                      <span>Projects</span> are the playgrounds of the
                      <span> brain</span>, where creativity thrives and
                      innovation blossoms.
                    </div>
                  ) : (
                    <div>
                      <span>المشاريع</span> هي الملاعب
                      <span> للعقل،</span> حيث تزدهر الإبداع وتتفتح الابتكارات
                    </div>
                  )}
                  <img src={brainImg} alt="" />
                </div>
                <div className="right-side d-flex ">
                  <div
                    className="projects-card position-relative"
                    onClick={() => navigate("/services")}
                  >
                    <div className="service-card-overlay"></div>
                    {i18n.language === "en" ? (
                      <h1>Services</h1>
                    ) : (
                      <h1>الخدمات</h1>
                    )}
                  </div>
                  <div
                    className="courses-card position-relative"
                    onClick={() => navigate("/courses")}
                  >
                    <div className="service-card-overlay"></div>
                    {i18n.language === "en" ? (
                      <h1>Courses</h1>
                    ) : (
                      <h1>الدورات</h1>
                    )}
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default Projects;
