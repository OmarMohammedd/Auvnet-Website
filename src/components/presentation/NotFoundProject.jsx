import React from "react";
// @ts-ignore
import notFoundImg from "../../assets/no-project-pre.png";
import { useNavigate } from "react-router-dom";
function NotFoundProject() {
    const navigate = useNavigate()
  return (
    <div
      style={{ height: "70vh" }}
      className="  not-found-project d-flex align-items-center justify-content-center"
    >
      <div className="d-flex flex-column gap-4 align-items-center justify-content-center">
        <img src={notFoundImg} alt="" />
        <h1>This Project Not Found Right Now</h1>
        <button onClick={() => navigate('/projects/our-projects')}>Back To Projects</button>
      </div>
    </div>
  );
}

export default NotFoundProject;
