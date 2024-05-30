import React, { useEffect, useState } from "react";
import { Button, Nav, Navbar } from "react-bootstrap";
import CustomIcon from "./BurgMenu.jsx";
import "./NavBar.scss";
import { NavLink, useLocation } from "react-router-dom";
import { GrLanguage } from "react-icons/gr";
import CashBack from "../../components/cashBack/CashBack.jsx";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { navBarFunction, navBarFunctionForMobile } from "../../utils/motion.js";
import { BiSolidLeftArrow, BiSolidRightArrow } from "react-icons/bi";

// @ts-ignore
import logo from "../../assets/Union.png";

function NavBar() {
  const [storedTime, setStoredTime] = useState(
    parseInt(localStorage.getItem("storedTime"), 10) || Date.now()
  );

  const elapsedTime = Date.now() - storedTime;
  const remainingTime = 7 * 60 * 60 * 1000 - elapsedTime;
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState("en");

  const toggleLanguage = () => {
    const newLanguage = language === "en" ? "ar" : "en";
    setLanguage(newLanguage);
    i18n.changeLanguage(newLanguage);
    setCollapsed(false);
  };

  let content;
  if (language === "en") {
    if (localStorage.getItem("i18nextLng") === "ar") {
      content = "EN";
    } else {
      content = "AR";
    }
  } else {
    if (localStorage.getItem("i18nextLng") === "en") {
      content = "AR";
    } else {
      content = "EN";
    }
  }

  const [collapsed, setCollapsed] = useState(false);
  const [collapsedNav, setCollapsedNav] = useState(false);
  const [theme, setTheme] = useState("light");
  let location = useLocation();
  // useEffect(() => {
  //   if (location.pathname.includes("/services")) {
  //     let servicePath = location.pathname.substring(
  //       location.pathname.indexOf("/services") + "/services".length
  //     );

  //     if (servicePath.length > 0) {
  //       setTheme("dark");
  //     } else {
  //       setTheme("light");
  //     }
  //   } else {
  //     setTheme("light");
  //   }
  // }, [location]);

  useEffect(() => {
    if (collapsed === false) {
      setTimeout(() => {
        setCollapsedNav(false);
      }, 1000);
    } else {
      setCollapsedNav(true);
    }
  }, [collapsed]);
  return (
    <>
      {collapsed && (
        <div
          className="nav-bar-overlay"
          onClick={() => setCollapsed(false)}
        ></div>
      )}
      {remainingTime > 0 && <CashBack />}
      <div
        className={`main-navbar-dev ${
          remainingTime > 0 && "in-home"
        }`}
        data-theme={theme}
      >
        <Navbar expand="lg">
          <NavLink to="/" onClick={() => setCollapsed(false)}>
            <div className="d-flex align-items-center justify-content-center gap-3">
              <img src={logo} alt="logo" className="logo"></img>
              <div className="logo-txt">
                {i18n.language === "en" && "AUVNET"}
                {i18n.language === "ar" && "اوڤنيت"}
              </div>
            </div>
          </NavLink>
          <Navbar.Toggle
            as={() => CustomIcon(collapsed, setCollapsed, theme)}
            aria-controls="basic-navbar-nav"
          />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className={`justify-content-end ${collapsedNav && "collapse show"}`}
          >
            <motion.div
            
              style={{ overflow: "hidden" }}
              variants={
                window.innerWidth > 992
                  ? navBarFunction(0.75)
                  : navBarFunctionForMobile(0.75)
              }
              initial="hidden"
              whileInView={collapsed ? "show" : "exit"}
            >
              <Nav className="inside-nav">
                <div
                  onClick={toggleLanguage}
                  className="menuu special-link  d-flex align-items-center  gap-2 logo-link"
                >
                  <GrLanguage fontSize={"20px"} />
                  {content}
                </div>

                <NavLink
                  className="nav-bar-cell"
                  to="/"
                  onClick={() => setCollapsed(false)}
                >
                  {i18n.language === "en" && "Home"}
                  {i18n.language === "ar" && "الصفحة الرئيسية"}
                </NavLink>
                <NavLink
                  className="nav-bar-cell"
                  to="/projects"
                  onClick={() => setCollapsed(false)}
                >
                  {i18n.language === "en" && "Projects"}
                  {i18n.language === "ar" && "المشاريع"}
                </NavLink>
                <NavLink
                  className="nav-bar-cell"
                  to="/courses"
                  onClick={() => setCollapsed(false)}
                >
                  {i18n.language === "en" && "Courses"}
                  {i18n.language === "ar" && "الدورات"}
                </NavLink>
                <NavLink
                  className="nav-bar-cell"
                  to="/services"
                  onClick={() => setCollapsed(false)}
                >
                  {i18n.language === "en" && "Services"}
                  {i18n.language === "ar" && "الخدمات"}
                </NavLink>
                <NavLink
                  className="nav-bar-cell"
                  to="/about"
                  onClick={() => setCollapsed(false)}
                >
                  {i18n.language === "en" && "About"}
                  {i18n.language === "ar" && "عننا"}
                </NavLink>
                <NavLink
                  className="nav-bar-cell"
                  to="/contact"
                  onClick={() => setCollapsed(false)}
                >
                  {i18n.language === "en" && "Contact Us"}
                  {i18n.language === "ar" && "اتصل بنا"}
                </NavLink>
                {/* <NavLink
                  className="nav-bar-cell"
                  to="/admin/login"
                  onClick={() => setCollapsed(false)}
                >
                  {i18n.language === "en" && "Admin"}
                  {i18n.language === "ar" && "ادمن"}
                </NavLink> */}
              </Nav>
            </motion.div>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </>
  );
}

export default NavBar;
