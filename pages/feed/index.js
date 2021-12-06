import React from "react";

// PAGES
import FeedPage from "./feed/Feed.page";
// LAYOUTS
import PageHead from "layouts/head/PageHead.layout";

const WrappedFeedPage = () => (
  <PageHead
    title="Feed page"
    description="Some other description for feed page">
    <div className="feed-pages">
      <FeedPage />
    </div>
  </PageHead>
);

// WrappedFeedPage.getInitialProps = async () => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/users");
//   const json = await res.json();
//   return { users: json };
// };

export default WrappedFeedPage;
