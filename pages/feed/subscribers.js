import React from "react";

// PAGES
import SubscribersPage from "./subscribers/Subscribers.page";
// LAYOUTS
import PageHead from "layouts/head/PageHead.layout";

const WrappedSubscripersPage = () => (
  <PageHead title="Subscribers page">
    <div className="feed-pages">
      <SubscribersPage />
    </div>
  </PageHead>
);
export default WrappedSubscripersPage;
