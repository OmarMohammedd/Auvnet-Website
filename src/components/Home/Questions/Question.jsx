import { motion } from "framer-motion";
// @ts-ignore
import backgroundImg from "../../../assets/labTop.svg";
// @ts-ignore
import newBackgroundImg from "../../../assets/new-laptop-img.png";
import { useTranslation } from "react-i18next";

function Question() {
  const { t, i18n } = useTranslation();
  return (
    <div className="questions">
      <img
        src={newBackgroundImg}
        alt="backgournd img"
        className="lap-top-img"
      ></img>

      <div className="main-container">
        <div className="faq">
          <div className="spans">
            <div className="first-span"></div>
            <div className="second-span"></div>
            <div className="third-span"></div>
          </div>
          <div className="questions-txt">
            {i18n.language === "en" && "Questions"}
            {i18n.language === "ar" && "أسئلة"}
          </div>
          <div className="answers-txt">
            {i18n.language === "en" && "Answers"}
            {i18n.language === "ar" && "إجابات"}
          </div>
        </div>
        <div className=" main-cards" dir="auto">
          <motion.div
            whileHover={{
              y: 30,
              x: 30,
              rotate: -3,
              scale: 1.07,
              transition: { duration: 0.5 },
            }}
            className="first-card"
            style={{ flex: 3, zIndex: 0 }}
          >
            <div className="first-card-head">
              {i18n.language === "en" &&
                "Do you provide certificates upon course completion?"}
              {i18n.language === "ar" && "هل تقدمون شهادات عند انتهاء الدورة؟"}
            </div>
            <div className="first-card-content">
              {i18n.language === "en" &&
                "Yes, we provide certificates of completion for our courses.These certificates demonstrate your achievement and canbe shared on your professional profiles or included in your resume."}
              {i18n.language === "ar" &&
                "نعم، نحن نقدم شهادات إتمام دوراتنا تثبت الشهادات إنجازك ويمكن مشاركتها على جهازك الملفات الشخصية المهنية أو المدرجة في سيرتك الذاتية."}
            </div>
          </motion.div>
          <motion.div
            whileHover={{
              y: 30,
              x: 30,
              rotate: 3,
              scale: 1.07,
              transition: { duration: 0.5 },
            }}
            className="first-card"
            style={{ flex: 2, zIndex: 2 }}
          >
            <div className="first-card-head">
              {i18n.language === "en" &&
                "Can I interact with instructors and other learners?"}
              {i18n.language === "ar" &&
                "هل يمكنني التفاعل مع المدرسين والمتعلمين الآخرين؟"}
            </div>
            <div className="first-card-content">
              {i18n.language === "en" &&
                "Yes, we encourage interaction between instructors and learners. Our learning platform includes discussion boards and forums where you can askquestions, seek clarification."}
              {i18n.language === "ar" &&
                "نعم، نحن نشجع التفاعل بين المعلمين والمتعلمين. تشتمل منصة التعلم الخاصة بنا على لوحات مناقشة ومنتديات حيث يمكنك طرح الأسئلة وطلب التوضيح."}
            </div>
          </motion.div>
        </div>
        <div className=" main-cards" dir="auto">
          <motion.div
            whileHover={{
              y: 30,
              x: 30,
              rotate: -3,
              scale: 1.07,
              transition: { duration: 0.5 },
            }}
            className="first-card"
            style={{ flex: 2 }}
          >
            <div className="first-card-head">
              {i18n.language === "en" &&
                "Are there any prerequisites for availing your technology services?"}
              {i18n.language === "ar" &&
                "هل هناك أي شروط مسبقة للاستفادة من خدمات التكنولوجيا الخاصة بك؟"}
            </div>
            <div className="first-card-content">
              {i18n.language === "en" &&
                "The prerequisites for our technology services depend on the specific project requirements. Our team will work closely with you to understand your needs and determine the necessary prerequisites for a successful collaboration. "}
              {i18n.language === "ar" &&
                "نعم، نحن نقدم شهادات إتمام دوراتنا. تثبت هذه الشهادات إنجازك ويمكن مشاركتها في ملفاتك الشخصية المهنية أو تضمينها في سيرتك الذاتية."}
            </div>
          </motion.div>
          <motion.div
            whileHover={{
              y: 30,
              x: 30,
              rotate: -3,
              scale: 1.07,
              transition: { duration: 0.5 },
            }}
            className="first-card"
            style={{ flex: 3, zIndex: 2 }}
          >
            <div className="first-card-head">
              {i18n.language === "en" &&
                "Can you customize your technology services according to my requirements?"}
              {i18n.language === "ar" &&
                "هل يمكنك تخصيص خدمات التكنولوجيا الخاصة بك وفقًا لمتطلباتي؟"}
            </div>
            <div className="first-card-content">
              {i18n.language === "en" &&
                "Absolutely! We understand that every business is unique, and we are committed to providing customized technology solutions. Our team will work closely with you to understand your specific requirements and develop a solution that aligns with your goals and objectives."}
              {i18n.language === "ar" &&
                "قطعاً! نحن ندرك أن كل عمل تجاري فريد من نوعه، ونحن ملتزمون بتقديم حلول تقنية مخصصة. سيعمل فريقنا معك بشكل وثيق لفهم متطلباتك المحددة وتطوير حل يتوافق مع أهدافك وغاياتك."}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Question;
