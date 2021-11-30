import storage from "redux-persist/lib/storage";

// ROOT PERSIST CONFIG
export const persistConfig = {
  key: "root",
  storage: storage,
  blacklist: ["example"],
};

// AUTH PERSIST CONFIG
export const examplePersistConfig = {
  key: "example",
  storage: storage,
  blacklist: ["registerError"],
};
