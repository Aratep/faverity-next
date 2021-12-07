import React from "react";

// PAGES
import FeedPage from "./feed/Feed.page";
// LAYOUTS
import PageHead from "layouts/head/PageHead.layout";
// FETCH CONFIG
import { Fetch } from "config/fetch.config";
// UTILITIES
import { parseCookies } from "utilities/helper-functions";

const WrappedFeedPage = ({ polls }) => {
  let hashtags = [];
  let questions = [];

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

WrappedFeedPage.getInitialProps = async ({ req, res }) => {
  const data = parseCookies(req);

  if (res) {
    if (Object.keys(data).length === 0 && data.constructor === Object) {
      res.writeHead(301, { Location: "/" });
      res.end();
    }
  }

  const response = await Fetch("feed/home/page/-1", "GET", {
    token: data && JSON.parse(data?.user)?.accessToken,
  });
  const pollsResponse = await response.json();

  return {
    polls: pollsResponse?.polls,
  };
};

export default WrappedFeedPage;
