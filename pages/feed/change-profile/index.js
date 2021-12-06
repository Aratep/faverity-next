import React from "react";

// PAGES
import PersonalProfile from "../personal-profile/PersonalProfile.page";
// LAYOUTS
import PageHead from "layouts/head/PageHead.layout";

const WrappedPersonalProfilePage = () => (
  <PageHead title="Change profile page">
    <div className="feed-pages">
      <PersonalProfile />
    </div>
  </PageHead>
);

export default WrappedPersonalProfilePage;
