// APIS
import searchApi from "./search.api";
// REDUCERS
import {
  // set search text reducer
  setSearchTextReducer,
  // search reducers
  searchUsersStartReducer,
  searchUsersSuccessReducer,
  searchUsersFailureReducer,
  // search tags reducers
  searchTagsStartReducer,
  searchTagsSuccessReducer,
  searchTagsFailureReducer,
  // search polls reducers
  searchPollsStartReducer,
  searchPollsSuccessReducer,
  searchPollsFailureReducer,
  // change tab name
  changeTabNameReducer,
} from "./search.slice";
import { setGlobalMessage } from "redux/common/common.slice";
// UTILITIES
import { catchGlobalMessages } from "../utilities";

// set search text
export const setSearchText = (text) => (dispatch) => {
  dispatch(setSearchTextReducer(text));
};

// change tab name
export const changeTabName = (name) => (dispatch) => {
  dispatch(changeTabNameReducer(name));
};

// search users
export const searchUsers = (searchString, token) => async (dispatch) => {
  dispatch(searchUsersStartReducer());

  try {
    const response = await searchApi.searchUser(searchString, token);
    catchGlobalMessages(
      response,
      dispatch,
      searchUsersSuccessReducer(response.result),
      searchUsersFailureReducer()
    );
  } catch (error) {
    dispatch(searchUsersFailureReducer());
    dispatch(setGlobalMessage({ severity: "error", text: error.message }));
  }
};

// search  tags
export const searchTags = (searchString, token) => async (dispatch) => {
  dispatch(searchTagsStartReducer());

  try {
    const response = await searchApi.searchTag(searchString, token);
    catchGlobalMessages(
      response,
      dispatch,
      searchTagsSuccessReducer(response.result),
      searchTagsFailureReducer()
    );
  } catch (error) {
    dispatch(searchTagsFailureReducer());
    dispatch(setGlobalMessage({ severity: "error", text: error.message }));
  }
};

// search polls
export const searchPolls = (searchString, token) => async (dispatch) => {
  dispatch(searchPollsStartReducer());

  try {
    const response = await searchApi.searchPoll(searchString, token);
    catchGlobalMessages(
      response,
      dispatch,
      searchPollsSuccessReducer(response.result),
      searchPollsFailureReducer()
    );
  } catch (error) {
    dispatch(searchPollsFailureReducer());
    dispatch(setGlobalMessage({ severity: "error", text: error.message }));
  }
};
