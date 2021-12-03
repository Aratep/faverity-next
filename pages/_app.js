import React, { useEffect } from "react";

// REDUX
import { wrapper } from "redux/store";
// EFFECTS
import useToolkit from "../effects/useToolkit.effect";
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

  const { categories } = commonStore;

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

  return <Component {...pageProps} />;
}

export default wrapper.withRedux(MyApp);
