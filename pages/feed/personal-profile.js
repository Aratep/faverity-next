import React from "react";

// PAGES
import PersonalProfile from "./personal-profile/subpages/personal-profile/PersonalProfile.subpage";
// LAYOUTS
import PageHead from "layouts/head/PageHead.layout";

const WrappedPersonalProfilePage = () => (
  <PageHead title="Personal profile">
    <div className="feed-pages">
      <PersonalProfile />
    </div>
  </PageHead>
);

export default WrappedPersonalProfilePage;
