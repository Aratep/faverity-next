import React from "react";

// PAGES
import Settings from "../personal-profile/subpages/settings/Settings.subpage";
// LAYOUTS
import PageHead from "layouts/head/PageHead.layout";

const WrappedSettingsPage = () => {
  return (
    <PageHead title="Change profile page [Settings]">
      <div className="feed-pages">
        <Settings />
      </div>
    </PageHead>
  );
};

export default WrappedSettingsPage;
