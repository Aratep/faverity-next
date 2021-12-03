import React from "react";

//BASE COMPONENTS
import { Modal } from "components/modal/Modal.component";
import Button from "components/button/Button.component";
import IsVisible from "components/is-visible/IsVisible.component";

const ConfirmationModal = ({
  isLoading,
  isOpen,
  handleModalClose,
  onClick,
  text,
}) => {
  return (
    <Modal
      modalChildClassName="u-min-width__25 confirmation-modal"
      isOpen={isOpen}
      handleModalClose={() => handleModalClose(false)}>
      <h3>Sind Sie sicher?</h3>
      <IsVisible isVisible={text}>
        <div className="confirmation-modal__text">{text}</div>
      </IsVisible>
      <div className="confirmation-modal__buttons-block">
        <Button onClick={() => handleModalClose(false)}>Nein</Button>
        <Button variant="danger" onClick={onClick} isLoading={isLoading}>
          Ja
        </Button>
      </div>
    </Modal>
  );
};

export default ConfirmationModal;
