import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
// @ts-ignore
import BurgMenu from "../../assets/burgMenu.svg";
// @ts-ignore
import BurgMenudark from "../../assets/darkmenu.svg";
// @ts-ignore
import blackImg from "../../assets/blackOPenMenu.svg";
// @ts-ignore
import whiteImg from "../../assets/whiteOpenMenu.svg";
import { showHideFunction } from "../../utils/motion";
const CustomIcon = (collapsed, setCollapsed, theme) => {
  const [burgimg, setBurgimg] = useState(BurgMenu);

  const [isDisabbled, setIsDessaled] = useState(false);

  useEffect(() => {
    if (theme === "light") {
      if (collapsed) {
        setBurgimg(whiteImg);
      } else {
        setBurgimg(burgimg);
      }
    } else {
      if (collapsed) {
        setBurgimg(blackImg);
      } else {
        setBurgimg(BurgMenudark);
      }
    }
  }, [theme, collapsed]);

  useEffect(() => {
      setIsDessaled(true);

    setTimeout(() => {
      setIsDessaled(false);
    }, 1000);
  }, [collapsed]);

  console.log(isDisabbled)

  return (
    <span
      aria-controls="basic-navbar-nav"
      aria-label="Toggle navigation"
      className={`navbar-toggler  ${collapsed && "collapsed"}`}
      style={{
        border: 0,
        cursor: "pointer",
      }}
    >
      {!isDisabbled ? (
        <img
          onClick={() => setCollapsed((prev) => !prev)}
          src={burgimg}
          alt="burg icon"
          style={{ width: "22px", height: "15px" }}
        />
      ) : (
        <img
          src={burgimg}
          alt="burg icon"
          style={{ width: "22px", height: "15px" }}
        />
      )}
    </span>
  );
};
export default CustomIcon;
