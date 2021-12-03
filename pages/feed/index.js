import React from "react";

import FeedPage from "./feed/Feed.page";

const WrappedFeedPage = () => (
  <div className="feed-pages">
    <FeedPage />
  </div>
);

// WrappedFeedPage.getInitialProps = async () => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/users");
//   const json = await res.json();
//   return { users: json };
// };

export default WrappedFeedPage;
