import React from "react";

// PAGES
import SingleFeed from "./feed/subpages/single-feed/SingleFeed.subpage";
// LAYOUTS
import PageHead from "layouts/head/PageHead.layout";

const WrappedSingleFeed = () => (
  <PageHead title="Single feed page">
    <div className="feed-pages">
      <SingleFeed />
    </div>
  </PageHead>
);
export default WrappedSingleFeed;
