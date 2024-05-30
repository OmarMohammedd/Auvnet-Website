import SuccessOurCoursesCompoent from "../../components/ourCourses/SuccessOurCoursesCompoent";
// dddddddddd
import MainOurCoursesComponent from "../../components/ourCourses/MainContent";
import "./programming.css";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import HtmlHead from "../../components/HtmlHead/HtmlHead";
import { useTranslation } from "react-i18next";
// @ts-ignore
import firstImg from "../../assets/proammingMask.png";
// @ts-ignore
import secondImg from "../../assets/frontEndMask.png";
// @ts-ignore
import thirdImg from "../../assets/FrontEndMask1.png";
// @ts-ignore
import fourthImg from "../../assets/pythonMask.png";
// @ts-ignore
import fifthImg from "../../assets/aiMask.png";
// @ts-ignore
import sixImg from "../../assets/uiuxMask.png";
import { ourCourseDescription } from "../../utils/constants";

const Programming_1 = () => {
  const { t, i18n } = useTranslation();

  const [backImg, setBackImg] = useState(firstImg);
  const [courseTitle, setCourseTitle] = useState({
    en: "Progamming",
    ar: "البرمجه",
  });
  const title = "Our-courses | AUVNET";
  const description = "Our-courses | AUVNET";

  const [success, setSuccess] = useState(false);
  const location = useLocation();
  localStorage.setItem("services-visited", "false");
  useEffect(() => {
    switch (location.state) {
      case "Programming":
        setBackImg(firstImg);
        setCourseTitle({
          en: "Progamming",
          ar: "البرمجه",
        });

        break;

      case "Back-End":
        setBackImg(secondImg);

        setCourseTitle({
          en: "Back-End",
          ar: "الباك اند",
        });

        break;
      case "Front-End":
        setBackImg(thirdImg);
        setCourseTitle({
          en: "Front-End",
          ar: "الفرونت اند",
        });
        break;
      case "Python":
        setBackImg(fourthImg);
        setCourseTitle({
          en: "Python",
          ar: "بايثون",
        });
        break;
      case "AI Technology":
        setBackImg(fifthImg);
        setCourseTitle({
          en: "AI Technology",
          ar: "تكنولوجيا الذكاء الاصطناعي",
        });
        break;
      case "UIUX":
        setBackImg(sixImg);   setCourseTitle({
          en: "UIUX",
          ar: "واجهة المستخدم ",
        });
        break;

      default:
        setBackImg(firstImg);
        setCourseTitle({
          en: "Back-End",
          ar: "الباك اند",
        });
        
    }
  }, [location?.state]);

  return (
    <>
      <HtmlHead title={title} description={description}>
        <meta property="og:site_name" content="AUVNET Our Courses" />
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
          content="https://AUVNET.com/courses/our-courses"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </HtmlHead>
      <div className="programming">
        <div
          className="programming_top"
          style={{ backgroundImage: `url(${backImg})` }}
        >
          <h1>
            {" "}
            {(i18n.language === "en" && courseTitle?.en) || ""}
            {(i18n.language === "ar" && courseTitle?.ar) || ""}
          </h1>
          <p>
            {i18n.language === "en" &&
              "please fill your personal details and send your Request to get ourcourse"}
            {i18n.language === "ar" &&
              "يرجى ملء بياناتك الشخصية وإرسال طلبك الخاص لنا للحصول على الدورة التدريبية لدينا"}
          </p>
        </div>
        <div className="main-container">
          {success ? (
            <SuccessOurCoursesCompoent />
          ) : (
            <MainOurCoursesComponent
              mainDescription={ourCourseDescription[location.state] || ""}
              setSucess={setSuccess}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default Programming_1;
