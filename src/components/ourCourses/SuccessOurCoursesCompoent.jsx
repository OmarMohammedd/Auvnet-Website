// @ts-ignore
import thanksImg from "../../assets/thanks.gif";
import { useTranslation } from 'react-i18next';



function SuccessOurCoursesCompoent() {
  const { t, i18n } = useTranslation();

  return (
    <div className="success-our-courses-component">
      <img  src={thanksImg} alt="thanks img" />
      <div className="success-div">
      {i18n.language === "en" && "Thank You We will respond as soon as possible"}
      {i18n.language === "ar" && "شكرا لك سوف نقوم بالرد في أقرب وقت ممكن"}
        
      </div>
    </div>
  );
}

export default SuccessOurCoursesCompoent;
