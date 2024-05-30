import "./Dachboard_3.css";
import { IoMenu } from "react-icons/io5";
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { useEffect, useState } from "react";
import AdminNavBar from "../../components/adminNavBar/AdminNavBar";
import { Link, useNavigate } from "react-router-dom";
import {
  useDeleteProjectImgsMutation,
  useDeleteProjectMutation,
  useGetAllProjectsQuery,
} from "../../store/projects/ProjectsApiSlice";
import { toast } from "react-toastify";
// @ts-ignore
import Dashboard from "../../assets/Dashboard.png";
import HtmlHead from "../../components/HtmlHead/HtmlHead";
import { Spinner } from "react-bootstrap";

const Dachboard_3 = () => {
  const title = "projects";
  const description = "AUVNET";
  const [token, setToken] = useState(null);
  const [id, setId] = useState(null);
  const [imgs, setImgs] = useState([]);

  const { data, isLoading, error, refetch } = useGetAllProjectsQuery({
    token: token?.token,
  });

  const [
    deleteProject,
    {
      isSuccess,
      isLoading: deleteLoading,
      error: deleteError,
      isError: deleteIsError,
    },
  ] = useDeleteProjectMutation();
  const [
    deleteProjectImgs,
    {
      isSuccess: isSuccessImg,
      isLoading: deleteLoadingimg,
      error: deleteErrorimg,
      isError: deleteIsErrorimg,
    },
  ] = useDeleteProjectImgsMutation();
  const [toggleModel, setToggleModel] = useState(true);

  useEffect(() => {
    if (sessionStorage.getItem("cyber-security-admin")) {
      setToken(JSON.parse(sessionStorage.getItem("cyber-security-admin")));
    } else {
      navigate("/admin/login");
    }
  }, [sessionStorage]);
  const navigate = useNavigate();
  const handleClick = () => {
    setToggleModel(!toggleModel);
  };
  const deleteHandler = async () => {
    setToggleModel(!toggleModel);
    await deleteProjectImgs({
      data: { images: imgs },
      token: token?.token,
    });
    await deleteProject({ token: token?.token, id });
  };
  useEffect(() => {
    refetch();
  }, []);

  const handleDeleteProject = (project) => {
    // console.log(id)
    setId(project?._id);
    setImgs(project?.images);
    handleClick();
  };

  // console.log(imgs)
  useEffect(() => {
    // @ts-ignore
    if (error?.data?.message) {
      // @ts-ignore
      toast.error(error?.data?.message);
    }
    // @ts-ignore
    if (error?.data?.error) {
      // @ts-ignore
      toast.error(error?.data?.error);
    }
    // @ts-ignore
    if (deleteErrorimg?.data?.message) {
      // @ts-ignore
      toast.error(deleteErrorimg?.data?.message);
    }
    // @ts-ignore
    if (deleteErrorimg?.data?.error) {
      // @ts-ignore
      toast.error(deleteErrorimg?.data?.error);
    }
    // @ts-ignore
    if (deleteError?.data?.message) {
      // @ts-ignore
      toast.error(deleteError?.data?.message);
    }
    // @ts-ignore
    if (deleteError?.data?.error) {
      // @ts-ignore
      toast.error(deleteError?.data?.error);
    }
    if (isSuccess) {
      toast.success("Done Deleted");
      refetch();
    }
  }, [isLoading, deleteIsError, isSuccess, deleteErrorimg, isSuccessImg]);
  return (
    <>
      <HtmlHead title={title} description={description} />
      <div className="dachboard_3">
        <div className="main-container">
          <AdminNavBar />

          <div className="circle circle1"></div>
          <div className="circle circle2"></div>
          <div
            onClick={() => navigate("/admin/home")}
            className="top_dachboard"
          >
            <div className="square"></div>
            <h1 className="website-name">Website name</h1>
            <img src={Dashboard} alt="" />
          </div>

          {isLoading ? (
            <div className="d-flex align-items-center justify-content-center spinner-div">
              <Spinner animation="grow" variant="success" />
            </div>
          ) : (
            <div className="section_project_parent p-relative">
              <Link
                to="/admin/projects/add-project"
                style={{
                  display: "flex",
                  marginLeft: "auto",
                  fontSize: "20px",
                  fontWeight: 500,
                  cursor: "pointer",
                  textTransform: "uppercase",
                  textDecoration: "underline",
                  color: "white",
                }}
              >
                +Add Project
              </Link>
              {data?.data.map((project, index) => (
                <div
                  className="section_project"
                  style={{ zIndex: 9999, position: "relative" }}
                  key={index}
                >
                  <div className="section_project_left">
                    <div className="index">{index + 1}</div>
                    <div className="project_details">
                      <a href={`https://${project?.link}`} className="name_project">
                        {project?.name}
                      </a>
                      <div
                        className="color"
                        style={{ backgroundColor: project?.color }}
                      ></div>
                    </div>
                  </div>
                  <div className="section_project_right">
                    <CiEdit
                      className="edit"
                      onClick={() => {
                        navigate(
                          `/admin/projects/project-details/${project?._id}`,
                          {
                            state: project,
                          }
                        );
                        localStorage.setItem('namespace',project?.namespace)
                      }}
                    />
                    <MdDelete
                      className="delete"
                      onClick={() => handleDeleteProject(project)}
                    />
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className={toggleModel ? "custom-box" : "custom-box CloseModel"}>
            <div className="custom-boxx">
              <IoClose className="iconclose" onClick={handleClick} />
              <p>
                Are You Sure You Want to <span>Delete</span> this Project
              </p>

              <div className="parent_button">
                <button className="yes" onClick={deleteHandler}>
                  YES
                </button>
                <button className="no" onClick={handleClick}>
                  NO
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dachboard_3;
