import React from "react";

// BASE COMPONENTS
import Image from "components/image/Image.component";
// IMAGES
import nextArrow from "assets/images/profile/next-arrow.svg";

const ProfileMenuButton = ({ icon, text, onClick = () => true }) => {
  return (
    <div className="profile-menu-button" onClick={onClick}>
      <div className="profile-menu-button__icon">
        <Image src={icon} alt="icon-btn" />
      </div>
      <div className="profile-menu-button__text">{text}</div>
      <div className="profile-menu-button__arrow">
        <Image src={nextArrow.src} alt="next-arrow" />
      </div>
    </div>
  );
};

export default ProfileMenuButton;
