import React from "react";
import { IoIosArrowUp } from "react-icons/io";
import { BsArrow90DegDown } from "react-icons/bs";
import { motion, useAnimation } from "framer-motion";
import {
  hideFunction,
  serivicesOpacity,
  servicesBackground,
  displayFunc,
  slideInServices,
  showFunction,
} from "../../utils/motion";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// @ts-ignore
import backgroundImg from "../../assets/pexels-xi-xi-3043424 1.png";
import { useServicesTrackingMutation } from "../../store/tracking/TrackingApiSlice";
import { useTranslation } from "react-i18next";

function MainSection() {
  const userAgent = navigator.userAgent;
  const isMobile =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      userAgent
    );
  const { t, i18n } = useTranslation();
  const [showMainFunc, setshowMainFunc] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isHoveredSecond, setIsHoveredSecond] = useState(false);
  const [clicked, setClicked] = useState(false);
  const navigate = useNavigate();
  const [isAnimating, setIsAnimating] = useState(false);
  const [serviceSection, setServiceSection] = useState("uiux");
  const handleButtonClick = () => {
    handleGoToServiceSection("appsecure");
  };
  const isSmallScreen = window.innerWidth < 820;

  const [servicesTracking, { isSuccess }] = useServicesTrackingMutation();

  useEffect(() => {
    if (clicked) {
      setTimeout(() => {
        navigate(`/services/${serviceSection}`);
      }, 2000);
    }
  }, [clicked]);

  const handleGoToServiceSection = (service) => {
    setServiceSection(service);
    setClicked(true);
  };
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
    setTimeout(() => {
      setshowMainFunc(true);
    }, 1000);
  }, []);



  return (
    <div style={{background:'#202020' , zIndex:-1 , position:'relative'}}>
      <motion.div
        variants={showFunction(0, 1)}
        initial="hidden"
        whileInView={"show"}
      >
        <div className="services">
          <motion.img
            variants={servicesBackground(1, 1)}
            initial="hidden"
            // @ts-ignore
            whileInView={clicked && "show"}
            className="background-img"
            src={backgroundImg}
            alt=""
          />
          <motion.div
            variants={slideInServices("up", "", 0, 1, false)}
            initial="hidden"
            // @ts-ignore
            whileInView={clicked && "show"}
            className="overlay"
          ></motion.div>
          <div className="main-container">
            <motion.div
              variants={serivicesOpacity(0.5, 0.5)}
              initial="hidden"
              // @ts-ignore
              whileInView={clicked && "show"}
              className="services_left"
            >
              <IoIosArrowUp size={35} className="IoIosArrowUp" />

              <h1>
                {i18n.language === "en" && "Services"}
                {i18n.language === "ar" && "الخدمات"}
              </h1>
            </motion.div>

            <div
              className="services_right"
              dir={i18n.language === "ar" ? "rtl" : "ltr"}
            >
              {/* <div className="customm_boxx"> */}
              <motion.div
                variants={hideFunction(0, 1)}
                initial="hidden"
                // @ts-ignore
                whileInView={clicked && "show"}
                className={` customm_boxx`}
              >
                <Link
                  style={{ color: "#ffffff", fontWeight: "700" }}
                  to="/contact"
                >
                  {i18n.language === "en" && "Click here to "}
                  {i18n.language === "ar" && "انقر هنا"}
                  {i18n.language === "en" && "Contact us fastest"}
                  {i18n.language === "ar" && "الاتصال بنا أسرع"}
                </Link>
              </motion.div>

              <motion.p
                variants={slideInServices("up", "", 0, 1, false)}
                initial="hidden"
                // @ts-ignore
                whileInView={clicked && "show"}
              >
                {i18n.language === "en" &&
                  "Our website offerings, we provide a range of technology services to help businesses and individuals achieve their goals. Our services include website design, development, software development, application development and more. Whether you need a responsive and user-friendly website, a custom software solution, or a mobile application, our team of skilled professionals is here to assist you."}
                {i18n.language === "ar" &&
                  "عروض موقعنا على الانترنت، ونحن نقدم مجموعة من الخدمات التقنية ل مساعدة الشركات والأفراد على تحقيق أهدافهم. خدماتنا تشمل تصميم مواقع الويب، وتطويرها، وتطوير البرمجيات، تطوير التطبيقات وأكثر من ذلك. سواء كنت بحاجة إلى استجابة و موقع ويب سهل الاستخدام، أو حل برمجي مخصص، أو هاتف محمول التطبيق، لدينا فريق من المهنيين المهرة هنا للمساعدة أنت"}
              </motion.p>
              <motion.div
                variants={serivicesOpacity(0.5, 0.5)}
                initial="hidden"
                // @ts-ignore
                whileInView={clicked && "show"}
                className="first-sec"
              >
                <div className="group_1">
                  <h4 className={`${isHovered && "active"}`}>
                    {i18n.language === "en" && "Design"}
                    {i18n.language === "ar" && "تصميم"}
                  </h4>
                  <div className="dynamic-txt">
                    <div
                      className={` d-flex gap-3 align-items-center justify-content-center `}
                    >
                      <motion.div>
                        {i18n.language === "en"
                          ? "choose design service you want"
                          : "اختر خدمة التصميم التي تريدها"}{" "}
                      </motion.div>
                    </div>
                  </div>
                </div>
                <div className="group_2">
                  <button
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    onClick={() => handleGoToServiceSection("uiux")}
                    className={` button`}
                  >
                    {i18n.language === "en" && "UIUX"}
                    {i18n.language === "ar" && "واجهة المستخدم"}
                  </button>
                  <button
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    onClick={() => handleGoToServiceSection("logo")}
                    className={` button`}
                  >
                    {i18n.language === "en" && "LOGO"}
                    {i18n.language === "ar" && "شعار"}
                  </button>
                  <button
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    onClick={() => handleGoToServiceSection("graphicdesign")}
                    className={`button`}
                  >
                    {i18n.language === "en" && "Graphic Design"}
                    {i18n.language === "ar" && "التصميم الجرافيكي"}
                  </button>
                </div>
              </motion.div>
              <motion.div
                variants={serivicesOpacity(0.5, 0.5)}
                initial="hidden"
                // @ts-ignore
                whileInView={clicked && "show"}
                className="second-sec"
              >
                <div className="group_3">
                  <h4 className={`${isHoveredSecond && "active"} `}>
                    {i18n.language === "en" && "Software Development"}
                    {i18n.language === "ar" && "تطوير البرمجيات"}
                  </h4>
                </div>
                <div className="group_4">
                  <button
                    onMouseEnter={() => setIsHoveredSecond(true)}
                    onMouseLeave={() => setIsHoveredSecond(false)}
                    onClick={() => handleGoToServiceSection("Aiservice")}
                    className={` button`}
                  >
                    {i18n.language === "en" && "AI"}
                    {i18n.language === "ar" && "الذكاء الاصطناعي"}
                  </button>
                  <button
                    onMouseEnter={() => setIsHoveredSecond(true)}
                    onMouseLeave={() => setIsHoveredSecond(false)}
                    onClick={() => handleGoToServiceSection("website")}
                    className={` button`}
                  >
                    {i18n.language === "en" && "Website"}
                    {i18n.language === "ar" && "موقع إلكتروني"}
                  </button>
                  <button
                    onMouseEnter={() => setIsHoveredSecond(true)}
                    onMouseLeave={() => setIsHoveredSecond(false)}
                    onClick={() => handleGoToServiceSection("mobileapp")}
                    className={` button`}
                  >
                    {i18n.language === "en" && "Mobile APP"}
                    {i18n.language === "ar" && "تطبيق الهاتف المحمول"}
                  </button>
                  <button
                    onMouseEnter={() => setIsHoveredSecond(true)}
                    onMouseLeave={() => setIsHoveredSecond(false)}
                    onClick={() => handleGoToServiceSection("desktopapp")}
                    className={` button`}
                  >
                    {i18n.language === "en" && "Desktop APP"}
                    {i18n.language === "ar" && "التطبيق سطح المكتب"}
                  </button>
                </div>
                <div className="group_5">
                  <button
                    onMouseEnter={() => setIsHoveredSecond(true)}
                    onMouseLeave={() => setIsHoveredSecond(false)}
                    onClick={!isSmallScreen ? () => handleButtonClick() : null}
                    className={` button`}
                  >
                    {isSmallScreen ? (
                      <Link
                        style={{ color: "#ffffff", fontWeight: "700" }}
                        to="/contact"
                      >
                        {i18n.language === "en" && "Contact us fastest"}
                        {i18n.language === "ar" && "الاتصال بنا أسرع"}
                      </Link>
                    ) : i18n.language === "en" ? (
                      "App Secure"
                    ) : (
                      "التطبيق آلامن"
                    )}
                  </button>
                  <div
                    className="div"
                    style={{ cursor: "pointer" }}
                    onMouseEnter={() => {
                      setIsAnimating(true);
                    }}
                    onMouseLeave={() => {
                      setIsAnimating(false);
                    }}
                    onClick={() => handleGoToServiceSection("make-your-magic")}
                  >
                    <motion.h5
                      animate={{ y: isAnimating ? 15 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      {i18n.language === "en" && "Make Your Magic"}
                      {i18n.language === "ar" && "اصنع سحرك"}
                    </motion.h5>
                    <div>
                      <motion.p
                        animate={{ y: isAnimating ? 15 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        {i18n.language === "en" && "Select a multiple Services"}
                        {i18n.language === "ar" && "حدد خدمات متعددة"}
                      </motion.p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
          <motion.div
            variants={serivicesOpacity(0.5, 0.5)}
            initial="hidden"
            // @ts-ignore
            whileInView={clicked && "show"}
            className="footer_services"
          ></motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default MainSection;
