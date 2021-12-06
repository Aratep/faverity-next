import React from "react";
import { connect } from "react-redux";

import Settings from "../personal-profile/subpages/settings/Settings.subpage";
// import { Fetch } from "config/fetch.config";
// import store from "redux/store";

const WrappedSettingsPage = () => {
  return (
    <div className="feed-pages">
      <Settings />
    </div>
  );
};

// WrappedSettingsPage.getInitialProps = async () => {
//   const appStore = store.getState();
//   console.log(appStore);
//   const { userInfo } = appStore?.authentication;
//   // const {
//   //   dispatch,
//   //   reduxStore: {
//   //     authentication: authStore,
//   //     profile: profileStore,
//   //     common: commonStore,
//   //   },
//   // } = useToolkit("authentication", "profile", "common");
//   console.log(userInfo?.accessToken);
//   const res = await Fetch("profile", "GET", {
//     token: "8cb71a52-1d88-4575-b84c-5d269098f53c-chfxhMFoYU3MHE5M",
//   });
//   // async (searchString, token) => {
//   //   let response = await Fetch(
//   //     `search/user`,
//   //     "POST",
//   //     { token },
//   //     {
//   //       searchString,
//   //     }
//   //   );
//   //   return await response.json();
//   // };
//   const json = await res.json();
//   console.log(json);
//
//   return { json };
// };

export default connect(null, null)(WrappedSettingsPage);
