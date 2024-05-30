import "./Courses.scss";
import { RxTriangleRight } from "react-icons/rx";
import { RxTriangleLeft } from "react-icons/rx";
import { VscCircleSmall } from "react-icons/vsc";
import { motion } from "framer-motion";
import { IoMdArrowDropright } from "react-icons/io";
import { useNavigate, useNavigation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import {
  courseArrow,
  coursesImgs,
  leftService,
  serivicesOpacity,
  showFunction,
} from "../../utils/motion";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import CourseSM from "../../components/coursesSM/CoursesSM";
import {
  useCoursesTrackingMutation,
  useServicesTrackingMutation,
} from "../../store/tracking/TrackingApiSlice";
// @ts-ignore
import BackgroundImg from "../../assets/programmingCourses.png";
// @ts-ignore
import UiuxCoursesImg from "../../assets/uiuxCourses.png";
// @ts-ignore
import AiCourses from "../../assets/Group 2444.png";
// @ts-ignore

import PythonCourseImg from "../../assets/Group 2111.png";
// @ts-ignore

import FrontEndCourse from "../../assets/Group 2333.png";
// @ts-ignore
import BackEndCourses from "../../assets/Group 2666.png";

import HtmlHead from "../../components/HtmlHead/HtmlHead";
import { useTranslation } from "react-i18next";
import { Spinner } from "react-bootstrap";
import UniLoading from "../../components/loading/Loading";

function Courses() {
  const { t, i18n } = useTranslation();

  const title = "Courses | AUVNET";
  const description = "Courses | AUVNET";

  const [active, setActive] = useState(false);
  const [firstHovered, setFirstHoverd] = useState(false);
  const [secondHovered, setSecondHoverd] = useState(false);
  const [thirdHovered, setthirdHoverd] = useState(false);
  const [fourthHovered, setFourthHovered] = useState(false);
  const [fifthHovered, setFifthHovered] = useState(false);
  const [sixHovered, setSixHovered] = useState(false);
  const [scrollAmount, setScrollAmount] = useState(285);
  const galleryRef = useRef(null);
  const navigate = useNavigate();
  const [loaded, setLoaded] = useState(true);
  const [coursesTraking, { isSuccess }] = useCoursesTrackingMutation();

  const scrollLeft = () => {
    if (galleryRef.current) {
      galleryRef.current.scrollTo({
        left: galleryRef.current.scrollLeft - scrollAmount, // Adjust according to your image width
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (galleryRef.current) {
      galleryRef.current.scrollTo({
        left: galleryRef.current.scrollLeft + scrollAmount, // Adjust according to your image width
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const tr = async () => {
      if (!localStorage.getItem("courses-tracking")) {
        await coursesTraking({
          courses: localStorage.getItem("ipAddress"),
        }).unwrap();
      }
    };

    tr();
  }, []);

  useEffect(() => {
    if (isSuccess) {
      localStorage.setItem("courses-tracking", "true");
    }
  }, [isSuccess]);
  localStorage.setItem("services-visited", "false");

  useEffect(() => {
    if (loaded) {
      setTimeout(() => {
        setLoaded(false);
      }, 1000);
    }
  }, []);
  return (
    <>
      <HtmlHead title={title} description={description}>
        <meta property="og:site_name" content="AUVNET Courses" />
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
        <meta property="og:url" content="https://AUVNET.com/courses" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </HtmlHead>
      {loaded ? (
        <UniLoading />
      ) : (
        <>
          {" "}
          <div className="courses sm-screen-hide">
            <div className="main-container">
              <motion.div
                variants={leftService(0, 0.5)}
                initial="hidden"
                whileInView={"show"}
                className="courses_left"
              >
                <p className="p_our_courses">
                  {i18n.language === "en" &&
                    "Our courses service is designed to provide individuals with high-quality educational programs that empower them to acquire new knowledge and develop valuable skills. We offer a diverse range of courses covering various subjects, including programming, data science, web development, and more. At our core, we believe in delivering structured and comprehensive learning experiences. Our courses are created by industry experts who possess extensive knowledge and experience in their respective fields. They design the curriculum to ensure that learners receive a well-rounded education, covering both theoretical concepts and practical applications."}
                  {i18n.language === "ar" &&
                    "تم تصميم خدمة الدورات لدينا لتزويد الأفراد ببرامج تعليمية عالية الجودة تمكنهم من اكتساب معارف جديدة وتطوير مهارات قيمة. نحن نقدم مجموعة متنوعة من الدورات التدريبية التي تغطي مواضيع مختلفة، بما في ذلك البرمجة وعلوم البيانات وتطوير الويب والمزيد. في جوهرنا، نحن نؤمن بتقديم تجارب تعليمية منظمة وشاملة. يتم إنشاء دوراتنا من قبل خبراء الصناعة الذين يمتلكون معرفة وخبرة واسعة في مجالات تخصصهم. ويقومون بتصميم المناهج الدراسية لضمان حصول المتعلمين على تعليم جيد يغطي المفاهيم النظرية والتطبيقات العملية"}
                </p>
                <div>
                  <span>
                    {i18n.language === "en" && "AUVNET library"}
                    {i18n.language === "ar" && "مكتبة اوڤنيت"}
                  </span>
                  <div className="courses_left_div">
                    <div className="div_courses">
                      {i18n.language === "en" && "COURSES"}
                      {i18n.language === "ar" && "الدورات"}
                    </div>
                    <div className="div_mode">
                      {i18n.language === "en" && "MADE FOR YOU"}
                      {i18n.language === "ar" && "جعل لك"}
                    </div>
                  </div>
                </div>

                <button
                  className="see-our-courses-btn"
                  onMouseEnter={() => setActive(true)}
                  onMouseLeave={() => setActive(false)}
                  onClick={() =>
                    navigate("/courses/our-courses", { state: "Programming" })
                  }
                >
                  <div className={`before ${active && "active"}`}></div>
                  <div>
                    {i18n.language === "en" && "see our top courses"}
                    {i18n.language === "ar" && "انظر أفضل الدورات لدينا"}
                    <HiOutlineArrowLongRight
                      style={{ marginLeft: "1rem" }}
                      size={30}
                    />
                  </div>
                </button>
              </motion.div>
              <div className="courses_right">
                <div className="courses_right_top">
                  <div style={{ whiteSpace: "nowrap" }}>
                    <div>
                      <RxTriangleLeft
                        onClick={scrollLeft}
                        size={35}
                        cursor={"pointer"}
                      />
                      <VscCircleSmall
                        size={35}
                        style={{
                          marginLeft: "-0.7rem",
                          marginRight: "-0.7rem",
                        }}
                      />
                      <RxTriangleRight
                        onClick={scrollRight}
                        size={35}
                        cursor={"pointer"}
                      />
                    </div>
                    <div className="move_your">
                      {i18n.language === "en" && "move your wheel to scroll"}
                      {i18n.language === "ar" && "حرك العجلة للتمرير"}
                    </div>
                  </div>
                  <div style={{ whiteSpace: "nowrap" }} className="click_to">
                    {i18n.language === "en" && "Click to swap between cards"}
                    {i18n.language === "ar" && "انقر للتبديل بين البطاقات"}
                    <IoMdArrowDropright
                      onClick={scrollRight}
                      cursor={"pointer"}
                      size={35}
                    />
                  </div>
                </div>

                <div className="iimagee" ref={galleryRef}>
                  <div
                    onClick={() =>
                      navigate("/courses/our-courses", { state: "Programming" })
                    }
                    onMouseEnter={() => setFirstHoverd(true)}
                    onMouseLeave={() => setFirstHoverd(false)}
                  >
                    <div
                      className="details "
                      onMouseEnter={() => setFirstHoverd(true)}
                    >
                      <div
                        onMouseEnter={() => setFirstHoverd(true)}
                        className="left-det p-0"
                      >
                        <h5
                          onMouseEnter={() => setFirstHoverd(true)}
                          style={{ top: firstHovered && "-80px" }}
                        >
                          {i18n.language === "en" && "Programming"}
                          {i18n.language === "ar" && "برمجة"}
                        </h5>
                        <motion.div
                          onMouseEnter={() => setFirstHoverd(true)}
                          variants={showFunction(0, 1)}
                          initial="hidden"
                          // whileHover={"exit"}
                          animate={firstHovered ? "show" : "exit"}
                          style={{
                            position: "absolute",
                            bottom: "30px",
                            fontSize: "11px",
                            textTransform: "uppercase",
                            fontWeight: 200,
                          }}
                        >
                          {i18n.language === "en" && (
                            <>
                              <p
                                style={{
                                  display: "block",
                                  padding: 0,
                                  margin: 0,
                                }}
                              >
                                Helps You To get your basic information
                              </p>
                              <p
                                style={{
                                  display: "block",
                                  padding: 0,
                                  margin: 0,
                                }}
                              >
                                about technology and get and get your first step
                              </p>
                              <p
                                style={{
                                  display: "block",
                                  padding: 0,
                                  margin: 0,
                                }}
                              >
                                into programming world
                              </p>
                            </>
                          )}
                          {i18n.language === "ar" && (
                            <>
                              <p
                                style={{
                                  display: "block",
                                  padding: 0,
                                  margin: 0,
                                }}
                              >
                                يساعدك على الحصول على المعلومات الأساسية الخاصة
                                بك
                              </p>
                              <p
                                style={{
                                  display: "block",
                                  padding: 0,
                                  margin: 0,
                                }}
                              >
                                حول التكنولوجيا واحصل على خطوتك الأولى
                              </p>
                              <p
                                style={{
                                  display: "block",
                                  padding: 0,
                                  margin: 0,
                                }}
                              >
                                في عالم البرمجة
                              </p>
                            </>
                          )}
                        </motion.div>
                        <span onMouseEnter={() => setFirstHoverd(true)}>
                          {i18n.language === "en" && "ENG. Ahmed royale"}
                          {i18n.language === "ar" && "المهندس. احمد رويال"}
                        </span>
                      </div>
                      <div
                        onMouseEnter={() => setFirstHoverd(true)}
                        className="right-det"
                      >
                        <motion.span
                          style={{ cursor: "pointer" }}
                          onMouseEnter={() => setFirstHoverd(true)}
                          variants={courseArrow(1)}
                          initial="hidden"
                          // whileHover={"exit"}
                          animate={firstHovered ? "show" : "exit"}
                        >
                          <HiOutlineArrowLongRight
                            onMouseEnter={() => setFirstHoverd(true)}
                            className={`img-arrow ${firstHovered && "active"}`}
                          />
                        </motion.span>
                      </div>
                    </div>
                    <motion.img
                      onMouseEnter={() => setFirstHoverd(true)}
                      variants={coursesImgs(1)}
                      initial="hidden"
                      // whileHover={"exit"}
                      animate={firstHovered ? "show" : "exit"}
                      src={BackgroundImg}
                      alt=""
                    />
                  </div>
                  <div
                    onClick={() =>
                      navigate("/courses/our-courses", { state: "UIUX" })
                    }
                    onMouseEnter={() => setSecondHoverd(true)}
                    onMouseLeave={() => setSecondHoverd(false)}
                  >
                    <div
                      className="details "
                      onMouseEnter={() => setSecondHoverd(true)}
                    >
                      <div
                        onMouseEnter={() => setSecondHoverd(true)}
                        className="left-det p-0"
                      >
                        <h5 onMouseEnter={() => setSecondHoverd(true)}>
                          {i18n.language === "en" && "UIUX ENGINEER"}
                          {i18n.language === "ar" && "مهندس واجهة المستخدم"}
                        </h5>
                        <span onMouseEnter={() => setSecondHoverd(true)}>
                          {i18n.language === "en" && "ENG. Fares drazz"}
                          {i18n.language === "ar" && "المهندس. فارس دراز"}
                        </span>
                      </div>
                      <div
                        onMouseEnter={() => setSecondHoverd(true)}
                        className="right-det"
                      >
                        <motion.span
                          style={{ cursor: "pointer" }}
                          onMouseEnter={() => setSecondHoverd(true)}
                          variants={courseArrow(1)}
                          initial="hidden"
                          // whileHover={"exit"}
                          animate={secondHovered ? "show" : "exit"}
                        >
                          <HiOutlineArrowLongRight
                            onMouseEnter={() => setSecondHoverd(true)}
                            className={`img-arrow ${secondHovered && "active"}`}
                          />
                        </motion.span>
                      </div>
                    </div>
                    <motion.img
                      onMouseEnter={() => setSecondHoverd(true)}
                      variants={coursesImgs(1)}
                      initial="hidden"
                      // whileHover={"exit"}
                      animate={secondHovered ? "show" : "exit"}
                      src={UiuxCoursesImg}
                      alt=""
                    />
                  </div>
                  <div
                    onClick={() =>
                      navigate("/courses/our-courses", {
                        state: "AI Technology",
                      })
                    }
                    onMouseEnter={() => setthirdHoverd(true)}
                    onMouseLeave={() => setthirdHoverd(false)}
                  >
                    <div
                      className="details "
                      onMouseEnter={() => setthirdHoverd(true)}
                    >
                      <div
                        onMouseEnter={() => setthirdHoverd(true)}
                        className="left-det p-0"
                      >
                        <h5 onMouseEnter={() => setthirdHoverd(true)}>
                          {i18n.language === "en" && "ai technology"}
                          {i18n.language === "ar" &&
                            "تكنولوجيا الذكاء الاصطناعي"}
                        </h5>
                        <span onMouseEnter={() => setthirdHoverd(true)}>
                          {i18n.language === "en" && "ENG. Ahmed royale"}
                          {i18n.language === "ar" && "المهندس. احمد رويال"}
                        </span>
                      </div>
                      <div
                        onMouseEnter={() => setthirdHoverd(true)}
                        className="right-det"
                      >
                        <motion.span
                          style={{ cursor: "pointer" }}
                          onMouseEnter={() => setthirdHoverd(true)}
                          variants={courseArrow(1)}
                          initial="hidden"
                          // whileHover={"exit"}
                          animate={thirdHovered ? "show" : "exit"}
                        >
                          <HiOutlineArrowLongRight
                            onMouseEnter={() => setthirdHoverd(true)}
                            className={`img-arrow ${thirdHovered && "active"}`}
                          />
                        </motion.span>
                      </div>
                    </div>
                    <motion.img
                      onMouseEnter={() => setthirdHoverd(true)}
                      variants={coursesImgs(1)}
                      initial="hidden"
                      // whileHover={"exit"}
                      animate={thirdHovered ? "show" : "exit"}
                      src={AiCourses}
                      alt=""
                    />
                  </div>
                  <div
                    onClick={() =>
                      navigate("/courses/our-courses", { state: "Python" })
                    }
                    onMouseEnter={() => setFourthHovered(true)}
                    onMouseLeave={() => setFourthHovered(false)}
                  >
                    <div
                      className="details "
                      onMouseEnter={() => setFourthHovered(true)}
                    >
                      <div
                        onMouseEnter={() => setFourthHovered(true)}
                        className="left-det p-0"
                      >
                        <h5 onMouseEnter={() => setFourthHovered(true)}>
                          python
                        </h5>
                        <span onMouseEnter={() => setFourthHovered(true)}>
                          {i18n.language === "en" && "ENG. Ahmed royale"}
                          {i18n.language === "ar" && "المهندس. احمد رويال"}
                        </span>
                      </div>
                      <div
                        onMouseEnter={() => setFourthHovered(true)}
                        className="right-det"
                      >
                        <motion.span
                          style={{ cursor: "pointer" }}
                          onMouseEnter={() => setFourthHovered(true)}
                          variants={courseArrow(1)}
                          initial="hidden"
                          // whileHover={"exit"}
                          animate={fourthHovered ? "show" : "exit"}
                        >
                          <HiOutlineArrowLongRight
                            onMouseEnter={() => setFourthHovered(true)}
                            className={`img-arrow ${fourthHovered && "active"}`}
                          />
                        </motion.span>
                      </div>
                    </div>
                    <motion.img
                      onMouseEnter={() => setFourthHovered(true)}
                      variants={coursesImgs(1)}
                      initial="hidden"
                      // whileHover={"exit"}
                      animate={fourthHovered ? "show" : "exit"}
                      src={PythonCourseImg}
                      alt=""
                    />
                  </div>
                  <div
                    onClick={() =>
                      navigate("/courses/our-courses", { state: "Front-End" })
                    }
                    onMouseEnter={() => setFifthHovered(true)}
                    onMouseLeave={() => setFifthHovered(false)}
                  >
                    <div
                      className="details "
                      onMouseEnter={() => setFifthHovered(true)}
                    >
                      <div
                        onMouseEnter={() => setFifthHovered(true)}
                        className="left-det p-0"
                      >
                        <h5 onMouseEnter={() => setFifthHovered(true)}>
                          {i18n.language === "en" && "Front-end development"}
                          {i18n.language === "ar" && "تطوير الواجهة الأمامية"}
                        </h5>
                        <span onMouseEnter={() => setFifthHovered(true)}>
                          {i18n.language === "en" && "ENG. Ahmed royale"}
                          {i18n.language === "ar" && "المهندس. احمد رويال"}
                        </span>
                      </div>
                      <div
                        onMouseEnter={() => setFifthHovered(true)}
                        className="right-det"
                      >
                        <motion.span
                          style={{ cursor: "pointer" }}
                          onMouseEnter={() => setFifthHovered(true)}
                          variants={courseArrow(1)}
                          initial="hidden"
                          // whileHover={"exit"}
                          animate={fifthHovered ? "show" : "exit"}
                        >
                          <HiOutlineArrowLongRight
                            onMouseEnter={() => setFifthHovered(true)}
                            className={`img-arrow ${fifthHovered && "active"}`}
                          />
                        </motion.span>
                      </div>
                    </div>
                    <motion.img
                      onMouseEnter={() => setFifthHovered(true)}
                      variants={coursesImgs(1)}
                      initial="hidden"
                      // whileHover={"exit"}
                      animate={fifthHovered ? "show" : "exit"}
                      src={FrontEndCourse}
                      alt=""
                    />
                  </div>
                  <div
                    onClick={() =>
                      navigate("/courses/our-courses", { state: "Back-End" })
                    }
                    onMouseEnter={() => setSixHovered(true)}
                    onMouseLeave={() => setSixHovered(false)}
                  >
                    <div
                      className="details "
                      onMouseEnter={() => setSixHovered(true)}
                    >
                      <div
                        onMouseEnter={() => setSixHovered(true)}
                        className="left-det p-0"
                      >
                        <h5 onMouseEnter={() => setSixHovered(true)}>
                          {i18n.language === "en" && "back-end development"}
                          {i18n.language === "ar" && "تطوير الخلفية"}
                        </h5>
                        <span onMouseEnter={() => setSixHovered(true)}>
                          {i18n.language === "en" && "ENG. Ahmed royale"}
                          {i18n.language === "ar" && "المهندس. احمد رويال"}
                        </span>
                      </div>
                      <div
                        onMouseEnter={() => setSixHovered(true)}
                        className="right-det"
                      >
                        <motion.span
                          style={{ cursor: "pointer" }}
                          onMouseEnter={() => setSixHovered(true)}
                          variants={courseArrow(1)}
                          initial="hidden"
                          // whileHover={"exit"}
                          animate={sixHovered ? "show" : "exit"}
                        >
                          <HiOutlineArrowLongRight
                            onMouseEnter={() => setSixHovered(true)}
                            className={`img-arrow ${sixHovered && "active"}`}
                          />
                        </motion.span>
                      </div>
                    </div>
                    <motion.img
                      onMouseEnter={() => setSixHovered(true)}
                      variants={coursesImgs(1)}
                      initial="hidden"
                      // whileHover={"exit"}
                      animate={sixHovered ? "show" : "exit"}
                      src={BackEndCourses}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <CourseSM />
        </>
      )}
    </>
  );
}

export default Courses;
