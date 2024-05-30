import "./Dachboard_4.css";
import { IoMenu } from "react-icons/io5";
import { IoReload } from "react-icons/io5";
import { CgCalendarDates } from "react-icons/cg";
import AreaChart from "../../components/charts/AreaChart.jsx";
import AdminNavBar from "../../components/adminNavBar/AdminNavBar";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
// @ts-ignore
import Dashboard from "../../assets/Dashboard.png";
import HtmlHead from "../../components/HtmlHead/HtmlHead";
import GetTrackingModal from "../../components/presentation/getTrackingModal";
import { useGetTrackingMutation } from "../../store/tracking/TrackingApiSlice";
import dayjs from "dayjs";
import { Spinner } from "react-bootstrap";
const Dachboard_4 = () => {
  const title = "dachboard";
  const description = "AUVNET";
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [token, setToken] = useState(null);
  const [to, setTo] = useState(dayjs().format("YYYY-MM-DD"));
  const [from, setFrom] = useState(
    dayjs().subtract(1, "month").format("YYYY-MM-DD")
  );
  const [getTracking, { data, isLoading, isSuccess }] =
    useGetTrackingMutation();
  useEffect(() => {
    if (sessionStorage.getItem("cyber-security-admin")) {
      setToken(JSON.parse(sessionStorage.getItem("cyber-security-admin")));
    } else {
      navigate("/admin/login");
    }
  }, [sessionStorage]);
  useEffect(() => {
    getTracking({ token: token?.token, from, to });
  }, [token]);
  // console.log(console.log(data));
  return (
    <>
      <HtmlHead title={title} description={description} />
      <div className="dachboard_4">
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
            <>
              {" "}
              <div className="section_project_bottom">
                <div className="parentt_cardd">
                  <div className="carddd">
                    <div className="top_carddd">
                      <div className="left_top_carddd">
                        <h4>Services</h4>
                        <p>
                          Last update <span>{data?.data[0]?.date}</span>
                        </p>
                      </div>
                      <div className="right_top_carddd">
                        <IoReload className="realod" />
                        <CgCalendarDates
                          style={{ cursor: "pointer" }}
                          onClick={() => setShow(true)}
                        />
                      </div>
                    </div>
                    <div className="bottom_carddd">
                      <div>Number of Visitors </div>
                      <p>{data?.data[0]?.services?.length || 0}</p>
                    </div>
                  </div>
                  <div className="carddd">
                    <div className="top_carddd">
                      <div className="left_top_carddd">
                        <h4>Projects</h4>
                        <p>
                          Last update <span>{data?.data[0]?.date}</span>
                        </p>
                      </div>
                      <div className="right_top_carddd">
                        <IoReload className="realod" />
                        <CgCalendarDates
                          style={{ cursor: "pointer" }}
                          onClick={() => setShow(true)}
                        />
                      </div>
                    </div>
                    <div className="bottom_carddd">
                      <div>Number of Visitors </div>
                      <p>{data?.data[0]?.projects?.length || 0}</p>
                    </div>
                  </div>
                  <div className="carddd">
                    <div className="top_carddd">
                      <div className="left_top_carddd">
                        <h4>Courses</h4>
                        <p>
                          Last update <span>{data?.data[0]?.date}</span>
                        </p>
                      </div>
                      <div className="right_top_carddd">
                        <IoReload className="realod" />
                        <CgCalendarDates
                          style={{ cursor: "pointer" }}
                          onClick={() => setShow(true)}
                        />
                      </div>
                    </div>
                    <div className="bottom_carddd">
                      <div>Number of Visitors </div>
                      <p>{data?.data[0]?.courses?.length || 0}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="admin-chart mt-5">
                <AreaChart chartData={data?.data} />
              </div>
              <GetTrackingModal
                setFrom={setFrom}
                setTo={setTo}
                from={from}
                to={to}
                show={show}
                onHide={() => setShow(false)}
                getTracking={getTracking}
                token={token}
                isSuccess={isSuccess}
              />
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Dachboard_4;
