import React, { useEffect } from "react";
import { Modal } from "react-bootstrap";

function GetTrackingModal(props) {
  const func = () => {
    props.getTracking({
      token: props.token?.token,
      from: props.from,
      to: props.to,
    });
    props.onHide();
  };
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
        <div className="py-3 px-3 get-track-div">
          <h4
            style={{
              fontSize: "26px",
              fontWeight: "bold",
            }}
            className="mb-3"
          >
            Get Tracking
          </h4>
          <div className="d-flex gap-5 mb-3">
            <div className="d-flex flex-column" style={{ flex: 1 }}>
              <label htmlFor="f">From</label>
              <input
                style={{ borderRadius: "0.5rem", padding: "0.5rem" }}
                id="f"
                className="mb-2"
                value={props.from}
                type="date"
                onChange={(e) => props.setFrom(e.target.value)}
              ></input>
            </div>
            <div className="d-flex flex-column" style={{ flex: 1 }}>
              <label htmlFor="t">To</label>
              <input
                style={{ borderRadius: "0.5rem", padding: "0.5rem" }}
                id="t"
                value={props.to}
                className="mb-2"
                type="date"
                onChange={(e) => props.setTo(e.target.value)}
              ></input>
            </div>
          </div>

          <button
            onClick={func}
            className="main-btn"
            style={{ color: "black", border: "1px solid black" }}
          >
            Track
          </button>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default GetTrackingModal;
