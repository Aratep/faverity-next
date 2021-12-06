import React from "react";

// PAGES
import CommentsPage from "./comments/Comments.page";
// LAYOUTS
import PageHead from "layouts/head/PageHead.layout";

const WrappedCommentsPageFeed = () => (
  <PageHead title="Comments">
    <div className="feed-pages">
      <CommentsPage />
    </div>
  </PageHead>
);
export default WrappedCommentsPageFeed;
