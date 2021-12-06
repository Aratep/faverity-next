import React from "react";

// PAGES
import PollPreview from "./create-poll/subpages/poll-preview/PollPreview.subpage";
// LAYOUTS
import PageHead from "layouts/head/PageHead.layout";

const WrappedPollPreviewPage = () => (
  <PageHead title="Poll preview page">
    <div className="feed-pages">
      <PollPreview />
    </div>
  </PageHead>
);
export default WrappedPollPreviewPage;
