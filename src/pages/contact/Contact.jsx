import { useEffect, useState } from "react";
import ContactSuccess from "../../components/contactSuccess/ContactSuccess";
import "./contact.css";
import { useSendContactMutation } from "../../store/chatBoot/ChatBotApiSlice";
import { toast } from "react-toastify";
import HtmlHead from "../../components/HtmlHead/HtmlHead";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { leftService, rightService } from "../../utils/motion";
import { socialMediaLinks } from "../../utils/constants";
// @ts-ignore
import getInTouch from "../../assets/en-contact.svg";
// @ts-ignore
import contactAr from "../../assets/new-contact.png";
import {
  FaFacebook,
  FaLinkedin,
  FaTiktok,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa6";
import { FaSnapchatGhost } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { IoLogoWhatsapp } from "react-icons/io";
import UniLoading from "../../components/loading/Loading";
const Contact = () => {
  const { t, i18n } = useTranslation();

  const title = "Contact | AUVNET";
  const description = "Contact | AUVNET";

  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    wPhone: "",
    phone: "",
    email: "",
    description: "",
  });
  const [sendContact, { isSuccess, isLoading, error, isError }] =
    useSendContactMutation();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    if (
      formData?.name !== "" &&
      formData?.wPhone !== "" &&
      formData?.email !== ""
    ) {
      await sendContact({
        data: {
          messageObj: {
            name: formData?.name,
            wPhone: formData?.wPhone,
            phone: formData?.phone,
            email: formData?.email,
            description: formData?.description,
          },
        },
      }).unwrap();
    } else {
      toast.error("name, whatsapp number, email fileds  is required");
    }
  };

  useEffect(() => {
    if (isSuccess) {
      setFormData({
        name: "",
        wPhone: "",
        phone: "",
        email: "",
        description: "",
      });
      setSuccess(true);
    }
    if (isError) {
      // @ts-ignore
      toast.error(error?.data?.error);
    }
  }, [isSuccess, isError]);
  localStorage.setItem("services-visited", "false");

  return (
    <>
      <HtmlHead title={title} description={description}>
        <meta property="og:site_name" content="AUVNET Contact" />
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
        <meta property="og:url" content="https://AUVNET.com/contact" />

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </HtmlHead>
      {success && <ContactSuccess setSuccess={setSuccess} />}
      {isLoading ? (
        <UniLoading />
      ) : (
        <>
          {" "}
          <div className="contact">
            <div className="main-container">
              {i18n.language === "en" ? (
                <motion.div
                  variants={leftService(0, 0.5)}
                  initial="hidden"
                  whileInView={"show"}
                  className="left-contact "
                >
                  <div className="getInTouchImg">
                    <img src={getInTouch} className="getInTouchImg" alt="" />
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  variants={leftService(0, 0.5)}
                  initial="hidden"
                  whileInView={"show"}
                  className="left-contact "
                >
                  <div className="getInTouchImg">
                    <div className="img_1"></div>
                    <img src={contactAr} className="getInTouchImg" alt="" />
                  </div>
                </motion.div>
              )}

              <motion.div
                variants={rightService(0, 0.5)}
                initial="hidden"
                whileInView={"show"}
                className="right-contact"
              >
                <form onSubmit={handleSubmit}>
                  <div className="input_1">
                    <input
                      required
                      type="text"
                      placeholder={
                        i18n.language === "en"
                          ? "Enter your full name"
                          : "  اكتب اسمك "
                      }
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                    <div className="dot"></div>
                  </div>
                  <div className="input_3">
                  <input
                      style={{
                        marginRight: "2rem",
                        borderBottom: "1px solid #fff",
                        opacity: "0.6",
                      }}
                      type="text"
                      placeholder={
                        i18n.language === "en"
                          ? "Enter your phone number with country code"
                          : "أدخل رقم هاتفك مع رمز البلد"
                      }
                      id="name"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                    <div className="dot"></div>
                  </div>
                  <div className="input_3">
                  <input
                      style={{
                        marginRight: "1rem",
                        borderBottom: "1px solid #fff",
                        opacity: "0.6",
                      }}
                      required
                      type="text"
                      placeholder={
                        i18n.language === "en"
                          ? "Enter your WhatsApp number with country code"
                          : "أدخل رقم واتساب الخاص بك مع رمز البلد"
                      }
                      id="name"
                      name="wPhone"
                      value={formData.wPhone}
                      onChange={handleChange}
                    />
                    <div className="dot"></div>
                  </div>
                  <div className="input_3">
                    <input
                      type="email"
                      placeholder={
                        i18n.language === "en"
                          ? "Enter your email address "
                          : "عنوان البريد الإلكتروني"
                      }
                      id="name"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                    <div className="dot"></div>
                  </div>
                  <div className="input_3">
                    <input
                      type="text"
                      placeholder={
                        i18n.language === "en"
                          ? "Provide a brief description"
                          : "قدم وصفا موجزا"
                      }
                      id="name"
                      name="description"
                      value={formData.description}
                      onChange={handleChange}
                    />
                    <div className="dot"></div>
                  </div>
                  <svg
                    style={{
                      cursor: isLoading ? "not-allowed" : "pointer",
                      opacity: isLoading ? 0.5 : 1,
                    }}
                    onClick={handleSubmit}
                    width="50"
                    height="50"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.0378 6.34317L13.6269 7.76069L16.8972 11.0157L3.29211 11.0293L3.29413 13.0293L16.8619 13.0157L13.6467 16.2459L15.0643 17.6568L20.7079 11.9868L15.0378 6.34317Z"
                      fill="currentColor"
                    />
                  </svg>
                </form>
              </motion.div>
            </div>
          </div>
          <div className="footer_contact">
            <div className="main-container">
              <div className="footer_left" style={{ flex: 1 }}>
                <h4>
                  {i18n.language === "en" && "Our Contacts"}
                  {i18n.language === "ar" && "لدينا اتصالات"}
                </h4>
                <p>SUPPORT@AUVNET.com</p>
                <span>(+971) 50 772 7199</span>
              </div>
              <div className="footer_left" style={{ flex: 2 }}>
                <h4>
                  {i18n.language === "en" && "Our Platforms"}
                  {i18n.language === "ar" && "منصاتنا"}
                </h4>

                <div className="icons">
                  <div className="icon">
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
                  </div>
                  <div className="follow">
                    <hr />
                    <p>
                      {i18n.language === "en" && "Follow Us"}
                      {i18n.language === "ar" && "تابعنا"}
                    </p>
                    <div className="dott"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Contact;
