import { IoIosClose } from "react-icons/io";
// @ts-ignore
import contactGif from "../../assets/contact.gif";
import { useTranslation } from "react-i18next";
function ContactSuccess({ setSuccess }) {
  const { t, i18n } = useTranslation();
  return (
    <>
      <div className="contact-overlay" onClick={() => setSuccess(false)}></div>
      <div className="contact-card">
        <IoIosClose
          fontSize="2rem"
          color="white"
          className="x-icon"
          onClick={() => setSuccess(false)}
        />
        <img
          src={contactGif}
          alt="gif"
          className=""
          style={{ height: "261.59px", width: "261.59px" }}
        />
        <div className="flex-1">
          {i18n.language === "en" &&
            '  Thank You , we will connect you as soon as possible'}
          {i18n.language === "ar" &&
            "شكرا لك، سوف نقوم بالتواصل معك في أقرب وقت ممكن"}
        </div>
      </div>
    </>
  );
}

export default ContactSuccess;
