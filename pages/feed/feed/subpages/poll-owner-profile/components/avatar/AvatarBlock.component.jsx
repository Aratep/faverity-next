import React, { useState } from "react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

// BASE COMPONENTS
import Image from "components/image/Image.component";
import { Modal } from "components/modal/Modal.component";
// UTILITIES
import { generateUserInfo } from "utilities/feed.utilities";

const AvatarBlock = ({ owner }) => {
  const [isAvatarModal, toggleIsAvatarModal] = useState(false);
  const { name, avatar } = generateUserInfo(owner);

  return (
    <div className="avatar-block">
      <Modal
        isOpen={isAvatarModal}
        modalChildClassName="childdd"
        handleModalClose={() => toggleIsAvatarModal(false)}>
        <TransformWrapper>
          <TransformComponent>
            <Image src={avatar} alt="avatar" />
          </TransformComponent>
        </TransformWrapper>
      </Modal>
      <Image
        src={avatar}
        alt="avatar"
        onClick={() => toggleIsAvatarModal(true)}
      />
      <h1>{name}</h1>
    </div>
  );
};

export default AvatarBlock;
