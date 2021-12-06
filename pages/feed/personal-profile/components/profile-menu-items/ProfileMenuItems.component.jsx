import React from "react";
import { useRouter } from "next/router";

// PROFILE PAGE COMPONENTS
import ProfileMenuButton from "../profile-menu-button/ProfileMenuButton.component";
// IMAGES
// import profileIcon from "assets/images/profile/profile-icon.svg";
import settingsIcon from "assets/images/profile/settings-icon.svg";
import unlockIcon from "assets/images/profile/unlock-icon.svg";

const ProfileMenuItems = () => {
  const router = useRouter();

  const menuItems = [
    // {
    //   id: 0,
    //   icon: profileIcon,
    //   text: "Personal Information",
    //   onClick: () => history.push(`${url}/personal-information`),
    // },
    {
      id: 1,
      icon: settingsIcon.src,
      text: "Settings",
      onClick: () => router.push(`/feed/change-profile/settings`),
    },
    {
      id: 2,
      icon: unlockIcon.src,
      text: "Change Password",
      onClick: () => router.push(`/feed/change-profile/change-password`),
    },
  ];

  return (
    <div className="profile-menu-items">
      {menuItems.map((item) => {
        return (
          <ProfileMenuButton
            icon={item.icon}
            text={item.text}
            onClick={item?.onClick}
            key={item.id}
          />
        );
      })}
    </div>
  );
};

export default ProfileMenuItems;
