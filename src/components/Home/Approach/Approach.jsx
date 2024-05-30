import React, { useState } from "react";
import { motion } from "framer-motion";
import { slideIn } from "../../../utils/motion";
import { useTranslation } from "react-i18next";

function Approach() {
  const { t, i18n } = useTranslation();
  const [hovered, setHoverd] = useState(false);
  return (
    <div className="approach" dir="auto">
      <div className="headings">
        <motion.div
          style={{ color: "white" }}
          variants={slideIn("left", "spring", 0.2, 1)}
          initial="hidden"
          whileInView={(e) => {
            setHoverd(true)
            return "show";
          }}
        >
          <div className="stroke-text">
            {i18n.language === "en" && "Our Approach"}
            {i18n.language === "ar" && "النهج المتبع"}
          </div>
        </motion.div>
        <div className={`head-text `}>
          {i18n.language === "en" && "Our Approach"}
          {i18n.language === "ar" && "النهج المتبع"}
        </div>
      </div>
      <div className="main-container">
        <p>
          {i18n.language === "en" &&
            "  We believe in a hands-on and practical approach to learning, problem-solving, and project execution.Our courses and services are designed to provide you with real-world skills, solutions, and experiencesthat can be immediately applied. We emphasize interactive learning, allowing you to engage withinstructors and fellow learners, fostering collaboration and knowledge sharing."}
          {i18n.language === "ar" &&
            "نحن نؤمن بالمنهج العملي والعملي للتعلم، حل المشكلات وتنفيذ المشاريع. دوراتنا وخدماتنا هي مصممة لتزويدك بالمهارات والحلول والحلول الواقعية الخبرات التي يمكن تطبيقها على الفور. ونحن نؤكد التفاعلية التعلم، مما يسمح لك بالمشاركة مع المعلمين وزملائك المتعلمين، تعزيز التعاون وتبادل المعرفة."}
        </p>
      </div>
    </div>
  );
}

export default Approach;
