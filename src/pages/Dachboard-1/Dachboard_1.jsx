import { useNavigate } from "react-router-dom";
import AdminNavBar from "../../components/adminNavBar/AdminNavBar";
import "./Dachboard_1.css";
import { useEffect, useState } from "react";
import { useCreateProjectMutation } from "../../store/projects/ProjectsApiSlice";
import { toast } from "react-toastify";
// @ts-ignore
import Vector from "../../assets/Vector (2).png";
// @ts-ignore
import Dashboard from "../../assets/Dashboard.png";
import HtmlHead from "../../components/HtmlHead/HtmlHead";
import Select from "react-select";
import { Spinner } from "react-bootstrap";
const Dachboard_1 = () => {
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
    { value: "Mobile-Application:Flutter", label: "Flutter" },
    { value: "Mobile-Application:React Native", label: "React Native" },
    { value: "Mobile-Application:Xamarin", label: "Xamarin" },
  ];

  const title = "add-project";
  const description = "AUVNET";

  const [formData, setFormData] = useState({
    name: "",
    link: "",
    description: "",
    color: "#000000",
    namespace: "",
    subTitle: "",
  });

  const [token, setToken] = useState(null);
  const [selectedImages, setSelectedImages] = useState([]);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [preSentationImg, setPresentationImg] = useState([]);
  const [tools, setTools] = useState([]);
  const [toolsLabel, setToolsLabel] = useState([]);

  useEffect(() => {
    if (sessionStorage.getItem("cyber-security-admin")) {
      setToken(JSON.parse(sessionStorage.getItem("cyber-security-admin")));
    } else {
      navigate("/admin/login");
    }
  }, [sessionStorage]);
  const navigate = useNavigate();
  // @ts-ignore
  const [createProject, { data, isSuccess, isLoading, error, isError }] =
    useCreateProjectMutation();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      formData?.name === "" ||
      formData?.link === "" ||
      formData?.color === "" ||
      formData?.description === "" ||
      formData?.namespace === "" ||
      formData?.subTitle === ""
    ) {
      toast.error("name, link, color, description fileds is required");
    } else {
      const newformData = new FormData();
      newformData.append("name", formData?.name);
      newformData.append("link", formData?.link);
      newformData.append("description", formData?.description);
      newformData.append("color", formData?.color);
      newformData.append("namespace", formData?.namespace);
      newformData.append("subTitle", formData?.subTitle);
      // @ts-ignore
      newformData.append("tools[]", toolsLabel);
      -(
        // @ts-ignore
        newformData.append("presentation", preSentationImg)
      );
      // @ts-ignore
      selectedFiles.map((e) => newformData.append("thumbnail", e));
      await createProject({ data: newformData, token: token?.token }).unwrap();
    }
  };

  const handleImageChange = (event) => {
    const files = event.target.files;
    const selectedImagesArray = Array.from(files).map((file) =>
      URL.createObjectURL(file)
    );
    setSelectedImages((prevImages) => prevImages.concat(selectedImagesArray));
    setSelectedFiles((prevImages) => prevImages.concat(files[0]));
  };

  useEffect(() => {
    if (isSuccess) {
      setFormData({
        name: "",
        link: "",
        description: "",
        color: "",
        namespace: "",
        subTitle: "",
      });

      toast.success("Done Created");
      navigate("/admin/projects");
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

  const removeImage = (index) => {
    setSelectedImages((prevImages) => prevImages.filter((_, i) => i !== index));
  };

  useEffect(() => {
    if (tools?.length > 0) {
      setToolsLabel(tools.map((e) => e.value));
    }
  }, [tools]);

  return (
    <>
      <HtmlHead title={title} description={description} />
      <div className="dachboard_1">
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
            <div className="section_add_project">
              <h3>ADD PROJECTS</h3>
              <div className="add_project">
                <div className="add_project_left" style={{ flex: 3 }}>
                  <div>
                    {selectedImages.map((imageUrl, index) => (
                      <div
                        key={imageUrl}
                        style={{
                          position: "relative",
                          display: "inline-block",
                        }}
                      >
                        <img
                          src={imageUrl}
                          alt="Uploaded"
                          style={{
                            width: "100px",
                            height: "100px",
                            margin: "5px",
                          }}
                        />
                        <button
                          style={{
                            position: "absolute",
                            top: "5px",
                            right: "10px",
                            padding: "2px",
                            color: "white",
                            border: "none",
                            width: "fit-content",
                            height: "fit-content",
                            cursor: "pointer",
                            background: "transparent",
                          }}
                          onClick={() => removeImage(index)}
                        >
                          X
                        </button>
                      </div>
                    ))}
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
                      onChange={handleImageChange}
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
                              e.target.files[0]
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
                      {isLoading ? "..." : "Create"}
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

export default Dachboard_1;
