import Sheet from "react-modal-sheet";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./BottomSheet.scss";
import { useTranslation } from "react-i18next";
export default function BottomSheet({ setShowAbout, showAbout , details }) {
  return (
    <>
      <Sheet
        className="services-hide"
        isOpen={showAbout}
        snapPoints={[700, 500, 0]}
        onClose={() => {
          setShowAbout(false);
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
              <h1>about</h1>
              <span>
              {details}
              </span>
            </div>
          </Sheet.Content>
        </Sheet.Container>
        <Sheet.Backdrop />
      </Sheet>
    </>
  );
}
