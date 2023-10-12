import React, { useEffect, useState } from "react";
import CustomButton from "../Button/Button";
import "../../assets/modalDialog.css";
import CloseIcon from "../../assets/images/closeIcon.png";

interface ModalDialogProps {
  isVisible: boolean;
  title: string;
  showTitle: boolean;
  children: React.ReactNode;
  abortButtonText: string;
  confirmButtonText: string;
  abort: () => void;
  confirm: () => void;
}

function ModalDialog(props: ModalDialogProps) {
  const [isVisible, setIsVisible] = useState(props.isVisible);

  useEffect(() => {
    setIsVisible(props.isVisible);
  }, [props.isVisible]);

  const closeModal = () => {
    setIsVisible(false);
    props.abort();
  };

  return (
    <div style={{ display: isVisible ? "block" : "none" }}>
      <div className="modal-mask">
        <div className="modal-wrapper">
          <div className="modal-container">
            {props.showTitle && (
              <div className="modal-header">
                <h2>{props.title}</h2>
                <img
                  src={CloseIcon}
                  alt="CloseIcon"
                  className="modal-dialog-close-icon"
                  onClick={closeModal}
                />
              </div>
            )}
            <div className="modal-body">
              <div className="modal-default-content">{props.children}</div>
            </div>
          </div>
          <div className="modal-footer">
            <CustomButton
              text={props.abortButtonText}
              onClick={closeModal}
              cancel={true}
            />
            <CustomButton
              text={props.confirmButtonText}
              onClick={props.confirm}
              secondary={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalDialog;
