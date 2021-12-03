// IMAGES
import defaultAvatar from "assets/images/profile/avatar-default-icon.png";

export const generateUserInfo = (user) => {
  const name =
    user?.firstname || user?.lastname
      ? `${user?.firstname} ${user?.lastname}`
      : user?.alias;

  const avatar = user?.profileImageUrl
    ? user?.profileImageUrl
    : defaultAvatar.src;

  return { name, avatar };
};
