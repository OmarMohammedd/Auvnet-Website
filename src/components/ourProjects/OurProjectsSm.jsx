import { useState } from "react";
import "./OurProjectsSm.scss";
import { useGetAllProjectsQuery } from "../../store/projects/ProjectsApiSlice";
import Noprojects from "../../pages/NoProjects/Noprojects";
import OurProjectsLeftSideSM from "./OurProjectsLeftSlideSm";
import MainContentSM from "./MainContentSM";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

function OurProjectsSm() {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);
  const { data } = useGetAllProjectsQuery();
  const [showDesc, setShowDesc] = useState(true);

  return (
    <div className="sm-screen-show our-projects-sm">
      {data?.data?.length > 0 ? (
        <div
          className="our-projects"
          style={{
            backgroundImage: `linear-gradient(to bottom, ${data?.data[index].color} -50%, rgba(175, 25, 94, 0) 50%, var(--background-color) 100%)`,
          }}
        >
          <div className="content main-container">
            <OurProjectsLeftSideSM
              data={data?.data}
              index={index}
              setIndex={setIndex}
            />

            <MainContentSM index={index} data={data} showDesc={showDesc} />

            <div className="right-side-sm-details">
              <p>{data?.data[index].description}</p>
              <a href={`https://${data?.data[index]?.link}`} className="main-btn">
                {i18n.language === "en" && "Click here to visit Project"}
                {i18n.language === "ar" && "انقر هنا لزيارة المشروع"}
              </a>
              <a
                onClick={() => {
                  navigate(`/projects/${data?.data[index]?.namespace}`, {
                    state: data?.data[index],
                  });
                  localStorage.setItem('namespace' ,data?.data[index]?.namespace )
                }}
                className="main-btn"
                style={{ backgroundColor: "#3B82F666", borderColor: "#3B82F6" }}
              >
                {i18n.language === "en" && "About this Project"}
                {i18n.language === "ar" && "حول هذا المشروع"}
              </a>
            </div>
          </div>
        </div>
      ) : (
        <Noprojects />
      )}
    </div>
  );
}

export default OurProjectsSm;
