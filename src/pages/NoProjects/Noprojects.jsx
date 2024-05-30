import "./Noprojects.css";
// @ts-ignore
import backgroundImg from "../../assets/Sad.png";
import { useTranslation } from 'react-i18next';

const Noprojects = () => {
  const { t, i18n } = useTranslation();



  return (
  <>
      <div className="noprojects">
        <div className="main-container">
          <div className="imag_ee">
            <img src={backgroundImg} alt="" />
          </div>
          <h1>
                
          {i18n.language === "en" && "No Projects added yet"}
                    {i18n.language === "ar" && "لم تتم إضافة أي مشاريع حتى الآن"}
          </h1>
          <div className="custom-gradient"></div>
          <div className="circle_1"></div>
          <div className="circle_2"></div>
          <div className="circle_3"></div>
          <div className="circle_4"></div>
        </div>
      </div>
  </>
  );
};

export default Noprojects;
