import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import classNames from "classnames";
// import Icon from "components/icon/Icon.component";

const Modal = ({
  children,
  modalWrapperClassName,
  className,
  modalChildClassName,
  isOpen,
  handleModalClose,
  modalChildId,
}) => {
  useEffect(() => {
    const escFunction = (event) => {
      if (event.keyCode === 27) handleModalClose();
    };

    document.addEventListener("keydown", escFunction, false);
    return () => {
      document.removeEventListener("keydown", escFunction, false);
    };
    //eslint-disable-next-line
    }, []);

  const modalWrapperClasses = classNames({
    "ns-modal": true,
    [modalWrapperClassName]: modalWrapperClassName,
  });
  const modalClasses = classNames({
    "ns-modal__overlay": true,
    [className]: className,
  });
  const modalChildStyles = classNames({
    children: true,
    [modalChildClassName]: modalChildClassName,
  });

  const handleModalBodyClick = (event) => {
    event.stopPropagation();
  };

  if (isOpen) {
    return ReactDOM.createPortal(
      <div className={modalWrapperClasses} onMouseDown={handleModalClose}>
        <div className={modalClasses} onMouseDown={handleModalBodyClick}>
          <div className={modalChildStyles} id={modalChildId}>
            {children}
          </div>
          {/*<Icon*/}
          {/*  name="close-outline"*/}
          {/*  className="close"*/}
          {/*  onClick={handleModalClose}*/}
          {/*/>*/}
        </div>
      </div>,
      document.getElementById("root")
    );
  } else {
    return null;
  }
};

const ModalHeader = ({ children, className }) => {
  const ModalHeaderStyles = classNames({
    "ns-modal__header": true,
    [className]: className,
  });
  return <div className={ModalHeaderStyles}>{children}</div>;
};

const ModalBody = ({ children, className }) => {
  const bodyStyles = classNames({
    "ns-modal__body": true,
    [className]: className,
  });
  return <div className={bodyStyles}>{children}</div>;
};

export { Modal, ModalHeader, ModalBody };
