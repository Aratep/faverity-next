import React from "react";

// PAGES
import FeedPage from "pages/feed/index";

const MainPage = () => {
  return <FeedPage />;
};

MainPage.getInitialProps = async () => {
  console.log("initial prospPPPPPPPPPPPPPPp");
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const json = await res.json();
  return { users: json };
};

export default MainPage;
