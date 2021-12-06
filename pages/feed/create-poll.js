import React from "react";

// PAGES
import CreatePoll from "./create-poll/CreatePoll.page";
// LAYOUTS
import PageHead from "layouts/head/PageHead.layout";

const WrappedCreatePollPage = () => (
  <PageHead title="Create poll page">
    <div className="feed-pages">
      <CreatePoll />
    </div>
  </PageHead>
);
export default WrappedCreatePollPage;
