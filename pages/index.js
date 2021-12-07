import React from "react";
import { getCookie } from "cookies-next";

// PAGES
import FeedPage from "pages/feed/index";
// LAYOUTS
import PageHead from "layouts/head/PageHead.layout";
// FETCH CONFIG
import { Fetch } from "config/fetch.config";
// UTILITIES
import { isObjectEmpty } from "utilities/helper-functions";

const MainPage = ({ polls }) => {
  let hashtags = [];
  let questions = [];

  polls &&
    polls?.forEach((poll) => {
      questions.push(poll?.question);
      poll?.tags?.forEach((tag) => {
        hashtags.push(tag);
      });
    });

  return (
    <PageHead title="Feed page" description={questions} keywords={hashtags}>
      <FeedPage />
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
      polls: pollsResponse?.polls || [],
    },
  };
}

// MainPage.getInitialProps = async ({ req, res }) => {
//   const data = parseCookies(req);
//
//   if (res) {
//     if (Object.keys(data).length === 0 && data.constructor === Object) {
//       res.writeHead(301, { Location: "/" });
//       res.end();
//       return {};
//     }
//   }
//
//   const response = await Fetch("feed/home/page/-1", "GET", {
//     token: data && JSON.parse(data?.user)?.accessToken,
//   });
//   const pollsResponse = await response.json();
//
//   return {
//     polls: pollsResponse?.polls,
//   };
// };

export default MainPage;
