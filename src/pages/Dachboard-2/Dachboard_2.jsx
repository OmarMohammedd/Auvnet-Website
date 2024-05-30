import { useLocation, useNavigate } from "react-router-dom";
import AdminNavBar from "../../components/adminNavBar/AdminNavBar";
import "./Dachboard_2.css";
import Select from "react-select";
import { useEffect, useState } from "react";
import {
  useDeleteProjectImgsMutation,
  useGetProjectQuery,
  useUpdateProjectMutation,
  useUploadImgsMutation,
} from "../../store/projects/ProjectsApiSlice";
import { toast } from "react-toastify";
// @ts-ignore
import Vector from "../../assets/Vector (2).png";
// @ts-ignore
import Dashboard from "../../assets/Dashboard.png";
import HtmlHead from "../../components/HtmlHead/HtmlHead";
import { Spinner } from "react-bootstrap";

const Dachboard_2 = () => {
  const title = "project-details";
  const description = "AUVNET";

  const navigate = useNavigate();
  const colourOptions = [
    { value: "UIUX:Figma", label: "Figma" },
    { value: "UIUX:Adobe XD", label: "Adobe XD" },
    { value: "UIUX:Sketch", label: "Sketch" },
    { value: "Graphic-Design:Adobe Photoshop", label: "Adobe Photoshop" },
    { value: "Graphic-Design:Adobe Illustrator", label: "Adobe Illustrator" },
    { value: "Graphic-Design:Canva", label: "Canva" },
    { value: "Front-End:React js", label: "React js" },
    { value: "Front-End:Vue js", label: "Vue js" },
    { value: "Front-End:Angular js", label: "Angular js" },
    { value: "Back-End:Node js", label: "Node js" },
    { value: "Back-End:Php Laravel", label: "Php Laravel" },
    { value: "Back-End:ASP.net", label: "ASP.net" },
    {
      value: "Mobile-Application:iOS (Swift/Objective-C)",
      label: "iOS (Swift/Objective-C)",
    },
    {
      value: "Mobile-Application:Android (Java/Kotlin)",
      label: "Android (Java/Kotlin)",
    },
    {
      value: "Mobile-Application:Android (Java/Kotlin)",
      label: "Android (Java/Kotlin)",
    },
    { value: "Mobile-Application:Flutter", label: "Flutter" },
    { value: "Mobile-Application:React Native", label: "React Native" },
    { value: "Mobile-Application:Xamarin", label: "Xamarin" },
  ];

  const [token, setToken] = useState(null);
  const [preSentationImg, setPresentationImg] = useState([]);
  const [updateThumbnailImg, setUpdateThumbnailImg] = useState([]);
  const [thumbnailImg, setThumbnailImg] = useState(null);
  const [tools, setTools] = useState([]);
  const [handled, setHandled] = useState(0);
  const [preNewImg, setPreNewImg] = useState(null);
  const [toolsLabel, setToolsLabel] = useState([]);
  const [makeUpdate, setMakeUpdate] = useState(false);
  const { data: projectDetails, isLoading: getprojectLoading } =
    useGetProjectQuery({
      name: localStorage.getItem("namespace"),
    });
  const [formData, setFormData] = useState({
    name: "",
    link: "",
    description: "",
    namespace: "",
    color: projectDetails?.data?.color,
    subTitle:"",
  });

  useEffect(() => {
    if (sessionStorage.getItem("cyber-security-admin")) {
      setToken(JSON.parse(sessionStorage.getItem("cyber-security-admin")));
    } else {
      navigate("/admin/login");
    }
  }, [sessionStorage]);

  const [updateProject, { data, isSuccess, isLoading, error, isError }] =
    useUpdateProjectMutation();
  const [uploadImgs, { data: uploadedImgsForUpdate, isLoading: upIsLoading }] =
    useUploadImgsMutation();
  const [deleteProjectImgs, { data: deletedData }] =
    useDeleteProjectImgsMutation();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleUploadImgsPresentation = async () => {
    if (preSentationImg?.length > 0) {
      const newformData = new FormData();
      // @ts-ignore
      newformData.append("images", preSentationImg[0]);
      await uploadImgs({
        data: newformData,
        token: token?.token,
      }).unwrap();

      setHandled(2);
    }
  };
  const handleUploadImgsThumbnail = async () => {
    if (updateThumbnailImg?.length > 0) {
      const newformData = new FormData();
      // @ts-ignore
      newformData.append("images", updateThumbnailImg[0]);
      await uploadImgs({
        data: newformData,
        token: token?.token,
      }).unwrap();

      setHandled(1);
    }
  };
  const handleDeleteImgsPresentation = async () => {
    if (preSentationImg?.length > 0) {
      const presentationUrl = projectDetails?.data?.presentation?.replace(
        "https://media.auvnet.com",
        "../media"
      );
      await deleteProjectImgs({
        data: { images: [presentationUrl] },
        token: token?.token,
      }).unwrap();
    }
  };
  const handleDeleteImgsThumbnail = async () => {
    if (updateThumbnailImg?.length > 0) {
      const presentationUrl = projectDetails?.data?.thumbnail?.replace(
        "https://media.auvnet.com",
        "../media"
      );
      await deleteProjectImgs({
        data: { images: [presentationUrl] },
        token: token?.token,
      }).unwrap();
    }
  };
  const handleUpdateProject = async () => {
    await updateProject({
      data: {
        ...formData,
        presentation: preNewImg,
        thumbnail: thumbnailImg,
        tools: toolsLabel,
      },
      token: token?.token,
      id: projectDetails?.data._id,
    }).unwrap();

    setMakeUpdate(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      formData?.name === "" ||
      formData?.link === "" ||
      formData?.color === "" ||
      formData?.description === "" ||
      formData?.namespace === "" || 
      formData?.subTitle ===""
    ) {
      toast.error("name, link, color, description fileds is required");
    } else {
      await handleUploadImgsPresentation();
      await handleDeleteImgsPresentation();
      await handleUploadImgsThumbnail();
      await handleDeleteImgsThumbnail();
      setPresentationImg([]);
      setMakeUpdate(true);
    }
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    // console.log(file);
    setThumbnailImg(URL.createObjectURL(file));
    setUpdateThumbnailImg(event.target.files);
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success("Done Updated");
      // navigate("/admin/projects");
    }
    if (isError) {
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
    }
  }, [isSuccess, isError, isLoading]);

  useEffect(() => {
    if (projectDetails?.data?._id) {
      setFormData({
        name: projectDetails?.data?.name,
        link: projectDetails?.data?.link,
        description: projectDetails?.data?.description,
        color: projectDetails?.data?.color,
        namespace: projectDetails?.data?.namespace,
        subTitle: projectDetails?.data?.subTitle,
      });

      const myTools = colourOptions.filter((e) =>
         JSON.parse(projectDetails?.data?.tools)?.includes(e.value)
      );
      setPreNewImg(projectDetails?.data?.presentation);
      setThumbnailImg(projectDetails?.data?.thumbnail);

      setTools(myTools);
    }
  }, [projectDetails]);

  useEffect(() => {
    if (isSuccess) {
      if (data?.data?._id) {
        setFormData({
          name: data?.data?.name,
          link: data?.data?.link,
          description: data?.data?.description,
          color: data?.data?.color,
          namespace: data?.data?.namespace,
          subTitle: data?.data?.subTitle,
        });
      }
    }
  }, [isSuccess]);

  useEffect(() => {
    if (tools?.length > 0) {
      setToolsLabel(tools.map((e) => e.value));
    }
  }, [tools]);
  useEffect(() => {
    if (handled === 2) {
      setPreNewImg(uploadedImgsForUpdate?.data[0]);
    }
    if (handled === 1) {
      setThumbnailImg(uploadedImgsForUpdate?.data[0]);
    }

    if (makeUpdate) {
      handleUpdateProject();
    }
  }, [handled, uploadedImgsForUpdate, makeUpdate]);

  console.log(formData)

  return (
    <>
      <HtmlHead title={title} description={description} />
      <div className="dachboard_2">
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

          {getprojectLoading ? (
            <div className="d-flex align-items-center justify-content-center spinner-div">
              <Spinner animation="grow" variant="success" />
            </div>
          ) : (
            <div className="section_add_project">
              <h3>EDIT PROJECTS</h3>
              <div className="add_project">
                <div className="add_project_left" style={{ flex: 3 }}>
                  <div>
                    <div
                      style={{ position: "relative", display: "inline-block" }}
                    >
                      <img
                        src={thumbnailImg}
                        alt="Uploaded"
                        style={{
                          width: "100px",
                          height: "100px",
                          margin: "5px",
                        }}
                      />
                    </div>
                  </div>

                  <div>
                    <label style={{ cursor: "pointer" }} htmlFor="imgs">
                      <img className="first_img" src={Vector} alt="" />
                    </label>
                    <input
                      type="file"
                      accept="image/*"
                      id="imgs"
                      style={{ display: "none" }}
                      onChange={(e) => handleImageChange(e)}
                    />
                  </div>
                </div>
                <div className="add_project_right" style={{ flex: 7 }}>
                  <form action="">
                    <div className="new-add-project-form div mb-5">
                      <div className="div">
                        <label htmlFor="">Project Name</label>
                        <input
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          type="text"
                          placeholder="Project Name"
                        />
                      </div>
                      <div className="div">
                        <label htmlFor="">Project Link</label>
                        <input
                          name="link"
                          value={formData.link}
                          onChange={handleChange}
                          type="text"
                          placeholder="WWW.PROJECT.COM"
                        />
                      </div>
                      <div className="div">
                        <label htmlFor="">namespace</label>
                        <input
                          name="namespace"
                          value={formData.namespace}
                          onChange={handleChange}
                          type="text"
                          placeholder="namespace"
                        />
                      </div>
                      <div className="div">
                        <label htmlFor="">subTitle</label>
                        <input
                          name="subTitle"
                          value={formData.subTitle}
                          onChange={handleChange}
                          type="text"
                          placeholder="subTitle"
                        />
                      </div>

                      <div className="div">
                        <label htmlFor="">Color Theme</label>
                        <div
                          className="div"
                          style={{
                            position: "relative",
                            padding: "15px",
                            background: "#D9D9D9",
                            borderRadius: "8px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            flexDirection: "row",
                          }}
                        >
                          <span>{formData?.color}</span>
                          <input
                            type="color"
                            id="colorPicker"
                            name="color"
                            value={formData.color}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-between gap-2 mb-5">
                      <div className="div" style={{ flex: 3 }}>
                        <label htmlFor="">Tools Used</label>
                        <Select
                          isMulti
                          name="colors"
                          options={colourOptions}
                          className="basic-multi-select"
                          classNamePrefix="select"
                          value={tools}
                          // @ts-ignore
                          onChange={(e) => setTools(e)}
                        />
                      </div>
                      <div
                        className="presentation-file div"
                        style={{ flex: 2 }}
                      >
                        <label htmlFor="">Presentation</label>
                        <input
                          type="file"
                          onChange={(e) =>
                            setPresentationImg(
                              // @ts-ignore
                              e.target.files
                            )
                          }
                        />
                      </div>
                    </div>
                    <div className="div">
                      <label htmlFor="">Project Description</label>
                      <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        className="last_input"
                        placeholder="ABCD"
                      />
                    </div>
                  </form>
                  <div className="add-project-btns d-flex ml-auto mt-5">
                    <button>Preview</button>
                    <button
                      onClick={handleSubmit}
                      style={{
                        opacity: isLoading ? 0.5 : 1,
                        cursor: isLoading ? "not-allowed" : "pointer",
                      }}
                      className="main-btn"
                      type="submit"
                    >
                      {isLoading ? "..." : "Update"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Dachboard_2;
