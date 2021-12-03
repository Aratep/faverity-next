// APIS
import feedsApi from "./feeds.api";
// SLICES
import {
  // get feeds
  getFeedStartReducer,
  getFeedSuccessReducer,
  getFeedFailureReducer,
  // feeds by tag
  getTagFeedsStartSlice,
  getTagFeedsSuccessSlice,
  getTagFeedsFailureSlice,
  // feeds by category
  getPollsByCategoryStartSlice,
  getPollsByCategorySuccessSlice,
  getPollsByCategoryFailureSlice,
  // get feed owner data
  getFeedOwnerDataStartReducer,
  getFeedOwnerDataSuccessReducer,
  getFeedOwnerDataFailureReducer,
  // get user's polls
  getUserPollsStartSlice,
  getUserPollsSuccessSlice,
  getUserPollsFailureSlice,
  // get user followers data
  getUserFollowersStartSlice,
  getUserFollowersSuccessSlice,
  getUserFollowersFailureSlice,
  // get user subscribers data
  getUserSubscribersStartSlice,
  getUserSubscribersSuccessSlice,
  getUserSubscribersFailureSlice,
  // get groups
  getGroupsStartSlice,
  getGroupsSuccessSlice,
  getGroupsFailureSlice,
  // follow a user
  followUserStartSlice,
  followUserSuccessSlice,
  followUserFailureSlice,
  // single feed
  setSingleFeedDataReducer,
  // selected owner ID
  setSelectedOwnerIDReducer,
  // reset feeds list
  resetFeedsListSlice,
  // set feed type
  setFeedTypeSlice,
  // set all polls tags
  setPollsTagsListSlice,
  // report a poll
  reportPollStartSlice,
  reportPollSuccessSlice,
  reportPollFailureSlice,
  // toggle poll report menu
  togglePollReportMenuSlice,
} from "./feeds.slice";
import { setGlobalMessage } from "redux/common/common.slice";
// UTILITIES
import { catchGlobalMessages } from "../utilities";

// set single feed info
export const setSingleFeedData = (feedData) => (dispatch) => {
  dispatch(setSingleFeedDataReducer(feedData));
};

// set feed owner ID
export const setSelectedOwnerID = (ownerID) => (dispatch) => {
  dispatch(setSelectedOwnerIDReducer(ownerID));
};

// reset feeds list
export const resetFeedsList = () => (dispatch) => {
  dispatch(resetFeedsListSlice());
};

// set feed type
export const setFeedType = (type) => (dispatch) => {
  dispatch(setFeedTypeSlice(type));
};

// set all feed's tags
export const setPollsTagsList = (tags) => (dispatch) => {
  dispatch(setPollsTagsListSlice(tags));
};

// toggle poll report menu
export const togglePollReportMenu = (isOpen) => (dispatch) => {
  dispatch(togglePollReportMenuSlice(isOpen));
};

// get home feed data
export const getHomeFeedDataAsync = (token, lastId = -1) => async (
  dispatch
) => {
  dispatch(getFeedStartReducer());
  let allPollTags = [];

  try {
    const response = await feedsApi.getHomeFeedData(token, lastId);
    if (response.success === true) {
      response.polls.forEach((poll) => {
        poll.tags.forEach((tag) => {
          allPollTags.push(tag);
        });
      });
      dispatch(setPollsTagsList(allPollTags));
    }
    catchGlobalMessages(
      response,
      dispatch,
      getFeedSuccessReducer(response.polls),
      getFeedFailureReducer()
    );
  } catch (error) {
    dispatch(setGlobalMessage({ severity: "error", text: error.message }));
  }
};

// get feed owner data
export const getFeedOwnerDataAsync = (token, userId, history) => async (
  dispatch
) => {
  dispatch(getFeedOwnerDataStartReducer());

  try {
    const response = await feedsApi.getFeedOwnerData(token, userId);
    const status = catchGlobalMessages(
      response,
      dispatch,
      getFeedOwnerDataSuccessReducer(response),
      getFeedOwnerDataFailureReducer()
    );
    if (status === "OK" && history) {
      history.push("/feed/feed-owner-profile");
    }
  } catch (error) {
    dispatch(setGlobalMessage({ severity: "error", text: error.message }));
  }
};

// get user followers data
export const getUserFollowersDataAsync = (token, userId, keyword) => async (
  dispatch
) => {
  dispatch(getUserFollowersStartSlice());

  try {
    const response = await feedsApi.getUserFollowersData(
      token,
      userId,
      keyword
    );
    catchGlobalMessages(
      response,
      dispatch,
      getUserFollowersSuccessSlice(response.profiles),
      getUserFollowersFailureSlice()
    );
  } catch (error) {
    dispatch(setGlobalMessage({ severity: "error", text: error.message }));
  }
};

