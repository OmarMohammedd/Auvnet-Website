import "./website.css";
import { MdKeyboardArrowRight } from "react-icons/md";
import { motion } from "framer-motion";
import { leftService, rightService } from "../../utils/motion";
import { useState } from "react";
import ServiceForm from "../../components/formComponent/ServiceForm";
import { Link, useNavigate } from "react-router-dom";
import { BsLightningFill } from "react-icons/bs";
import backgroundImg from "../../assets/wepik-export-20240119094133UxUY 1.png";
import img_1 from "../../assets/_.png";
import img_2 from "../../assets/01.png";
import img_3 from "../../assets/_.png";
import img_4 from "../../assets/01.png";
import HtmlHead from "../../components/HtmlHead/HtmlHead";
import { useTranslation } from "react-i18next";

const Website = () => {
  const { t, i18n } = useTranslation();

  const title = "Services-Website";
  const description = "AUVNET";
  const navigate = useNavigate();
  const [submitService, setSubmitService] = useState(false);
  const [loading, setLoading] = useState(false);
  localStorage.setItem("services-visited", "true");
  return (
    <>
      <HtmlHead title={title} description={description}>
        <meta property="og:site_name" content="AUVNET Website" />
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
        <meta property="og:url" content="https://AUVNET.com/services/website" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </HtmlHead>
      <div className="uiux">
        <div className="main-container">
          <motion.div
            variants={leftService(0, 0.5)}
            initial="hidden"
            // @ts-ignore
            whileInView={"show"}
            viewport={{ once: true }}
            className="uiuxx_leftt"
          >

                <div className="background-service-txt uiux-service">
                <span>WE</span>
                <span>B</span>
              </div>
            <div className="ppaarent_ttopp_fformm">
              <h3>
                {i18n.language === "en" &&
                  "Request a Website Development service"}
                {i18n.language === "ar" && "اطلب خدمة تطوير المواقع"}
              </h3>
              <div className="pparrenn_bbuttonsss">
                <button className="ccontactt_bbuttonn">
                  <Link style={{ color: "#000" }} to="/contact">
                    {i18n.language === "en" && "Contact us"}
                    {i18n.language === "ar" && "اتصل بنا"}
                  </Link>
                </button>
                <button
                  className="sseendd_bbuttonn send-black-color"
                  onClick={() => setSubmitService(true)}
                  style={{
                    cursor: loading ? "not-allowed" : "pointer",
                    opacity: loading ? 0.5 : 1,
                  }}
                >
                  {i18n.language === "en" && "send"}
                  {i18n.language === "ar" && "ارسل"}
                </button>
              </div>
            </div>

            <ServiceForm
              setLoading={setLoading}
              type={["website"]}
              submitService={submitService}
              setSubmitService={setSubmitService}
            />
          </motion.div>
          <motion.div
            variants={rightService(0, 0.5)}
            initial="hidden"
            // @ts-ignore
            whileInView={"show"}
            viewport={{ once: true }}
            className="uiuxx_rightt"
          >
            <div className="image">
              <span className="card">
                <img className="top_left" src={img_1} alt="" />
                <img className="top_right" src={img_2} alt="" />
                <img className="bottom_left" src={img_3} alt="" />
                <img className="bottom_right" src={img_4} alt="" />
                <div className="overtop"></div>
                <div className="parent_custom_text">
                  <div className="custom-text">
                    {i18n.language === "en" && (
                      <>
                        <div>
                          <span>&lt;</span> Request it <br />
                          TAKE IT <span>&#47; </span>
                          <span>&gt;</span>
                        </div>
                        <p>
                          We offers You a Full-stack Website Development Service
                          that covers both front-end and back-end development.
                          This comprehensive solution ensures a visually
                          appealing and fully functional website.
                        </p>
                      </>
                    )}
                    {i18n.language === "ar" && (
                      <>
                        <div>
                          <span>&lt;</span> أطلبها <br />
                          خذها <span>&#47; </span>
                          <span>&gt;</span>
                        </div>
                        <p>
                          نحن نقدم لك خدمة تطوير مواقع الويب الكاملة التي يغطي
                          تطوير الواجهة الأمامية والخلفية. هذا الحل الشامل يضمن
                          جذابة بصريا وبشكل كامل موقع وظيفي
                        </p>
                      </>
                    )}
                  </div>
                  <img src={backgroundImg} alt="" />
                </div>
              </span>
              <div
                className="divv"
                onClick={() => setSubmitService(true)}
                style={{
                  cursor: loading ? "not-allowed" : "pointer",
                  opacity: loading ? 0.5 : 1,
                }}
              >
                <p>
                  {i18n.language === "en" && (
                    <>
                      SEND <br /> YOUR REQUEST
                    </>
                  )}
                  {i18n.language === "ar" && (
                    <>
                      أرسل <br /> طلبك الخاص لنا
                    </>
                  )}
                </p>
                <span>
                  <MdKeyboardArrowRight color="white" className="MdKeyboardArrowRight" />
                </span>
              </div>
              <div
                className="divv"
                style={{ cursor: "pointer" }}
              
              >
                <Link to="/contact">
                  {i18n.language === "en" && (
                    <>
                      <p>
                        Click here to <br /> Contact us fastest{" "}
                      </p>
                    </>
                  )}
                  {i18n.language === "ar" && (
                    <>
                      <p>
                        انقر هنا <br /> للاتصال بنا بشكل أسرع{" "}
                      </p>
                    </>
                  )}
                </Link>
                <span>
                  <Link to="/contact">
                    <BsLightningFill className="BsLightningFill" />
                  </Link>
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Website;
