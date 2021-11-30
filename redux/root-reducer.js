import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";

// SLICES
import exampleSlice from "./example/example.slice";
// PERSIST CONFIG
import { persistConfig, examplePersistConfig } from "./persist-config";

const rootReducer = combineReducers({
  example: persistReducer(examplePersistConfig, exampleSlice.reducer),
});

export default persistReducer(persistConfig, rootReducer);
