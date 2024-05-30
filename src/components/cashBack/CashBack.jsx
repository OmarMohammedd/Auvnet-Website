import { Link } from "react-router-dom";
import { BsInfoCircleFill } from "react-icons/bs";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
function CashBack() {
  const { t, i18n } = useTranslation();

  const [timeRemaining, setTimeRemaining] = useState(0);
  const [isStored, setIsStored] = useState(
    localStorage.getItem("website-tracking") === "true"
  );

  const [value, setValue] = useState("00:00:00");
  const [storedTime, setStoredTime] = useState(
    parseInt(localStorage.getItem("storedTime"), 10) || Date.now()
  );
  useEffect(() => {
    if (isStored) {
      const elapsedTime = Date.now() - storedTime;
      const remainingTime = 7 * 60 * 60 * 1000 - elapsedTime;
      if (remainingTime > 0) {
        setTimeRemaining(remainingTime);
      } else {
        setIsStored(false);
      }
    }
  }, [isStored, storedTime]);

  const formatTime = () => {
    const hours = Math.floor((timeRemaining / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((timeRemaining / (1000 * 60)) % 60);
    const seconds = Math.floor((timeRemaining / 1000) % 60);

    setValue(`${hours}:${minutes}:${seconds}`);
  };

  useEffect(() => {
    formatTime();
  }, [isStored, timeRemaining, storedTime]);

  useEffect(() => {
    let timer;
    if (isStored && timeRemaining > 0) {
      timer = setInterval(() => {
        setTimeRemaining((prevTime) => prevTime - 1000);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isStored, timeRemaining]);

  useEffect(() => {
    // @ts-ignore
    setIsStored(parseInt(localStorage.getItem("storedTime"), 10) || Date.now());
  }, [localStorage]);
  return (
    <div className="cashback">
      <div className="main-container d-flex align-items-center justify-content-between">
        <div className="left-side">
          <div className="d-flex align-items-center justify-content-center  gap-3">
            <BsInfoCircleFill />
            <div className="first-div">
              {i18n.language === "en"
                ? " CASHBACK 50$ FOR YOUR FIRIST SERVICE"
                : "استرداد نقدي 50 دولارًا مقابل خدمتك الأولى"}
            </div>
            <div className="last-div">
              {value} {i18n.language === "en" ? " Remaining" : "متبقي"}
            </div>
          </div>
        </div>
        <div className="right-side-cachback">
          <Link to="/services">
            {i18n.language === "en" ? " Services" : "الخدمات"}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CashBack;
