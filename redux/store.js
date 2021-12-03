import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { persistStore } from "redux-persist";

import { createWrapper } from "next-redux-wrapper";
// ROOT REDUCER
import rootReducer from "./root-reducer";

// CONFIGURE STORE
const store = configureStore({
  reducer: rootReducer,
  // add middlewares (both defaults and custom)
  middleware: (getDefaultMiddleware) => {
    const middlewares = getDefaultMiddleware({
      serializableCheck: false,
    });
    // add logger for only development
    if (process.env.NODE_ENV === "development") {
      return middlewares.concat(logger);
    }
    return middlewares;
  },
});

// const makeStore = (preloadedState) =>
//   configureStore({
//     reducer: rootReducer,
//     middleware: (getDefaultMiddleware) => {
//       const middlewares = getDefaultMiddleware({
//         serializableCheck: false,
//       });
//       // add logger for only development
//       if (process.env.NODE_ENV === "development") {
//         return middlewares.concat(logger);
//       }
//       return middlewares;
//     },
//     preloadedState,
//   });

const makeStore = ({ isServer }) => {
  if (isServer) {
    //If it's on server side, create a store
    return configureStore({
      reducer: rootReducer,
      // add middlewares (both defaults and custom)
      middleware: (getDefaultMiddleware) => {
        const middlewares = getDefaultMiddleware({
          serializableCheck: false,
        });
        // add logger for only development
        if (process.env.NODE_ENV === "development") {
          return middlewares.concat(logger);
        }
        return middlewares;
      },
    });
  } else {
    const store = configureStore({
      reducer: rootReducer,
      // add middlewares (both defaults and custom)
      middleware: (getDefaultMiddleware) => {
        const middlewares = getDefaultMiddleware({
          serializableCheck: false,
        });
        // add logger for only development
        if (process.env.NODE_ENV === "development") {
          return middlewares.concat(logger);
        }
        return middlewares;
      },
    });

    store.__persistor = persistStore(store);

    return store;
  }
};

export const persistor = persistStore(store);

export const wrapper = createWrapper(makeStore);

export default store;
