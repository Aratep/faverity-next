import React from "react";

// PAGES
import FeedOwnerProfile from "./feed/subpages/poll-owner-profile/FeedOwnerProfile.subpage";
// LAYOUTS
import PageHead from "layouts/head/PageHead.layout";

const WrappedFeedOwnerProfilePage = () => (
  <PageHead title="Feed owner profile page">
    <div className="feed-pages">
      <FeedOwnerProfile />
    </div>
  </PageHead>
);

export default WrappedFeedOwnerProfilePage;
