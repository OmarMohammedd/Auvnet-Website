import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { showFunction } from "../../utils/motion";
import { useTranslation } from "react-i18next";

function SMservices() {
  const { t, i18n } = useTranslation();

  return (
    <motion.div
      variants={showFunction(0, 2)}
      initial="hidden"
      animate="show"
      className="sm-services-page"
    >
      <div className="container">
        <div className="custom-overlay"></div>
        <h1>{i18n.language === "en" ? "Services" : "الخدمات"}</h1>

        {i18n?.language === "en" ? (
          <p>
            our website offerings, we provide a range of technology services to
            help businesses and individuals achieve their goals. Our services
            include website design, development, software development,
            application development and more. Whether you need a responsive and
            user-friendly website, a custom software solution, or a mobile
            application, our team of skilled professionals is here to assist
            you.
          </p>
        ) : (
          <p>
            عروض موقعنا على الانترنت، ونحن نقدم مجموعة من الخدمات التقنية ل
            مساعدة الشركات والأفراد على تحقيق أهدافهم. خدماتنا تشمل تصميم مواقع
            الويب، وتطويرها، وتطوير البرمجيات، والتطبيقات التنمية وأكثر من ذلك.
            سواء كنت بحاجة إلى استجابة وسهلة الاستخدام موقع ويب، أو حل برمجي
            مخصص، أو تطبيق جوال، فريقنا من المهنيين المهرة هنا لمساعدتك.
          </p>
        )}
      </div>

      <div className="btns-software">
        <h3>
          {i18n.language === "en" ? "Software Development" : "تطوير البرمجيات"}
        </h3>
        <div>
          <Link className="development" to="Aiservice">
            {i18n.language === "en" ? "AI" : "الذكاء الاصطناعي"}
          </Link>
          <Link className="development" to="website">
            {i18n.language === "en" ? "Website" : "موقع الويب"}
          </Link>
          <Link className="development" to="mobileapp">
            {i18n.language === "en" ? "Mobile App" : "تطبيق الجوال"}
          </Link>
          <Link className="development" to="appsecure">
            {i18n.language === "en" ? "App Security" : "أمان التطبيق"}
          </Link>
          <Link className="development" to="desktopapp">
            {i18n.language === "en" ? "Desktop App" : "تطبيق سطح المكتب"}
          </Link>
        </div>
      </div>
      <div className="btns-design">
        <h3>{i18n.language === "en" ? "Design" : "التصميم"}</h3>
        <div>
          <Link to="uiux">
            {i18n.language === "en" ? "UIUX" : "واجهة المستخدم"}
          </Link>
          <Link to="logo">{i18n.language === "en" ? "LOGO" : "الشعار"}</Link>
          <Link to="graphicdesign">
            {i18n.language === "en" ? "Graphic Design" : "تصميم جرافيكي"}
          </Link>
        </div>
      </div>

      <div className="container">
        <Link to="make-your-magic">
          {i18n.language === "en" ? (
            <>
              Make Your Magic <span>Select a multiple Services </span>
            </>
          ) : (
            <>
              اصنع سحرك <span>اختر خدمات متعددة</span>
            </>
          )}
        </Link>

        <div className="links d-flex align-items-center justify-content-around">
          <Link to="/projects">
            {i18n.language === "en" ? "Projects" : "المشاريع"}
          </Link>
          <Link to="/courses">
            {i18n.language === "en" ? "Courses" : "دورات تدريبية"}
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

export default SMservices;
