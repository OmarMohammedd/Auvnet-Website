import "./uiuxP_1.css";
import { MdKeyboardArrowRight } from "react-icons/md";
import { motion } from "framer-motion";
import { leftService, rightService } from "../../utils/motion";
import { useState } from "react";
import ServiceForm from "../../components/formComponent/ServiceForm";
import { BsLightningFill } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
// @ts-ignore
import backgroundImg from "../../assets/giphy 2.png";
import { useTranslation } from "react-i18next";
import HtmlHead from "../../components/HtmlHead/HtmlHead";
import BottomSheet from "../../components/formComponent/BottomSheetForm";

const Uiux_1 = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const title = "Services-uiux | AUVNET";
  const description = "Services-uiux | AUVNET";

  const [submitService, setSubmitService] = useState(false);
  const [loading, setLoading] = useState(false);
  localStorage.setItem("services-visited", "true");
  return (
    <>
      <HtmlHead title={title} description={description}>
        <meta property="og:site_name" content="AUVNET UIUX" />
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
        <meta property="og:url" content="https://AUVNET.com/services/uiux" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </HtmlHead>
      <div className="uiux">
        <div className="main-container">
          <motion.div
            variants={leftService(0, 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true }}
            className="uiux_left"
            style={{ position: "relative" }}
          >
            <div className="background-service-txt uiux-service">
              <span>UI</span>
              <span>UX</span>
            </div>
            <div className="parent_top_form ">
              <h3>
                {i18n.language === "en" && "Request a UI/UX service"}
                {i18n.language === "ar" && "اطلب خدمة واجهة المستخدم"}
              </h3>
              <div className="parent_buttonss">
                <button className="contact_button">
                  <Link style={{ color: "#000" }} to="/contact">
                    {i18n.language === "en" && "Contact us"}
                    {i18n.language === "ar" && "اتصل بنا"}
                  </Link>
                </button>
                <button
                  className="send_button send-black-color"
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
            <div>
              <ServiceForm
                setLoading={setLoading}
                type={["uiux"]}
                submitService={submitService}
                setSubmitService={setSubmitService}
              />
            </div>
          </motion.div>
          <motion.div
            variants={rightService(0, 0.5)}
            initial={"hidden"}
            // @ts-ignore
            whileInView={"show"}
            viewport={{ once: true }}
            className="uiux_right"
          >
            <div className="image">
              <img src={backgroundImg} alt="" />
              <div
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
                  <MdKeyboardArrowRight
                    color="white"
                    className="MdKeyboardArrowRight"
                  />
                </span>
              </div>

              <div style={{ cursor: "pointer" }}>
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

export default Uiux_1;
