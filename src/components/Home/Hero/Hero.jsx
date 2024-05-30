import "./Hero.scss";
import { motion } from "framer-motion";
// @ts-ignore
import img from "../../../assets/about-sec.svg";
// @ts-ignore
import { FaArrowUp } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { getStartedFunc } from "../../../utils/motion";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

function Hero() {
  const { t, i18n } = useTranslation();

  const [clicked, setClicked] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    if (clicked) {
      setTimeout(() => {
        navigate("/services");
      }, 1500);
    }
  }, [clicked]);
  return (
    <>
      <div className="hero">
        <motion.div
          className="overlay"
          variants={getStartedFunc(1.5)}
          initial="hidden"
          // @ts-ignore
          whileInView={clicked && "show"}
        ></motion.div>
        <div className="d-flex main-hero-dev ">
          <div className="content main-container">
            <h1>
              {i18n.language === "en" && "AUVNET"}
              {i18n.language === "ar" && "اوڤنيت"}
            </h1>
            <span>
              {i18n.language === "en" &&
                "Empowering the Future through Innovative Technology Solutions"}
              {i18n.language === "ar" &&
                "تمكين المستقبل من خلال حلول التكنولوجيا المبتكرة"}
            </span>
            <button onClick={() => setClicked(true)} className="main-btn">
              {i18n.language === "en" && "Get Started"}
              {i18n.language === "ar" && "ابدأ"}
            </button>
          </div>
        </div>
      </div>

      <div className={`about-us-sec ${i18n.language === "ar" && "isAr"}`}>
        <img
          src={img}
          loading="lazy"
          alt="about sec"
          className={`${i18n.language === "ar" && "isAr"}`}
        />
        <div className="main-container">
          <div className=" side d-flex align-items-center justify-conent-between">
            <div className="left-side">
              <h1>
                {i18n.language === "en" && "About"}
                {i18n.language === "ar" && "معلومات"}
                <span>{i18n.language === "en" ? " US" : " عنا"}</span>
              </h1>
              <p>
                {i18n.language === "en" &&
                  "Welcome to our specialized technology Website We are a company dedicated to providing a wide range of courses and services in various technological domains. Our mission is to empower individuals and businesses with the skills and solutions they need to thrive in the digital age."}
                {i18n.language === "ar" &&
                  "مرحبا بكم في موقعنا المتخصص بالتكنولوجيا نحن شركة مكرسة لتقديم مجموعة واسعة من الدورات والخدمات في المجالات التكنولوجية المختلفة. مهمتنا هي التمكين الأفراد والشركات بالمهارات والحلول التي لديهم بحاجة إلى الازدهار في العصر الرقمي."}
              </p>
            </div>
            <div className="right-side">
              <a href="#whyus">
                <div className="first-div">
                  {i18n.language === "en" && "Why Us ?"}
                  {i18n.language === "ar" && "لماذا نحن ؟"}
                </div>
                <div className="last-div">
                  <FaArrowUp />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
