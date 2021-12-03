import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";

// SLICES
import authSlice from "./auth/auth.slice";
import commonSlice from "./common/common.slice";
import authTabParamsSlices from "./auth-tab-params/auth-tab-params.slices";
import searchSlice from "./search/search.slice";
import feedsSlice from "./feed/feeds.slice";
import createPollSlices from "./create-poll/create-poll.slice";
import chatSlice from "./chat/chat.slices";
import subscribersSlice from "./subscribers/subscribers.slice";
import profileSlices from "./profile/profile.slice";
import commentsSlice from "./comments/comments.slice";

// PERSIST CONFIG
import {
  persistConfig,
  authPersistConfig,
  createPollPersistConfig,
  feedPersistConfig,
  commentsPersistConfig,
  chatPersistConfig,
} from "./persist-config";

const rootReducer = combineReducers({
  authentication: persistReducer(authPersistConfig, authSlice.reducer),
  common: commonSlice.reducer,
  authTabParams: authTabParamsSlices.reducer,
  search: searchSlice.reducer,
  feeds: persistReducer(feedPersistConfig, feedsSlice.reducer),
  createPoll: persistReducer(createPollPersistConfig, createPollSlices.reducer),
  chat: persistReducer(chatPersistConfig, chatSlice.reducer),
  subscribers: subscribersSlice.reducer,
  profile: profileSlices.reducer,
  comments: persistReducer(commentsPersistConfig, commentsSlice.reducer),
});

export default persistReducer(persistConfig, rootReducer);
