import { motion } from "framer-motion";
import HtmlHead from "../../components/HtmlHead/HtmlHead";
import { useTranslation } from "react-i18next";
// @ts-ignore
import ourImg from "../../assets/about-background.svg";
// import "./About.css";
import "./About.scss";
import { showFunction } from "../../utils/motion";

const About = () => {
  const { t, i18n } = useTranslation();

  const title = "About | AUVENT";
  const description = "About | AUVENT";
  localStorage.setItem("services-visited", "false");

  return (
    <div className="about">
    
      <HtmlHead title={title} description={description}>
        {/* <meta
          // @ts-ignore
          charset="UTF-8"
        /> */}
        <meta property="og:site_name" content="AUVENT About" />
        <meta
          property="og:title"
          content="AUVENT is a leading technology company that specializes in providing comprehensive design services and software development solutions"
        />
        <meta
          property="og:description"
          content="AUVENT is a leading technology company that specializes in providing comprehensive design services and software development solutions. With a strong focus on creativity, innovation, and technical expertise, we offer a wide range of services including UI/UX design, graphic design, logo design, AI development, website building, mobile app development, app security, desktop app development, and more. Our mission is to empower businesses and individuals with cutting-edge technology and captivating designs that drive growth and success in the digital world.
      "
        />
        <meta
          property="og:image"
          itemProp="image"
          content="https://media.AUVENT.com/AUVENT/AUVENT%20Logo%20B.png"
        />
        <meta property="og:url" content="https://AUVENT.com/about" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </HtmlHead>
      <div>
        <div className="main-container">
          <div className="vector_1"></div>
          <motion.h1
            variants={showFunction(0, 3)}
            initial="hidden"
            animate={"show"}
            viewport={{ once: true }}
          >
            {i18n.language === "en" && "About us"}
            {i18n.language === "ar" && "معلومات عنا"}
          </motion.h1>

          {i18n.language === "en" && (
            <>
              <motion.p
                variants={showFunction(0, 3)}
                initial="hidden"
                animate={"show"}
                viewport={{ once: true }}
              >
                <span>AUVENT</span> is a leading technology company that
                specializes in providing comprehensive design services and
                software development solutions. With a strong focus on
                creativity, innovation, and technical expertise, we offer a wide
                range of services including UI/UX design, graphic design, logo
                design, AI development, website building, mobile app
                development, app security, desktop app development, and more.
                Our mission is to empower businesses and individuals with
                cutting-edge technology and captivating designs that drive
                growth and success in the digital world.
                <br />
                Design Services: <br />
                UI/UX Design: AUVENT excels in creating immersive and intuitive
                user interfaces (UI) and user experiences (UX) that captivate
                and engage users. Our team of skilled designers combines their
                artistic flair with a deep understanding of user behavior to
                craft interfaces that are visually stunning, user-friendly, and
                optimized for seamless interaction. <br />
                Graphic Design: Our graphic design services go beyond
                aesthetics, focusing on creating visual communication that
                effectively conveys your brand's message and captures the
                attention of your target audience. From eye-catching marketing
                materials to impactful infographics and illustrations, we create
                designs that leave a lasting impression and elevate your brand
                identity. <br />
                Logo Design: AUVENT understands the importance of a strong and
                memorable logo in building brand recognition. Our logo design
                experts work closely with you to understand your brand values
                and objectives, and create unique and impactful logos that
                reflect your brand identity. We strive to design logos that are
                not only visually appealing but also resonate with your target
                audience. <br />
                Software Development Services: <br />
                AI Development: AUVENT leverages the power of artificial
                intelligence (AI) to develop intelligent and transformative
                solutions for businesses. Our AI development services include
                machine learning, natural language processing, computer vision,
                and more. By harnessing the capabilities of AI, we help
                businesses automate processes, gain valuable insights from data,
                and deliver personalized experiences to their customers. <br />
                Website Building: AUVENT specializes in developing responsive,
                user-friendly, and visually appealing websites that drive online
                success. Our team of skilled developers utilizes the latest web
                technologies and frameworks to create websites that are not only
                aesthetically pleasing but also optimized for performance,
                scalability, and search engine visibility. We work closely with
                you to understand your goals and requirements, ensuring that
                your website effectively represents your brand and meets your
                business objectives. <br />
                <span className="vector_2"></span>
                Mobile App Development: With the increasing dominance of mobile
                devices, having a mobile app is essential for businesses to stay
                competitive. AUVENT offers end-to-end mobile app development
                services for iOS and Android platforms. Whether you need a
                native app, a hybrid app, or a progressive web app, our
                experienced developers create mobile applications that deliver
                exceptional user experiences, seamless functionality, and
                seamless integration with various devices and platforms. <br />
                App Security: At AUVENT, we prioritize the security of your
                applications and data. We understand the critical nature of app
                security in today's digital landscape. Our experts employ
                industry best practices and robust security measures to protect
                your applications from potential threats and vulnerabilities. We
                conduct thorough security audits, implement encryption
                techniques, and follow stringent security protocols to ensure
                the integrity and confidentiality of your app's data. <br />
                Desktop App Development: In addition to web and mobile app
                development, AUVENT also offers desktop app development
                services. Whether you need a standalone application or a
                comprehensive software suite, our skilled developers have the
                expertise to create powerful and user-friendly desktop
                applications that cater to your unique business requirements.
              </motion.p>

              <motion.p
                variants={showFunction(0, 3)}
                initial="hidden"
                animate={"show"}
                viewport={{ once: true }}
              >
                At <span>AUVENT</span>, we believe in the transformative
                potential of technology and design. We are committed to
                delivering innovative and high-quality solutions that enable
                businesses to thrive in the digital landscape. Our team of
                passionate professionals combines creativity, technical
                expertise, and a customer-centric approach to deliver
                exceptional results. Partner with us and embark on a journey of
                digital transformation and success.
              </motion.p>
            </>
          )}
          {i18n.language === "ar" && (
            <>
              <motion.p
                variants={showFunction(0, 3)}
                initial="hidden"
                animate={"show"}
                viewport={{ once: true }}
                dir="rtl"
              >
                <span>أوفنيت</span> هي شركة تكنولوجيا رائدة متخصصة في تقديم
                خدمات التصميم الشاملة وتطوير البرمجيات حلول. مع التركيز القوي
                على الإبداع والابتكار، و الخبرة الفنية، ونحن نقدم مجموعة واسعة
                من الخدمات بما في ذلك تصميم UI/UX, التصميم الجرافيكي, تصميم
                الشعارات, تطوير الذكاء الاصطناعي, الموقع الإلكتروني البناء،
                تطوير تطبيقات الهاتف المحمول، أمان التطبيقات، تطبيقات سطح المكتب
                التنمية، وأكثر من ذلك. مهمتنا هي تمكين الشركات و الأفراد مع
                التكنولوجيا المتطورة والتصاميم الجذابة التي تدفع النمو والنجاح
                في العالم الرقمي
                <br />
                خدمات التصميم : <br />
                تصميم واجهة المستخدم/تجربة المستخدم: تتفوق AUVENT في إنشاء
                مستخدم غامر وبديهي واجهات (UI) وتجارب المستخدم (UX) التي تأسر
                وتتفاعل المستخدمين. يجمع فريقنا من المصممين المهرة بين ذوقهم
                الفني مع فهم عميق لسلوك المستخدم لصياغة واجهات ذلك مذهلة بصريًا،
                وسهلة الاستخدام، ومُحسّنة لتحقيق السلاسة تفاعل <br />
                التصميم الجرافيكي: خدمات التصميم الجرافيكي لدينا تتجاوز
                الجماليات، التركيز على خلق التواصل المرئي الذي ينقل بشكل فعال
                رسالة علامتك التجارية وتجذب انتباه هدفك جمهور. من المواد
                التسويقية الجذابة إلى المواد المؤثرة الرسوم البيانية والرسوم
                التوضيحية، نقوم بإنشاء تصميمات تترك أثراً انطباع دائم ورفع هوية
                علامتك التجارية
                <br />
                تصميم الشعار: تدرك AUVENT أهمية وجود شعار قوي و شعار لا يُنسى في
                بناء التعرف على العلامة التجارية. تصميم شعارنا يعمل الخبراء معك
                بشكل وثيق لفهم قيم علامتك التجارية و الأهداف، وإنشاء شعارات
                فريدة ومؤثرة تعكس شخصيتك هوية العلامة التجارية. نحن نسعى جاهدين
                لتصميم شعارات ليست بصرية فقط جذابة ولكن لها أيضًا صدى لدى جمهورك
                المستهدف <br />
                خدمات تطوير البرمجيات : <br />
                تطوير الذكاء الاصطناعي: تستفيد AUVENT من قوة الذكاء الاصطناعي
                الذكاء (AI) لتطوير الذكاء والتحويل حلول للشركات. تشمل خدمات
                تطوير الذكاء الاصطناعي لدينا التعلم الآلي، ومعالجة اللغات
                الطبيعية، ورؤية الكمبيوتر، و أكثر. ومن خلال تسخير قدرات الذكاء
                الاصطناعي، فإننا نساعد الشركات أتمتة العمليات واكتساب رؤى قيمة
                من البيانات وتقديمها تجارب شخصية لعملائها
                <br />
                بناء موقع الويب: AUVENT متخصص في تطوير الاستجابة، مواقع ويب سهلة
                الاستخدام وجذابة بصريًا تعمل على الإنترنت نجاح. يستخدم فريقنا من
                المطورين المهرة أحدث شبكة الإنترنت التقنيات والأطر لإنشاء مواقع
                الويب التي ليست فقط ممتعة من الناحية الجمالية ولكن أيضًا
                مُحسَّنة للأداء، قابلية التوسع، وإمكانية رؤية محرك البحث. نحن
                نعمل معك بشكل وثيق لفهم أهدافك ومتطلباتك، والتأكد من ذلك يمثل
                موقع الويب علامتك التجارية بشكل فعال ويلبي عملك أهداف
                <br />
                <span className="vector_2"></span>
                تطوير تطبيقات الهاتف المحمول: مع تزايد هيمنة الهاتف المحمول
                الأجهزة، فإن وجود تطبيق جوال يعد أمرًا ضروريًا لبقاء الشركات
                تنافسي. تقدم AUVENT تطويرًا شاملاً لتطبيقات الهاتف المحمول خدمات
                لمنصات iOS وAndroid. سواء كنت في حاجة الى مواطن تطبيق أو تطبيق
                مختلط أو تطبيق ويب تقدمي، من ذوي الخبرة لدينا يقوم المطورون
                بإنشاء تطبيقات الهاتف المحمول التي توفر مستخدمًا استثنائيًا
                الخبرات والوظائف السلسة والتكامل السلس مع الأجهزة والمنصات
                المختلفة
                <br />
                أمان التطبيقات: في AUVENT، نعطي الأولوية لأمن تطبيقاتك التطبيقات
                والبيانات. نحن نتفهم الطبيعة الحرجة للتطبيق الأمن في المشهد
                الرقمي اليوم. خبراؤنا يوظفون الصناعة أفضل الممارسات والتدابير
                الأمنية القوية لحماية حسابك التطبيقات من التهديدات ونقاط الضعف
                المحتملة. نحن نجري عمليات تدقيق أمنية شاملة، وتنفيذ تقنيات
                التشفير، و اتبع بروتوكولات الأمان الصارمة لضمان سلامة و سرية
                بيانات تطبيقك <br />
                تطوير تطبيقات سطح المكتب: بالإضافة إلى تطبيقات الويب والهاتف
                المحمول التطوير، تقدم AUVENT أيضًا خدمات تطوير تطبيقات سطح
                المكتب. سواء كنت بحاجة إلى تطبيق مستقل أو شامل مجموعة البرامج،
                يتمتع مطورونا المهرة بالخبرة اللازمة لإنشائها تطبيقات سطح مكتب
                قوية وسهلة الاستخدام تلبي احتياجاتك متطلبات العمل الفريدة
              </motion.p>

              <motion.p
                variants={showFunction(0, 3)}
                initial="hidden"
                animate={"show"}
                viewport={{ once: true }}
                dir="rtl"
              >
                في <span>أوفنيت</span>، نحن نؤمن بإمكانيات التحويل للتكنولوجيا
                والتصميم. ونحن ملتزمون بتقديم مبتكرة وحلول عالية الجودة تمكن
                الشركات من الازدهار في المشهد الرقمي. يجمع فريقنا من المحترفين
                المتحمسين الإبداع والخبرة الفنية والنهج الذي يركز على العملاء
                تحقيق نتائج استثنائية. شريك معنا والبدء في رحلة التحول الرقمي
                والنجاح
              </motion.p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default About;
