import React from 'react'
import { useTranslation } from 'react-i18next';

function WhyUs() {
  const { t, i18n } = useTranslation();
  return (
    <div className='why-us ' id='whyus'>
            <div className="headings">
                <div className="stroke-text">
                    {i18n.language === "en" && "WHY US"}
                    {i18n.language === "ar" && "لماذا نحن"}
                </div>
                <div className="head-text">
                   {i18n.language === "en" && "WHY US"}
                    {i18n.language === "ar" && "لماذا نحن"}
                </div>
            </div>
        <div className="main-container">
            <ul className='ul-padding-left' dir='auto'>
              
                <li>
                {i18n.language === "en" && "Expert Instructors: Our courses are taught by industry experts with a wealth of experience in their respective fields."}
                    {i18n.language === "ar" && "مدربون خبراء: يتم تدريس دوراتنا من قبل خبراء الصناعة الذين يتمتعون بخبرة كبيرة في مجالات تخصصهم."}
                  </li>

                <li>
                {i18n.language === "en" && "Comprehensive Curriculum: Our courses cover a wide range of topics, ensuring a well-rounded education in technology."}
                    {i18n.language === "ar" &&  "منهج شامل: تغطي دوراتنا مجموعة واسعة من المواضيع، مما يضمن تعليمًا شاملاً في مجال التكنولوجيا."}
                </li>

                <li>
                {i18n.language === "en" && "Practical Application: We focus on real-world applications, providing you with the skills and knowledge you need to succeed"}
                    {i18n.language === "ar" && "التطبيق العملي: نحن نركز على تطبيقات العالم الحقيقي، ونزودك بالمهارات والمعرفة التي تحتاجها لتحقيق النجاح"}
                </li>

                <li>
                {i18n.language === "en" && "  Customized Solutions: Our technology services are tailored to meet your specific needs and requirements."}
                    {i18n.language === "ar" && "حلول مخصصة: تم تصميم خدماتنا التقنية لتلبية احتياجاتك ومتطلباتك الخاصة."}
                </li>

                <li>
                {i18n.language === "en" && "Successful Projects: We have a proven track record of delivering successful projects across various industries."}
                    {i18n.language === "ar" && "المشاريع الناجحة: لدينا سجل حافل في تقديم المشاريع الناجحة في مختلف الصناعات."}
                  </li>

                <li>
                {i18n.language === "en" && "Supportive Community: We foster a supportive learning environment, encouraging collaborationand networking"}
                    {i18n.language === "ar" && "مجتمع داعم: نحن نعزز بيئة تعليمية داعمة، ونشجع التعاون والتواصل"}
                </li>
            </ul>
        </div>
    </div>
  )
}

export default WhyUs