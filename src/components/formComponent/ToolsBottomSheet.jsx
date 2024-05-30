import Sheet from "react-modal-sheet";
import "./BottomSheet.scss";
// @ts-ignore
import nextImg from "../../assets/next.png";
// @ts-ignore
import flutter from "../../assets/flutter.jpg";
// @ts-ignore
import reactNative from "../../assets/react-native.jpg";
// @ts-ignore
import Xarvarin from "../../assets/xamarin.jpg";
// @ts-ignore
import kotlin from "../../assets/kotlin.png";
// @ts-ignore
import swift from "../../assets/swift.png";
// @ts-ignore
import nodeJS from "../../assets/nodejs.jpg";
// @ts-ignore
import php from "../../assets/phpLaravel.png";
// @ts-ignore
import asp from "../../assets/asp.net.jpg";
// @ts-ignore
import react from "../../assets/react.jpg";
// @ts-ignore
import vue from "../../assets/vue.jpg";
// @ts-ignore
import angular from "../../assets/angular.jpg";
// @ts-ignore
import canva from "../../assets/canva.jpg";
// @ts-ignore
import photoshop from "../../assets/adobyPhotoshop.jpg";
// @ts-ignore
import illustrator from "../../assets/adobyIllustrator.webp";
// @ts-ignore
import figma from "../../assets/figma.jpg";
// @ts-ignore
import xd from "../../assets/adobyXd.jpg";
// @ts-ignore
import sketch from "../../assets/sketch.png";

import { useEffect, useState } from "react";
export default function ToolsBottomSheet({
  setShowTools,
  showTools,
  tools = [],
}) {
  const [tool, setTool] = useState("next.js");

  const getIcon = (e) => {
    let img = nextImg;
    if (e === "Mobile-Application:Flutter") {
      img = flutter;
    }
    if (e === "Mobile-Application:React Native") {
      img = reactNative;
    }
    if (e === "Mobile-Application:Xamarin") {
      img = Xarvarin;
    }
    if (e === "Mobile-Application:iOS (Swift/Objective-C)") {
      img = swift;
    }
    if (e === "Mobile-Application:Android (Java/Kotlin)") {
      img = kotlin;
    }
    if (e === "Back-End:Node js") {
      img = nodeJS;
    }
    if (e === "Back-End:Php Laravel") {
      img = php;
    }
    if (e === "Back-End:ASP.net") {
      img = asp;
    }
    if (e === "Front-End:React js") {
      img = react;
    }
    if (e === "Front-End:Vue js") {
      img = vue;
    }
    if (e === "Front-End:Angular js") {
      img = angular;
    }
    if (e === "Graphic-Design:Canva") {
      img = canva;
    }
    if (e === "Graphic-Design:Adobe Illustrator") {
      img = illustrator;
    }
    if (e === "Graphic-Design:Adobe Photoshop") {
      img = photoshop;
    }
    if (e === "UIUX:Figma") {
      img = figma;
    }
    if (e === "UIUX:Adobe XD") {
      img = xd;
    }
    if (e === "UIUX:Sketch") {
      img = sketch;
    }

    return <img src={img} alt="alternative img" />;
  };
  // console.log(tools)
  return (
    <>
      <Sheet
        className="services-hide"
        isOpen={showTools}
        snapPoints={[700, 500, 0]}
        onClose={() => {
          setShowTools(false);
        }}
      >
        <Sheet.Container
          style={{ backgroundColor: "transparent" }}
          className="main-container bottomSheat-present"
        >
          <Sheet.Header />
          <Sheet.Content>
            <div
              className=" d-flex align-items-cneter justify-content-center flex-column  text-center"
              style={{ gap: "3rem" }}
            >
              <h1>tools</h1>
              {tools.map((e) => (
                <div
                  className="tools-list-sm  d-flex align-items-center gap-2  "
                  style={{ backgroundColor: "white" }}
                >
                  <div className="d-flex justify-content-end" style={{flex:3}}>{getIcon(e)}</div>
                  <span className="text-start" style={{flex:3}}>{e.split(":")[1]}</span>
                </div>
              ))}
            </div>
          </Sheet.Content>
        </Sheet.Container>
        <Sheet.Backdrop />
      </Sheet>
    </>
  );
}
