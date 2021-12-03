import React from "react";

// BASE COMPONENTS
import { Modal } from "components/modal/Modal.component";
import LoaderWrapper from "components/loader-wrapper/LoaderWrapper.component";

const MenuItemsModal = ({ itemsList, isOpen, toggleOpen }) => {
  return (
    <div className="fy-menu-items display-none">
      <Modal
        isOpen={isOpen}
        handleModalClose={toggleOpen}
        modalWrapperClassName="fy-menu-items__modal-wrapper"
        className="fy-menu-items__modal">
        {itemsList.length > 0 &&
          itemsList.map((item) => {
            return (
              <LoaderWrapper isLoading={item.isLoading} key={item.id}>
                <div
                  className="fy-menu-items__label"
                  key={item.id}
                  onClick={item.onClick}>
                  {item.label}
                </div>
              </LoaderWrapper>
            );
          })}
      </Modal>
    </div>
  );
};

export default MenuItemsModal;
