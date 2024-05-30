import React from "react";
import { Button, Modal } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";

function ShareModal(props) {


  

  const copyInstanceIDToClipboard = () => {
    navigator.clipboard
      .writeText(location.href)
      .then(() => {

        toast.success('Copied')

      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body style={{backgroundColor:'black'}}>
        <div className="py-3 px-3 share-modal-div" >
          <h4 className="mb-2">Share Project</h4>
          <p className="mb-2">
            This project is protected by copyright and ownership rights. You can
            reference it via the following URL
          </p>
          <img src={props.src} alt="presentation" />
          <button onClick={copyInstanceIDToClipboard} className="main-btn my-2"> Copy Link</button>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default ShareModal;
