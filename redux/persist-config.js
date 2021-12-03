import storage from "redux-persist/lib/storage";

// ROOT PERSIST CONFIG
export const persistConfig = {
  key: "root",
  storage: storage,
  blacklist: [
    "authTabParams",
    "createPoll",
    "feeds",
    // "authentication",
    "comments",
    "chat",
  ],
  whitelist: ["authentication"],
};

// AUTH PERSIST CONFIG
export const authPersistConfig = {
  key: "authentication",
  storage: storage,
  blacklist: ["registerError"],
  whitelist: ["userInfo"],
};

// CREATE POLL PERSIST CONFIG
export const createPollPersistConfig = {
  key: "createPoll",
  storage: storage,
  blacklist: ["step1TabParams", "step2TabParams"],
};

// FEED PERSIST CONFIG
export const feedPersistConfig = {
  key: "feed",
  storage: storage,
  blacklist: [
    "userPolls",
    "userPollsLoading",
    "userFollowers",
    "userFollowersLoading",
  ],
};

// COMMENTS PERSIST CONFIG
export const commentsPersistConfig = {
  key: "comments",
  storage: storage,
  blacklist: ["comments"],
};

// CHAT PERSIST CONFIG
export const chatPersistConfig = {
  key: "chat",
  storage: storage,
  blacklist: ["commonPolls", "commonPollsLoading"],
};
