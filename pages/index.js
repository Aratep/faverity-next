import React from "react";

// BASE COMPONENTS
import Notification from "components/notification/Notification.component";
// SLICES
import { setGlobalMessage } from "redux/common/common.slice";
// EFFECTS
import useToolkit from "effects/useToolkit.effect";
// PAGES
import FeedPage from "pages/feed/index";

const MainPage = () => {
  const {
    dispatch,
    reduxStore: { common: commonStore },
  } = useToolkit("common");

  const { globalMessage, isAppFirstLaunch } = commonStore;

  const handleNotificationClose = () => {
    dispatch(setGlobalMessage(null));
  };

  return (
    <>
      {/*<Notification*/}
      {/*  message={globalMessage?.text}*/}
      {/*  isOpened={!!globalMessage}*/}
      {/*  delay={7000}*/}
      {/*  severity={globalMessage?.severity}*/}
      {/*  handleNotificationClose={handleNotificationClose}*/}
      {/*  position={{ vertical: "top", horizontal: "center" }}*/}
      {/*/>*/}
      <FeedPage />
    </>
  );
};

MainPage.getInitialProps = async () => {
  console.log("initial prospPPPPPPPPPPPPPPp");
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const json = await res.json();
  return { users: json };
};

export default MainPage;
