import React from "react";

// PAGES
import SearchPage from "./search/Search.page";
// LAYOUTS
import PageHead from "layouts/head/PageHead.layout";

const WrappedSearchPage = () => (
  <PageHead title="Search page">
    <div className="feed-pages">
      <SearchPage />
    </div>
  </PageHead>
);

export default WrappedSearchPage;
