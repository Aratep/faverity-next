import React, { useEffect } from "react";

// BASE COMPONENTS
import Notification from "components/notification/Notification.component";
// SLICES
import { setGlobalMessage } from "redux/common/common.slice";
// REDUX
import { wrapper } from "redux/store";
// EFFECTS
import useToolkit from "effects/useToolkit.effect";
// ACTIONS
import {
  getCountriesAsync,
  getCategoriesAsync,
  toggleAppFirstLauch,
} from "redux/common/common.actions";
// STYLES
import "styles/_globals.scss";

function MyApp({ Component, pageProps }) {
  const {
    dispatch,
    reduxStore: { common: commonStore },
  } = useToolkit("common");

  const { categories, globalMessage } = commonStore;

  useEffect(() => {
    dispatch(getCountriesAsync());
    if (categories.length <= 0) {
      dispatch(getCategoriesAsync());
    }

    setTimeout(() => {
      // setIsLoading(false);
      dispatch(toggleAppFirstLauch(false));
    }, 6000);
    // eslint-disable-next-line
  }, [])

  const handleClose = () => {
    dispatch(setGlobalMessage(null));
  };

  return (
    <>
      <Notification
        message={globalMessage?.text}
        isOpened={!!globalMessage}
        delay={7000}
        severity={globalMessage?.severity}
        handleNotificationClose={handleClose}
        position={{ vertical: "top", horizontal: "center" }}
      />
      <Component {...pageProps} />
    </>
  );
}

export default wrapper.withRedux(MyApp);
