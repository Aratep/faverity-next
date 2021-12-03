import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  // SEARCH TEXT
  searchText: "",
  // SEARCH ENDPOINT
  tabName: "followers",
  // SEARCH PRIVATE CHATS
  followersList: [],
  followersListLoading: false,
  followersListErrorMessage: "",
  // SEARCH GROUP CHATS
  followingsList: [],
  followingsListLoading: false,
  followingsListErrorMessage: "",
};

const subscribersSlice = createSlice({
  name: "subscribers",
  initialState,
  reducers: {
    // CHANGE SEARCH TEXT
    setSearchTextSlice: (state, { payload }) => {
      state.searchText = payload;
    },
    // CHANGE TAB NAME
    changeTabNameSlice: (state, { payload }) => {
      state.tabName = payload;
    },
    // SEARCH FOLLOWERS
    searchFollowersStartSlice: (state) => {
      state.followersListLoading = true;
    },
    searchFollowersSuccessSlice: (state, { payload }) => {
      state.followersListLoading = false;
      state.followersList = payload;
      state.followersListErrorMessage = "";
    },
    searchFollowersFailureSlice: (state, { payload }) => {
      state.followersListLoading = false;
      state.followersList = [];
      state.followersListErrorMessage = payload;
    },
    // SEARCH FOLLOWINGS
    searchFollowingsStartSlice: (state) => {
      state.followingsListLoading = true;
    },
    searchFollowingsSuccessSlice: (state, { payload }) => {
      state.followingsListLoading = false;
      state.followingsList = payload;
      state.followingsListErrorMessage = "";
    },
    searchFollowingsFailureSlice: (state, { payload }) => {
      state.followingsListLoading = false;
      state.followingsList = [];
      state.followingsListErrorMessage = payload;
    },
  },
});

// Extract the action creators object and the reducer
const { actions } = subscribersSlice;
// Extract and export each action creator by name
export const {
  // search text
  setSearchTextSlice,
  // change tab name
  changeTabNameSlice,
  // private chats
  searchFollowersStartSlice,
  searchFollowersSuccessSlice,
  searchFollowersFailureSlice,
  // group chats
  searchFollowingsStartSlice,
  searchFollowingsSuccessSlice,
  searchFollowingsFailureSlice,
} = actions;
// Export the reducer, either as a default or named export
export default subscribersSlice;
export const selectSubscribers = (state) => state.subscribers;
