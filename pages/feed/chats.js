import React from "react";

// PAGES
import ChatsPage from "./chat/Chat.page";
// LAYOUTS
import PageHead from "layouts/head/PageHead.layout";

const WrappedChatsPage = () => (
  <PageHead title="Chat page">
    <div className="feed-pages">
      <ChatsPage />
    </div>
  </PageHead>
);
export default WrappedChatsPage;
