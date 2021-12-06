import React from "react";

// BASE COMPONENTS
import GridContainer from "components/grid-container/GridContainer.component";
import GridItem from "components/grid-item/GridItem.component";
import FileUploader from "components/file-uploader/FileUploader.component";
// PROFILE PAGE COMPONENTS
import ProfileMenuItems from "./components/profile-menu-items/ProfileMenuItems.component";
// LAYOUTS
import { withToolbar } from "layouts/page-with-toolbar/PageWithToolbar.layout";
import BackArrowHeader from "layouts/back-arrow-header/BackArrowHeader.layout";
// EFFECTS
import useToolkit from "effects/useToolkit.effect";
import useAuthSession from "effects/useAuthSession.effect";
// ACTIONS
// import { uploadUserGeneralInfo } from "redux/auth/auth.actions";
// UTILITIES
import { generateUserInfo } from "utilities/feed.utilities";

const ProfilePage = () => {
  const {
    reduxStore: { authentication: authStore },
  } = useToolkit("authentication");
  useAuthSession();

  const { userInfo } = authStore;

  const { name } = generateUserInfo(userInfo);

  const onUpload = () => {
    // dispatch(uploadUserGeneralInfo({}, userInfo?.accessToken, history, true));
    console.log("somethingggg");
  };

  return (
    <section className="profile-page">
      <GridContainer>
        <GridItem xs={12} sm={12} md={12} lg={12}>
          <BackArrowHeader />
        </GridItem>
        <GridItem xs={12} sm={12} md={12} lg={12}>
          <FileUploader onUpload={onUpload} image={userInfo?.profileImageUrl} />
        </GridItem>
        <GridItem xs={12} sm={12} md={12} lg={12}>
          <div className="profile-page__uesrname">
            <h1>{name}</h1>
          </div>
        </GridItem>
        <GridItem xs={12} sm={12} md={12} lg={12}>
          <ProfileMenuItems />
        </GridItem>
      </GridContainer>
    </section>
  );
};

export default withToolbar(ProfilePage);
