import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  // GENERAL POLLS
  feeds: [],
  feedsLoading: false,
  feedsErrorMessage: "",
  // POLLS BY TAG
  tagFeeds: [],
  tagFeedsLoading: false,
  // POLLS BY CATEGORY
  feedsByCategory: [],
  feedsByCategoryLoading: false,
  // FEED OWNER DATA
  feedOwnerData: {},
  feedOwnerDataLoading: false,
  feedOwnerDataErrorMessage: "",
  // USER POLLS
  userPolls: [],
  userPollsLoading: false,
  // USER'S FOLLOWERS
  userFollowers: [],
  userFollowersLoading: false,
  // USER'S SUBSCRIBERS
  userSubscribers: [],
  userSubscribersLoading: false,
  // GROUPS
  groups: { acceptedGroups: [], groupInvitations: [] },
  groupsLoading: false,
  // SINGLE FEED
  singleFeedData: {},
  // SELECTED OWNER ID
  selectedOwnerID: null,
  // FOLLOW/UNFOLLOW A USER
  followLoading: false,
  // FEED TYPE
  feedType: "general",
  // ALL TAGS LIST
  pollsTagsList: [],
  // REPORT A POLL
  reportPollLoading: false,
  // TOGGLE POLL REPORT MENU
  isPollReportMenu: false,
};

const feedsSlice = createSlice({
  name: "feeds",
  initialState,
  reducers: {
    // GET GENERAL POLLS
    getFeedStartReducer: (state) => {
      state.feedsLoading = true;
    },
    getFeedSuccessReducer: (state, { payload }) => {
      state.feedsLoading = false;
      state.feeds = payload;
      state.feedsErrorMessage = "";
    },
    getFeedFailureReducer: (state, { payload }) => {
      state.feedsLoading = false;
      state.feeds = [];
      state.feedsErrorMessage = payload;
    },
    // GET POLLS BY TAG
    getTagFeedsStartSlice: (state) => {
      state.tagFeedsLoading = true;
    },
    getTagFeedsSuccessSlice: (state, { payload }) => {
      state.tagFeedsLoading = false;
      state.tagFeeds = payload;
    },
    getTagFeedsFailureSlice: (state) => {
      state.tagFeedsLoading = false;
      state.tagFeeds = [];
    },
    // GET POLLS BY CATEGORY
    getPollsByCategoryStartSlice: (state) => {
      state.feedsByCategoryLoading = true;
    },
    getPollsByCategorySuccessSlice: (state, { payload }) => {
      state.feedsByCategoryLoading = false;
      state.feedsByCategory = payload;
    },
    getPollsByCategoryFailureSlice: (state) => {
      state.feedsByCategoryLoading = false;
      state.feedsByCategory = [];
    },
    // GET USER'S POLLS
    getUserPollsStartSlice: (state) => {
      state.userPollsLoading = true;
    },
    getUserPollsSuccessSlice: (state, { payload }) => {
      state.userPollsLoading = false;
      state.userPolls = payload;
    },
    getUserPollsFailureSlice: (state) => {
      state.userPollsLoading = false;
    },
    // GET USER'S FOLLOWERS
    getUserFollowersStartSlice: (state) => {
      state.userFollowersLoading = true;
    },
    getUserFollowersSuccessSlice: (state, { payload }) => {
      state.userFollowersLoading = false;
      state.userFollowers = payload;
    },
    getUserFollowersFailureSlice: (state) => {
      state.userFollowersLoading = false;
    },
    // GET USER'S SUBSCRIBERS
    getUserSubscribersStartSlice: (state) => {
      state.userSubscribersLoading = true;
    },
    getUserSubscribersSuccessSlice: (state, { payload }) => {
      state.userSubscribersLoading = false;
      state.userSubscribers = payload;
    },
    getUserSubscribersFailureSlice: (state) => {
      state.userSubscribersLoading = false;
    },
    // GET GROUPS
    getGroupsStartSlice: (state) => {
      state.groupsLoading = true;
    },
    getGroupsSuccessSlice: (state, { payload }) => {
      state.groupsLoading = false;
      state.groups = payload;
    },
    getGroupsFailureSlice: (state) => {
      state.groupsLoading = false;
    },
    // GET FEED OWNER DATA
    getFeedOwnerDataStartReducer: (state) => {
      state.feedOwnerDataLoading = true;
    },
    getFeedOwnerDataSuccessReducer: (state, { payload }) => {
      state.feedOwnerDataLoading = false;
      state.feedOwnerData = payload;
      state.feedOwnerDataErrorMessage = "";
    },
    getFeedOwnerDataFailureReducer: (state, { payload }) => {
      state.feedOwnerDataLoading = false;
      state.feedOwnerData = {};
      state.feedOwnerDataErrorMessage = payload;
    },
    // FOLLOW A USER
    followUserStartSlice: (state) => {
      state.followLoading = true;
    },
    followUserSuccessSlice: (state) => {
      state.followLoading = false;
    },
    followUserFailureSlice: (state) => {
      state.followLoading = false;
    },
    // SET SINGLE FEED's INFO
    setSingleFeedDataReducer: (state, { payload }) => {
      state.singleFeedData = payload;
    },
    // SET SELECTED USER ID
    setSelectedOwnerIDReducer: (state, { payload }) => {
      state.selectedOwnerID = payload;
    },
    // RESET FEEDS DATA
    resetFeedsListSlice: (state) => {
      state.feeds = initialState.feeds;
    },
    // SET FEED TYPE
    setFeedTypeSlice: (state, { payload }) => {
      state.feedType = payload;
    },
    // SET POLLS ALL TAGS
    setPollsTagsListSlice: (state, { payload }) => {
      state.pollsTagsList = payload;
    },
    // REPORT A POLL
    reportPollStartSlice: (state) => {
      state.reportPollLoading = true;
    },
    reportPollSuccessSlice: (state) => {
      state.reportPollLoading = false;
    },
    reportPollFailureSlice: (state) => {
      state.reportPollLoading = false;
    },
    // TOGGLE POLL REPORT
    togglePollReportMenuSlice: (state, { payload }) => {
      state.isPollReportMenu = payload;
    },
  },
});

// Extract the action creators object and the reducer
const { actions } = feedsSlice;
// Extract and export each action creator by name
export const {
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
} = actions;
// Export the reducer, either as a default or named export
export default feedsSlice;
export const selectSearch = (state) => state.feeds;
