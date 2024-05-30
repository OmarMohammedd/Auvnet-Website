import "./Presentation.scss";
import { RiToolsFill } from "react-icons/ri";
import { IoIosShareAlt } from "react-icons/io";
import { BsFillSendFill, BsInfoCircleFill } from "react-icons/bs";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { Row, Col, Spinner } from "react-bootstrap";
import { useEffect, useState } from "react";
import HtmlHead from "../../components/HtmlHead/HtmlHead";
import { TbArrowsDiagonal } from "react-icons/tb";
import {
  useGetAllProjectsQuery,
  useGetProjectQuery,
} from "../../store/projects/ProjectsApiSlice";
import ShareModal from "../../components/presentation/ShareModal";
import NotFoundProject from "../../components/presentation/NotFoundProject";
import BottomSheet from "../../components/formComponent/BottomSheetForm";
import ToolsBottomSheet from "../../components/formComponent/ToolsBottomSheet";
// @ts-ignore
import nextImg from "../../assets/next.png";
// @ts-ignore
import flutter from "../../assets/flutter.jpg";
// @ts-ignore
import reactNative from "../../assets/react-native.jpg";
// @ts-ignore
import Xarvarin from "../../assets/xamarin.jpg";
// @ts-ignore
import kotlin from "../../assets/kotlin.png";
// @ts-ignore
import swift from "../../assets/swift.png";
// @ts-ignore
import nodeJS from "../../assets/nodejs.jpg";
// @ts-ignore
import php from "../../assets/phpLaravel.png";
// @ts-ignore
import asp from "../../assets/asp.net.jpg";
// @ts-ignore
import react from "../../assets/react.jpg";
// @ts-ignore
import vue from "../../assets/vue.jpg";
// @ts-ignore
import angular from "../../assets/angular.jpg";
// @ts-ignore
import canva from "../../assets/canva.jpg";
// @ts-ignore
import photoshop from "../../assets/adobyPhotoshop.jpg";
// @ts-ignore
import illustrator from "../../assets/adobyIllustrator.webp";
// @ts-ignore
import figma from "../../assets/figma.jpg";
// @ts-ignore
import xd from "../../assets/adobyXd.jpg";
// @ts-ignore
import sketch from "../../assets/sketch.png";
import { useTranslation } from "react-i18next";
import UniLoading from "../../components/loading/Loading";
function Presentation() {
  const title = "Presentation | AUVNET";
  const description = "Presentation | AUVNET";
  const location = useLocation();

  // console.log(location?.pathname?.split('/')[2])
  const [showAbout, setShowAbout] = useState(false);
  const [showTools, setShowTools] = useState(false);
  const [isPdf, setIsPdf] = useState(false);
  const [myArray, setMyArray] = useState([]);
  const navigate = useNavigate();
  const [openShareModal, setOperShareModal] = useState(false);
  const [showToolsList, setshowToolsList] = useState(false);
  const [showAboutList, setshowAboutList] = useState(false);
  const [firstImg, setFristImg] = useState(true);
  const [loaded, setLoaded] = useState(true);
  const [signleArr, setSingleArr] = useState([]);
  const { data } = useGetAllProjectsQuery();
  const {
    data: projectDetails,
    isLoading,
    isError,
  } = useGetProjectQuery({
    name: location?.pathname?.split("/")[2],
  });
  localStorage.setItem("services-visited", "false");
  useEffect(() => {
    if (projectDetails?.data?.presentation?.endsWith(".pdf")) {
      setIsPdf(true);
    } else {
      setIsPdf(false);
    }
  }, [projectDetails?.data?.presentation]);

  useEffect(() => {
    const newArr = data?.data?.filter(
      (e) => e._id !== projectDetails?.data?._id
    );
    if (newArr?.length > 3) {
      setMyArray(newArr?.slice(3)); // Get the last three items
    } else {
      setMyArray(newArr); // Keep the original array
    }
  }, [projectDetails]);

  useEffect(() => {
    if (projectDetails?.data?.tools?.length > 0) {
      const newA = projectDetails?.data?.tools.map((e) => e.split(":"[0]));

      setSingleArr(new Set(newA));
    }
  }, [projectDetails?.data?.tools]);
  const { t, i18n } = useTranslation();

  const getIcon = (e) => {
    let img = nextImg;
    if (e === "Mobile-Application:Flutter") {
      img = flutter;
    }
    if (e === "Mobile-Application:React Native") {
      img = reactNative;
    }
    if (e === "Mobile-Application:Xamarin") {
      img = Xarvarin;
    }
    if (e === "Mobile-Application:iOS (Swift/Objective-C)") {
      img = swift;
    }
    if (e === "Mobile-Application:Android (Java/Kotlin)") {
      img = kotlin;
    }
    if (e === "Back-End:Node js") {
      img = nodeJS;
    }
    if (e === "Back-End:Php Laravel") {
      img = php;
    }
    if (e === "Back-End:ASP.net") {
      img = asp;
    }
    if (e === "Front-End:React js") {
      img = react;
    }
    if (e === "Front-End:Vue js") {
      img = vue;
    }
    if (e === "Front-End:Angular js") {
      img = angular;
    }
    if (e === "Graphic-Design:Canva") {
      img = canva;
    }
    if (e === "Graphic-Design:Adobe Illustrator") {
      img = illustrator;
    }
    if (e === "Graphic-Design:Adobe Photoshop") {
      img = photoshop;
    }
    if (e === "UIUX:Figma") {
      img = figma;
    }
    if (e === "UIUX:Adobe XD") {
      img = xd;
    }
    if (e === "UIUX:Sketch") {
      img = sketch;
    }

    return <img src={img} alt="alternative img" />;
  };

  return (
    <div className="presentation ">
      <HtmlHead title={title} description={description}>
        <meta property="og:site_name" content="AUVNET Presentation" />
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
          content="https://AUVNET.com/projects/presentation"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </HtmlHead>
      {isLoading ? (
        <UniLoading />
      ) : (
        <>
          {isError ? (
            <NotFoundProject />
          ) : (
            <div className="main-container">
              <div className="head d-flex align-items-center justify-content-between">
                <div>
                  <h1>{projectDetails?.data?.name}</h1>
                  <span>{projectDetails?.data?.subTitle}</span>
                </div>
                <div className="btns">
                  {projectDetails?.data?.tools?.map((ele, idx) => (
                    <li style={{ cursor: "initial" }} key={idx}>
                      {ele.split(":")[0]}
                    </li>
                  ))}
                </div>
                <div className="expends">
                  <div className="d-flex upper-content  flex-row  gap-2 ">
                    <div
                      className="pre-content "
                      onClick={() => setShowTools(true)}
                    >
                      <div className="pre-content-icon">
                        <RiToolsFill fontSize={"1.5rem"} />
                      </div>
                      <span>{i18n.language === "en" ? "Tools" : "ادوات"}</span>
                      <div className={`share-list `}></div>
                    </div>
                    <div
                      className="pre-content "
                      onClick={() => setShowAbout(true)}
                    >
                      <div className="pre-content-icon">
                        <BsInfoCircleFill fontSize={"1.2rem"} />
                      </div>
                      <span>{i18n.language === "en" ? "about" : "عننا"}</span>
                      <div className={`share-list `}></div>
                    </div>
                    <div className="pre-content ">
                      <div className="pre-content-icon">
                        <TbArrowsDiagonal fontSize={"1.5rem"} />
                      </div>
                      <span>{i18n.language === "en" ? "Expend" : "عرض"}</span>
                      <div className={`share-list `}></div>
                    </div>
                    <div
                      className="pre-content "
                      onClick={() => setOperShareModal(true)}
                    >
                      <div className="pre-content-icon">
                        <IoIosShareAlt fontSize={"1.5rem"} />
                      </div>
                      <span>{i18n.language === "en" ? "share" : "مشاركه"}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="presentation-content">
                {isPdf ? (
                  <div style={{ width: "100%", height: "100vh" }}>
                    <iframe
                      src={`https://docs.google.com/gview?embedded=true&url=${encodeURIComponent(
                        projectDetails?.data?.presentation
                      )}`}
                      style={{ height: "100%", border: "none" }}
                    />
                  </div>
                ) : (
                  <img
                    src={projectDetails?.data?.presentation}
                    loading="lazy"
                    onLoad={() => setFristImg(false)}
                    alt=""
                  />
                )}
                <div className="d-flex upper-content  flex-column  gap-5 ">
                  <div
                    className="pre-content "
                    onMouseLeave={() => setshowToolsList(false)}
                  >
                    <div
                      className="pre-content-icon"
                      onMouseEnter={() => setshowToolsList(true)}
                    >
                      <RiToolsFill fontSize={"2.5rem"} />
                    </div>
                    <span>{i18n.language === "en" ? "Tools" : "ادوات"}</span>
                    <div
                      className={`share-list tools ${
                        showToolsList ? "showIt" : "hideIt"
                      }`}
                      style={{ backgroundColor: "rgba(255, 255, 255, 0.6)" }}
                    >
                      <div
                        className=" d-flex align-items-cneter justify-content-center flex-column  text-center my-3"
                        style={{ gap: "0.8rem", width: "100%" }}
                      >
                        {projectDetails?.data?.tools.map((e) => (
                          <div
                            className="tools-list  d-flex align-items-center gap-2 justify-content-center "
                            style={{ backgroundColor: "white" }}
                          >
                            <div
                              className="d-flex justify-content-end"
                              style={{ flex: 3 }}
                            >
                              {getIcon(e)}
                            </div>
                            <span className="text-start" style={{ flex: 3 }}>
                              {e.split(":")[1]}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div
                    className="pre-content "
                    onClick={() => setOperShareModal(true)}
                  >
                    <div className="pre-content-icon">
                      <IoIosShareAlt fontSize={"2.5rem"} />
                    </div>
                    <span>{i18n.language === "en" ? "Share" : "مشاركه"}</span>
                  </div>

                  <div
                    className="pre-content "
                    onClick={() => navigate("/services")}
                  >
                    <div className="pre-content-icon">
                      <BsFillSendFill fontSize={"1.8rem"} />
                    </div>
                    <span>{i18n.language === "en" ? "Services" : "خدمات"}</span>
                  </div>
                  <div
                    className="pre-content "
                    onMouseLeave={() => setshowAboutList(false)}
                  >
                    <div
                      className="pre-content-icon"
                      onMouseEnter={() => setshowAboutList(true)}
                    >
                      <BsInfoCircleFill fontSize={"2.5rem"} />
                    </div>
                    <span>{i18n.language === "en" ? "about" : "عننا"}</span>
                    <div
                      className={`share-list ${
                        showAboutList ? "showIt" : "hideIt"
                      }`}
                      style={{ overflowY: "scroll" }}
                    >
                      <span
                        style={{
                          fontSize: "15px",
                          color: "white",
                          padding: "1rem",
                          marginBottom: "1rem",
                          display: "block",
                          height: "100%",
                        }}
                      >
                        {projectDetails?.data?.description}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              {myArray?.length > 0 && (
                <div className="bottom-presentation-content mt-4">
                  <h1 className="text-center mb-5 ">Other Projects</h1>
                  <Row className="d-flex justify-content-center">
                    {myArray?.length > 0 &&
                      myArray.map((ele, idx) => (
                        <Col
                          key={ele?._id}
                          lg={myArray?.length > 2 ? 4 : 6}
                          md={6}
                          className="pre-col mb-4"
                        >
                          <div>
                            <img
                              onClick={() =>
                                navigate("/projects/our-projects", {
                                  state: idx,
                                })
                              }
                              src={ele?.thumbnail}
                            ></img>
                          </div>
                          <span className="mt-2">{ele?.name}</span>
                        </Col>
                      ))}
                  </Row>
                </div>
              )}
            </div>
          )}
        </>
      )}

      <ShareModal
        src={projectDetails?.data?.thumbnail}
        show={openShareModal}
        onHide={() => setOperShareModal(false)}
      />

      {showAbout && (
        <BottomSheet
          showAbout={showAbout}
          setShowAbout={setShowAbout}
          details={projectDetails?.data?.description}
        />
      )}

      {showTools && (
        <ToolsBottomSheet
          showTools={showTools}
          setShowTools={setShowTools}
          tools={projectDetails?.data?.tools}
        />
      )}
    </div>
  );
}

export default Presentation;
