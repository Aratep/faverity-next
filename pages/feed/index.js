import React from "react";
import { getCookie } from "cookies-next";

// PAGES
import FeedPage from "./feed/Feed.page";
// LAYOUTS
import PageHead from "layouts/head/PageHead.layout";
// FETCH CONFIG
import { Fetch } from "config/fetch.config";
// UTILITIES
import { isObjectEmpty } from "utilities/helper-functions";

const WrappedFeedPage = ({ polls }) => {
  let hashtags = [];
  let questions = [];
  const user = getCookie("user");
  console.log(!!user && JSON.parse(user));

  polls?.forEach((poll) => {
    questions.push(poll?.question);
    poll?.tags?.forEach((tag) => {
      hashtags.push(tag);
    });
  });

  return (
    <PageHead title="Feed page" description={questions} keywords={hashtags}>
      <div className="feed-pages">
        <FeedPage />
      </div>
    </PageHead>
  );
};

export async function getServerSideProps({ res, req }) {
  const user = getCookie("user", { req, res });
  const parsedUser = !isObjectEmpty(user) && JSON.parse(user);

  const response = await Fetch(`feed/home/page/-1`, "GET", {
    token: parsedUser?.accessToken,
  });
  const pollsResponse = await response.json();

  return {
    props: {
      polls: pollsResponse?.polls || {},
    },
  };
}

export default WrappedFeedPage;
