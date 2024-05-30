import { useAdminLoginMutation } from "../../store/auth/AuthApiSlice";
import "./Dachboard_5.css";
import { IoMenu } from "react-icons/io5";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import AdminNavBar from "../../components/adminNavBar/AdminNavBar";
// @ts-ignore
import Dashboard from "../../assets/Dashboard.png";
import HtmlHead from "../../components/HtmlHead/HtmlHead";

const Dachboard_5 = () => {
  const title = 'admin-login';
  const description = 'AUVNET';
  const [formData, setFormData] = useState({
    userName: "",
    password: "",
  });

  useEffect(() => {
    if (sessionStorage.getItem("cyber-security-admin")) {
      navigate("/admin/home");
    }
  }, [sessionStorage]);
  const navigate = useNavigate();
  const [adminLogin, { data, isSuccess, isLoading, error, isError }] =
    useAdminLoginMutation();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData?.userName === "" || formData?.password === "") {
      toast.error("userName,password fileds is required");
    } else {
      await adminLogin({ data: formData }).unwrap();
    }
  };

  useEffect(() => {
    if (isSuccess) {
      setFormData({
        userName: "",
        password: "",
      });
      sessionStorage.setItem("cyber-security-admin", JSON.stringify(data));
      navigate("/admin/home");
    }
    if (isError) {
      // @ts-ignore
      toast.error(error?.data?.message);
    }
  }, [isSuccess, isError, isLoading]);

  return (
<>
      <HtmlHead title={title} description={description} />
      <div className="dachboard_5">
        <div className="main-container">
          <AdminNavBar isLogin={true} />
  
          <div className="circle circle1"></div>
          <div className="circle circle2"></div>
          <div onClick={() => navigate("/admin/home")} className="top_dachboard">
            <div className="square"></div>
            <h1 className="website-name">Website name</h1>
            <img src={Dashboard} alt="" />
          </div>
  
          <div className="section_project_bottom">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Username"
                name="userName"
                value={formData.userName}
                onChange={handleChange}
              />
              <input
                type="password"
                placeholder="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
              <button
                style={{
                  opacity: isLoading ? 0.5 : 1,
                  cursor: isLoading ? "not-allowed" : "pointer",
                }}
                className="main-btn"
                type="submit"
              >
                {isLoading ? "..." : "Login"}
              </button>
            </form>
          </div>
        </div>
      </div>
</>
  );
};

export default Dachboard_5;
