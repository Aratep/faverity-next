import React from "react";

// PAGES
import ChangePassword from "../personal-profile/subpages/change-password/ChangePassword.subpage";
// LAYOUTS
import PageHead from "layouts/head/PageHead.layout";

const WrappedChangePasswordPage = () => (
  <PageHead title="Change profile page [Password]">
    <div className="feed-pages">
      <ChangePassword />
    </div>
  </PageHead>
);

export default WrappedChangePasswordPage;
