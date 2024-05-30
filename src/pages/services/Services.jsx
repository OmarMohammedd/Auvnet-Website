import { Link, useNavigate } from "react-router-dom";
import "./services.scss";
import { RiInstagramFill } from "react-icons/ri";
import { FaSnapchatGhost } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import {
  FaFacebook,
  FaLinkedin,
  FaTiktok,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa6";
// @ts-ignore
import designPhoto from "../../assets/design-card-section.png";
// @ts-ignore
import sofrWarePhoto from "../../assets/development-services-card.png";
import { IoLogoWhatsapp } from "react-icons/io";
import { useEffect, useRef, useState } from "react";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { motion } from "framer-motion";
import { bottomService, leftService2, showFunction } from "../../utils/motion";
import SMservices from "./SMservices";
import { socialMediaLinks } from "../../utils/constants";
import { useServicesTrackingMutation } from "../../store/tracking/TrackingApiSlice";
import { useTranslation } from "react-i18next";
import HtmlHead from "../../components/HtmlHead/HtmlHead";
function Services() {
  const navigation = useNavigate();
  const swiperRef = useRef(null);
  const [showBottom , setshowBottom] = useState(false)
  const [showBackbround, setshowBackground] = useState(false);
  const handleNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const { t, i18n } = useTranslation();

  const handlePrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setshowBackground(true);
    }, 600);
  }, []);

  const [servicesTracking, { isSuccess }] = useServicesTrackingMutation();

  useEffect(() => {
    const tr = async () => {
      if (!localStorage.getItem("services-tracking")) {
        await servicesTracking({
          services: localStorage.getItem("ipAddress"),
        }).unwrap();
      }
    };

    tr();
  }, []);

  useEffect(() => {
    if (isSuccess) {
      localStorage.setItem("services-tracking", "true");
    }
  }, [isSuccess]);

  useEffect(() => {
    setshowBottom(true)
  } , [])
  return (
   <>
     <HtmlHead title={'Services | AUVNET'} description={'Services | AUVNET'}>
        <meta property="og:site_name" content="AUVNET Services" />
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
        <meta property="og:url" content="https://AUVNET.com/services" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </HtmlHead>
   
   <motion.div
      className="services"
      style={{ backgroundImage: !showBackbround && "none" }}
    >
      <div className="mobile-screen-hide">
        <div className="container">
          <div className="headings mb-3 d-flex align-items-center justify-content-between">
            <motion.h1
              variants={leftService2(0, 1, true)}
              initial="hidden"
              animate="show"
            >
              <span>{i18n.language === "en" ? "Services" : "الخدمات"}</span>
            </motion.h1>
            <motion.div
              variants={showFunction(0, 2)}
              initial="hidden"
              animate="show"
              className="btns-sections d-flex align-items-center gap-3"
            >
              <Link to="/contact">
                <>
                  {i18n.language === "en" ? (
                    <>
                      Click here to <span>Contact us fastest</span>
                    </>
                  ) : (
                    <>
                      انقر هنا للاتصال <span>بنا بشكل أسرع</span>
                    </>
                  )}
                </>
              </Link>
              <Link to="make-your-magic">
                {i18n.language === "en" ? (
                  <>
                    Make Your Magic <span>Select a multiple Services </span>
                  </>
                ) : (
                  <>
                    اصنع سحرك <span>اختر خدمات متعددة</span>
                  </>
                )}
              </Link>
            </motion.div>
          </div>
        </div>
        <div className="main-services-content d-flex">
          <div
            className="left-side d-flex align-items-center justify-content-center gap-4"
            style={{ flex: 1 }}
          >
            <div>
              <motion.div
                variants={showFunction(0, 2)}
                initial="hidden"
                animate="show"
                className="icon"
                style={{ flexDirection: "column", gap: "1rem" }}
              >
                <a
                  target="_blank"
                  href={`${socialMediaLinks.instagram}/${socialMediaLinks.userName}`}
                >
                  <RiInstagramFill />
                </a>
                <a
                  target="_blank"
                  href={`${socialMediaLinks.snapchat}/${socialMediaLinks.userName}`}
                >
                  <FaSnapchatGhost />
                </a>
                <a
                  target="_blank"
                  href={`${socialMediaLinks.twitter}/${socialMediaLinks.userName}`}
                >
                  <FaTwitter />
                </a>
                <a
                  target="_blank"
                  href={`${socialMediaLinks.tiktok}/${socialMediaLinks.userName}`}
                >
                  <FaTiktok />
                </a>
                <a
                  target="_blank"
                  href={`${socialMediaLinks.youtube}/${socialMediaLinks.userName}`}
                >
                  <FaYoutube />
                </a>
                <a
                  target="_blank"
                  href={`${socialMediaLinks.facebook}/${socialMediaLinks.userName}`}
                >
                  <FaFacebook />
                </a>
                <a
                  target="_blank"
                  href={`${socialMediaLinks.whatsapp}/${socialMediaLinks.whatssappNumber}`}
                >
                  <IoLogoWhatsapp />
                </a>
                <a
                  target="_blank"
                  href={`${socialMediaLinks.linkedin}/${socialMediaLinks.linkedInUserName}`}
                >
                  <FaLinkedin />
                </a>
              </motion.div>
            </div>
            <motion.div
              variants={leftService2(0, 1, true)}
              initial="hidden"
              animate="show"
              className="details"
            >
              <div>
                {i18n.language === "en" ? (
                  <>
                    our website offerings, we provide a range of technology
                    services to help businesses and individuals achieve their
                    goals.
                  </>
                ) : (
                  <>
                    في موقعنا الإلكتروني، نقدم مجموعة من الخدمات التكنولوجية
                    لمساعدة الشركات والأفراد على تحقيق أهدافهم
                  </>
                )}
              </div>
              <div>
                {i18n.language === "en" ? (
                  <>
                    Our services include website design, development, software
                    development, application development and more.
                  </>
                ) : (
                  <>
                    تشمل خدماتنا تصميم المواقع، وتطويرها، وتطوير البرمجيات،
                    وتطوير التطبيقات، والمزيد{" "}
                  </>
                )}
              </div>
              <div>
                {i18n.language === "en" ? (
                  <>
                    Whether you need a responsive and user-friendly website, a
                    custom software solution, or a mobile application,
                  </>
                ) : (
                  <>
                    سواء كنت بحاجة إلى موقع إلكتروني متجاوب وسهل الاستخدام، أو
                    حلاً برمجياً مخصصًا، أو تطبيقًا للجوال{" "}
                  </>
                )}
              </div>
              <div>
                {i18n.language === "en" ? (
                  <>our team of skilled professionals is here to assist you.</>
                ) : (
                  <>فريقنا المؤهل من المحترفين متواجد لمساعدتك </>
                )}
              </div>
            </motion.div>
          </div>
          <div className="right-side" style={{ flex: 1 }}>
            {/* <img src={ServiceImg} alt="" /> */}
          </div>
        </div>

        <motion.div
          initial="hidden"
          animate="show"
          style={{bottom:showBottom && 0}}
          className="bottom-content d-flex align-items-end mt-5"
        >
          <div className="left-side d-flex  flex-column" style={{ flex: 1 }}>
            <div className="arrows d-flex align-items-center gap-3 ">
              <span className="text-end" style={{ flex: 1 }}>
                {i18n.language === "en"
                  ? "Click to switch services categories"
                  : "انقر لتبديل فئات الخدمات"}
              </span>
              <div className="btns">
                <button onClick={handlePrev}>
                  {" "}
                  <GrFormPrevious fontSize={"4rem"} />{" "}
                </button>
                <button onClick={handleNext}>
                  <GrFormNext fontSize={"4rem"} />{" "}
                </button>
              </div>
            </div>
            <Swiper
              navigation={true}
              modules={[Navigation]}
              className="mySwiper"
              ref={swiperRef}
              speed={1000} // Adjust the speed of the transition animation (in milliseconds)
              effect="slide" // Set the type of transition effect
              loop={true}
            >
              <SwiperSlide>
                <div className="btns">
                  <h1>{i18n.language === "en" ? "Design" : "التصميم"}</h1>

                  <div>
                    <Link to="uiux">
                      {i18n.language === "en" ? "UIUX" : "واجهة المستخدم"}
                    </Link>
                    <Link to="logo">
                      {i18n.language === "en" ? "LOGO" : "الشعار"}
                    </Link>
                    <Link to="graphicdesign">
                      {i18n.language === "en"
                        ? "Graphic Design"
                        : "تصميم جرافيكي"}
                    </Link>
                  </div>
                </div>
                <img src={designPhoto} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <div className="btns">
                  <h1>
                    {i18n.language === "en"
                      ? "Software Development"
                      : "تطوير البرمجيات"}
                  </h1>

                  <div>
                    <Link className="development" to="Aiservice">
                      {i18n.language === "en" ? "AI" : "الذكاء الاصطناعي"}
                    </Link>
                    <Link className="development" to="website">
                      {i18n.language === "en" ? "Website" : "موقع الويب"}
                    </Link>
                    <Link className="development" to="mobileapp">
                      {i18n.language === "en" ? "Mobile App" : "تطبيق الجوال"}
                    </Link>
                    <Link className="development" to="appsecure">
                      {i18n.language === "en" ? "App Security" : "أمان التطبيق"}
                    </Link>
                    <Link className="development" to="desktopapp">
                      {i18n.language === "en"
                        ? "Desktop App"
                        : "تطبيق سطح المكتب"}
                    </Link>
                  </div>
                </div>
                <img src={sofrWarePhoto} alt="" />
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="right-side d-flex ">
            <div
              className="projects-card position-relative"
              onClick={() => navigation("/projects")}
            >
              <div className="service-card-overlay"></div>
              <h1>{i18n.language === "en" ? "Projects" : "المشاريع"}</h1>
            </div>
            <div
              className="courses-card position-relative"
              onClick={() => navigation("/courses")}
            >
              <div className="service-card-overlay"></div>
              <h1>{i18n.language === "en" ? "courses" : "دورات تدريبية"}</h1>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="mobile-screen-show">
        <SMservices />
      </div>
    </motion.div></>
  );
}

export default Services;