// get user subscribers data
export const getUserSubscribersDataAsync = (token, userId, keyword) => async (
  dispatch
) => {
  dispatch(getUserSubscribersStartSlice());

  try {
    const response = await feedsApi.getUserSubscribersData(
      token,
      userId,
      keyword
    );
    catchGlobalMessages(
      response,
      dispatch,
      getUserSubscribersSuccessSlice(response.profiles),
      getUserSubscribersFailureSlice()
    );
  } catch (error) {
    dispatch(setGlobalMessage({ severity: "error", text: error.message }));
  }
};

// get groups data
export const getGroupsDataAsync = (token) => async (dispatch) => {
  dispatch(getGroupsStartSlice());

  try {
    const response = await feedsApi.getGroupsData(token);
    catchGlobalMessages(
      response,
      dispatch,
      getGroupsSuccessSlice(response),
      getGroupsFailureSlice()
    );
  } catch (error) {
    dispatch(setGlobalMessage({ severity: "error", text: error.message }));
  }
};

// search feeds by category
export const getFeedsByCategoryAsync = (
  token,
  categoryId,
  lastId = -1
) => async (dispatch) => {
  dispatch(getPollsByCategoryStartSlice());

  try {
    const response = await feedsApi.getFeedsByCategory(
      token,
      categoryId,
      lastId
    );
    catchGlobalMessages(
      response,
      dispatch,
      getPollsByCategorySuccessSlice(response.polls),
      getPollsByCategoryFailureSlice()
    );
  } catch (error) {
    dispatch(setGlobalMessage({ severity: "error", text: error.message }));
    dispatch(getPollsByCategoryFailureSlice());
  }
};

// get feeds by tag name
export const getFeedsByTagNameAsync = (token, tagName, lastId = -1) => async (
  dispatch
) => {
  dispatch(getTagFeedsStartSlice());

  try {
    const response = await feedsApi.getFeedsByTagName(token, tagName, lastId);
    catchGlobalMessages(
      response,
      dispatch,
      getTagFeedsSuccessSlice(response.polls),
      getTagFeedsFailureSlice()
    );
  } catch (error) {
    dispatch(setGlobalMessage({ severity: "error", text: error.message }));
    dispatch(getTagFeedsFailureSlice());
  }
};

// get feeds by profile
export const getFeedsByProfileAsync = (token, userId, lastId = -1) => async (
  dispatch
) => {
  dispatch(getUserPollsStartSlice());

  try {
    const response = await feedsApi.getFeedsByProfile(token, userId, lastId);
    catchGlobalMessages(
      response,
      dispatch,
      getUserPollsSuccessSlice(response.polls),
      getUserPollsFailureSlice()
    );
  } catch (error) {
    dispatch(setGlobalMessage({ severity: "error", text: error.message }));
    dispatch(getUserPollsFailureSlice());
  }
};

// follow a user async
export const followUserAsync = (token, userId, shouldGetData = true) => async (
  dispatch
) => {
  dispatch(followUserStartSlice());

  try {
    const response = await feedsApi.followUser(token, userId);
    const status = catchGlobalMessages(
      response,
      dispatch,
      followUserSuccessSlice(),
      followUserFailureSlice(),
      "Followed!"
    );
    if (status === "OK" && shouldGetData) {
      dispatch(getUserFollowersDataAsync(token, userId));
      dispatch(getFeedOwnerDataAsync(token, userId));
    }
  } catch (error) {
    dispatch(setGlobalMessage({ severity: "error", text: error.message }));
  }
};

// unfollow a user async
export const unFollowUserAsync = (
  token,
  userId,
  shouldGetData = true
) => async (dispatch) => {
  dispatch(followUserStartSlice());

  try {
    const response = await feedsApi.unFollowUser(token, userId);
    const status = catchGlobalMessages(
      response,
      dispatch,
      followUserSuccessSlice(),
      followUserFailureSlice(),
      "Unfollowed!"
    );
    if (status === "OK" && shouldGetData) {
      dispatch(getUserFollowersDataAsync(token, userId));
      dispatch(getFeedOwnerDataAsync(token, userId));
    }
  } catch (error) {
    dispatch(setGlobalMessage({ severity: "error", text: error.message }));
  }
};

// report a poll async
export const reportPollAsync = (token, pollId) => async (dispatch) => {
  dispatch(reportPollStartSlice());

  try {
    const response = await feedsApi.reportPoll(token, pollId);
    catchGlobalMessages(
      response,
      dispatch,
      reportPollSuccessSlice(),
      reportPollFailureSlice(),
      "Poll reported!"
    );
    dispatch(togglePollReportMenu(false));
  } catch (error) {
    dispatch(setGlobalMessage({ severity: "error", text: error.message }));
  }
};
