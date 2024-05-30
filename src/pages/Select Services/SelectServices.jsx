import { MdKeyboardArrowRight } from "react-icons/md";
import "./SelectServices.css";
import { motion } from "framer-motion";
import { leftService, rightService } from "../../utils/motion";
import { useEffect, useState } from "react";
import ServiceForm from "../../components/formComponent/ServiceForm";
import { BsLightningFill } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
// @ts-ignore
import backgroundImg from "../../assets/wonder-things-D8cpkEOUjz.png";
import HtmlHead from "../../components/HtmlHead/HtmlHead";
import { useTranslation } from "react-i18next";

const SelectServices = () => {
  const { t, i18n } = useTranslation();
  const title = "Services-selectService | AUVNET";
  const description = "Services-selectService | AUVNET";
  const navigate = useNavigate();
  const [services, setServices] = useState([]);
  const [submitService, setSubmitService] = useState(false);
  const [loading, setLoading] = useState(false);
  const [checkboxes, setCheckboxes] = useState({
    uiux: false,
    desktopApp: false,
    graphicDesign: false,
    website: false,
    logo: false,
    ai: false,
    mobileApp: false,
    other: false,
  });

  const handleChange = (e) => {
    const { id, checked } = e.target;
    setCheckboxes((prevCheckboxes) => ({
      ...prevCheckboxes,
      [id]: checked,
    }));
  };

  useEffect(() => {
    setServices(Object.keys(checkboxes).filter((id) => checkboxes[id]));
  }, [checkboxes]);
  localStorage.setItem("services-visited", "true");
  return (
    <>
      <HtmlHead title={title} description={description}>
        <meta property="og:site_name" content="AUVNET Selected Services" />
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
          content="https://AUVNET.com/services/selectservices"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </HtmlHead>
      <div className="uiuxx">
        <div className="main-container">
          <motion.div
            variants={leftService(0, 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true }}
            className="uiux_le"
          >
            <div className="pparent_ttopp_fformm">
              <h3>
                {i18n.language === "en" && "Select Services You Want"}
                {i18n.language === "ar" && "حدد الخدمات التي تريدها"}
              </h3>
              <div className="pparenn_bbuttonsss">
                <button className="ccontactt_bbuttonn">
                  <Link style={{ color: "#000" }} to="/contact">
                    {i18n.language === "en" && "Contact us"}
                    {i18n.language === "ar" && "اتصل بنا"}
                  </Link>
                </button>
                <button
                  className="ssendd_bbuttonn send-black-color"
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

            <form action="">
              <div className="parent_select">
                <div className="select_left">
                  <div className="select_group">
                    <input
                      checked={checkboxes.uiux}
                      onChange={handleChange}
                      type="checkbox"
                      id="uiux"
                    />
                    <label htmlFor="uiux">
                      {i18n.language === "en" && "UIUX"}
                      {i18n.language === "ar" && "واجهة المستخدم"}
                    </label>
                  </div>
                  <div className="select_group">
                    <input
                      checked={checkboxes.desktopApp}
                      onChange={handleChange}
                      type="checkbox"
                      id="desktopApp"
                    />
                    <label htmlFor="desktopApp">
                      {i18n.language === "en" && "Desktop App"}
                      {i18n.language === "ar" && "التطبيق سطح المكتب"}
                    </label>
                  </div>
                  <div className="select_group">
                    <input
                      type="checkbox"
                      checked={checkboxes.graphicDesign}
                      onChange={handleChange}
                      id="graphicDesign"
                    />
                    <label htmlFor="graphicDesign">
                      {i18n.language === "en" && "Graphic Design"}
                      {i18n.language === "ar" && "التصميم الجرافيكي"}
                    </label>
                  </div>
                  <div className="select_group">
                    <input
                      type="checkbox"
                      id="ai"
                      checked={checkboxes.ai}
                      onChange={handleChange}
                    />
                    <label htmlFor="ai">
                      {i18n.language === "en" && "AI"}
                      {i18n.language === "ar" && "الذكاء الاصطناعي"}
                    </label>
                  </div>
                </div>
                <div className="select_right">
                  <div className="select_group">
                    <input
                      type="checkbox"
                      id="website"
                      checked={checkboxes.website}
                      onChange={handleChange}
                    />
                    <label htmlFor="website">
                      {i18n.language === "en" && "Website"}
                      {i18n.language === "ar" && "موقع إلكتروني"}
                    </label>
                  </div>
                  <div className="select_group">
                    <input
                      type="checkbox"
                      id="logo"
                      checked={checkboxes.logo}
                      onChange={handleChange}
                    />
                    <label htmlFor="logo">
                      {i18n.language === "en" && "Logo Design"}
                      {i18n.language === "ar" && "تصميم شعار"}
                    </label>
                  </div>
                  <div className="select_group">
                    <input
                      type="checkbox"
                      id="mobileApp"
                      checked={checkboxes.mobileApp}
                      onChange={handleChange}
                    />
                    <label htmlFor="mobileApp">
                      {i18n.language === "en" && "Mobile App"}
                      {i18n.language === "ar" && "تطبيق الجوال"}
                    </label>
                  </div>
                  <div className="select_group">
                    <input
                      type="checkbox"
                      id="other"
                      checked={checkboxes.other}
                      onChange={handleChange}
                    />
                    <label htmlFor="other">
                      {i18n.language === "en" && "Other"}
                      {i18n.language === "ar" && "آخر"}
                    </label>
                  </div>
                </div>
              </div>
            </form>

            <ServiceForm
              setLoading={setLoading}
              type={services}
              submitService={submitService}
              setSubmitService={setSubmitService}
            />
          </motion.div>
          <motion.div
            variants={rightService(0, 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true }}
            className="uiux_ri"
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
                  <MdKeyboardArrowRight color="white" className="MdKeyboardArrowRight" />
                </span>
              </div>
              <div
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

export default SelectServices;
