// @ts-nocheck
// @ts-ignore
import { NavLink } from "react-router-dom";
// @ts-ignore
import img1 from "../../assets/first-details.svg";
// @ts-ignore
import img2 from "../../assets/second-details.svg";
// @ts-ignore
import img3 from "../../assets/third-details.svg";
// @ts-ignore
import logo from "../../assets/fourth-loaidng-img.png";
import { useTranslation } from "react-i18next";
import { socialMediaLinks } from "../../utils/constants";
import { RiInstagramFill } from "react-icons/ri";
import { FaFacebook, FaYoutube } from "react-icons/fa6";

function Details() {
  const { t, i18n } = useTranslation();
  return (
    <div className="details">
      <div className="main-container">
        <div className="ddd " style={{ minHeight: "450px" }}>
          <NavLink to="/">
            <div className="d-flex align-items-center details-head  gap-3">
              <img src={logo} alt="logo" className="logo"></img>
              <div className="logo-txt">
                {i18n.language === "en" && "AUVNET"}
                {i18n.language === "ar" && "أوفنيت"}
              </div>
            </div>
          </NavLink>
          <div className="paraphraph">
            {i18n.language === "en" && (
              <>
                We are web platform specializing in technology education. It
                offers programming, cyber security, and design courses along
                with interactive learning experiences and a supportive community{" "}
                <br />
                It's a hub for individuals looking to enhance their skills in
                various <br />
                tech fields.
              </>
            )}
            {i18n.language === "ar" && (
              <>
                نحن منصة ويب متخصصة في تعليم التكنولوجيا. فإنه يوفر دورات
                البرمجة والأمن السيبراني والتصميم إلى جانب الدورات التفاعلية
                تجارب <br /> التعلم ومجتمع داعم إنه مركز لـ الأفراد الذين
                يتطلعون إلى تعزيز <br /> مهاراتهم في مختلف مجالات التكنولوجيا
              </>
            )}
          </div>
          <div className="details-links d-flex gap-3">
            <a
              target="_blank"
              className="details-link"
              href={`${socialMediaLinks.instagram}/${socialMediaLinks.userName}`}
            >
              <RiInstagramFill fontSize={'1.4rem'} />
            </a>

            <a
              target="_blank"
              className="details-link"
              href={`${socialMediaLinks.youtube}/${socialMediaLinks.userName}`}
            >
              <FaYoutube fontSize={'1.4rem'} />
            </a>
            <a
              target="_blank"
              className="details-link"
              href={`${socialMediaLinks.facebook}/${socialMediaLinks.userName}`}
            >
              <FaFacebook fontSize={'1.4rem'} />
            </a>
          </div>
        </div>
        <img src={img1} alt="" className="first-img" />
        <img src={img2} alt="" className="second-img" />
        <img src={img3} alt="" className="third-img" />
      </div>
    </div>
  );
}

export default Details;
