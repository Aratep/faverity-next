import React from "react";
// import debounce from "lodash.debounce";

// BASE COMPONENTS
import GridContainer from "components/grid-container/GridContainer.component";
import GridItem from "components/grid-item/GridItem.component";
import Tab from "components/tab/Tab.component";
// LAYOUTS
import { withToolbar } from "pages/feed/layouts/page-with-toolbar/PageWithToolbar.layout";
import BackArrowHeader from "pages/feed/layouts/back-arrow-header/BackArrowHeader.layout";
// EFFECTS
import useAuthSession from "effects/useAuthSession.effect";
// import useToolkit from "effects/useToolkit.effect";
// ACTIONS
// import {
//   setSearchText,
//   searchPrivateChatsAsync,
//   searchGroupChatsAsync,
// } from "redux/chat/chat.actions";
// SERVICES
import ChatServices from "./chat.services";

const ChatsPage = () => {
  // const {
  //   dispatch,
  //   reduxStore: {
  //     authentication: authStore,
  //     // chat: chatStore,
  //   },
  // } = useToolkit("authentication", "chat");
  useAuthSession();

  // const { userInfo } = authStore;
  // const { searchText, tabName } = chatStore;
  // added temporary

  const { tabLabels, tabPanels } = ChatServices;

  /* debounce input handler */
  // eslint-disable-next-line react-hooks/exhaustive-deps
  // const debouncedPrivateChatSearch = useCallback(
  //   debounce((searchVal) => {
  //     // send the server request here
  //     dispatch(searchPrivateChatsAsync(searchVal, userInfo?.accessToken));
  //   }, 900),
  //   []
  // );
  // eslint-disable-next-line react-hooks/exhaustive-deps
  // const debouncedGroupChatSearch = useCallback(
  //   debounce((searchVal) => {
  //     // send the server request here
  //     dispatch(searchGroupChatsAsync(searchVal, userInfo?.accessToken));
  //   }, 900),
  //   []
  // );

  // ********* temporary disable chat searching ***** ////
  // ********* and enable followers list (remove after chats typing is ready) *****
  // const onSearchTextChange = (text) => {
  //   dispatch(setSearchText(text));
  //   if (text !== "") {
  //     if (tabName === "private") {
  //       debouncedPrivateChatSearch(text);
  //     }
  //     if (tabName === "group") {
  //       debouncedGroupChatSearch(text);
  //     }
  //   }
  // };

  return (
    <section className="chat">
      <GridContainer>
        <GridItem xs={12} sm={12} md={12} lg={12}>
          <BackArrowHeader />
        </GridItem>
        <GridItem xs={12} sm={12} md={12} lg={12}>
          <Tab
            tabLabels={tabLabels}
            tabPanels={tabPanels}
            // onSearchTextChange={onSearchTextChange}
            // text={searchText}
            // isSearchInput
          />
        </GridItem>
      </GridContainer>
    </section>
  );
};

export default withToolbar(ChatsPage);
