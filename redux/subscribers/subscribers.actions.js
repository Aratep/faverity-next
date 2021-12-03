// set search text
import {
  // search text
  setSearchTextSlice,
  // change tab name
  changeTabNameSlice,
} from "./subscribers.slice";

// set search text
export const setSearchText = (text) => (dispatch) => {
  dispatch(setSearchTextSlice(text));
};

// change tab name
export const changeTabName = (name) => (dispatch) => {
  dispatch(changeTabNameSlice(name));
};
