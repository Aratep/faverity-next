import {
  // search text
  setSearchTextSlice,
  // change tab name
  changeTabNameSlice,
  // private chats
  searchPrivateChatsStartSlice,
  searchPrivateChatsSuccessSlice,
  searchPrivateChatsFailureSlice,
  // group chats
  searchGroupChatsStartSlice,
  searchGroupChatsSuccessSlice,
  searchGroupChatsFailureSlice,
  // common polls
  getCommonPollsStartSlice,
  getCommonPollsSuccessSlice,
  getCommonPollsFailureSlice,
  // set selected user
  setSelectedUserSlice,
} from "./chat.slices";
import { setGlobalMessage } from "redux/common/common.slice";
// UTILITIES
import { catchGlobalMessages } from "../utilities";
// APIs
import searchApi from "../search/search.api";
import chatApi from "./chat.api";

// set search text
export const setSearchText = (text) => (dispatch) => {
  dispatch(setSearchTextSlice(text));
};

// set selected user
export const setSelectedUser = (user) => (dispatch) => {
  dispatch(setSelectedUserSlice(user));
};

// change tab name
export const changeTabName = (name) => (dispatch) => {
  dispatch(changeTabNameSlice(name));
};

// get common polls async
export const getCommonPollsAsync = (token, user, lastId, history) => async (
  dispatch
) => {
  dispatch(getCommonPollsStartSlice());

  try {
    const response = await chatApi.getCommonPolls(token, user.userId, lastId);
    const status = catchGlobalMessages(
      response,
      dispatch,
      getCommonPollsSuccessSlice(response.polls),
      getCommonPollsFailureSlice()
    );
    if (status === "OK" && history) {
      history.push(`/common-polls`);
    }
  } catch (error) {
    dispatch(getCommonPollsFailureSlice());
    dispatch(setGlobalMessage({ severity: "error", text: error.message }));
  }
};

// search users
export const searchPrivateChatsAsync = (searchString, token) => async (
  dispatch
) => {
  dispatch(searchPrivateChatsStartSlice());

  try {
    const response = await searchApi.searchUser(searchString, token);
    catchGlobalMessages(
      response,
      dispatch,
      searchPrivateChatsSuccessSlice(response.result),
      searchPrivateChatsFailureSlice()
    );
  } catch (error) {
    dispatch(setGlobalMessage({ severity: "error", text: error.message }));
  }
};

// search group chats
export const searchGroupChatsAsync = (searchString, token) => async (
  dispatch
) => {
  dispatch(searchGroupChatsStartSlice());

  try {
    const response = await searchApi.searchUser(searchString, token);
    catchGlobalMessages(
      response,
      dispatch,
      searchGroupChatsSuccessSlice(response.result),
      searchGroupChatsFailureSlice()
    );
  } catch (error) {
    dispatch(setGlobalMessage({ severity: "error", text: error.message }));
  }
};
