import { IoMenu } from "react-icons/io5";
import "./AdminNavBar.scss";
import { useLocation, useNavigate } from "react-router-dom";
function AdminNavBar({ isLogin = false }) {
  let currentDate = new Date();
  let currentYear = currentDate.getFullYear();
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="navbbar">
      <div className="navbbar_left">
        {!isLogin && (
          <>
            <div
              onClick={() => navigate("/admin/home")}
              className="visitors-counter"
              style={{
                cursor: "pointer",
                opacity: location.pathname.includes("projects") ? 0.5 : 1,
              }}
            >
              Visitors Counters
            </div>
            <div
              onClick={() => navigate("/admin/projects")}
              className="project-management"
              style={{
                cursor: "pointer",
                opacity: location.pathname.includes("projects") ? 1 : 0.5,
              }}
            >
              Projects
            </div>
          </>
        )}
      </div>

      <div className="navbbar_right">
        <div className="year"> {currentYear} </div>
      </div>
    </div>
  );
}

export default AdminNavBar;
