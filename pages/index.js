import React from "react";

// PAGES
// import AuthPage from "pages/auth/auth";
import FeedPage from "pages/feed/search.js";
// STORE

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
