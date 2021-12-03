import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  // SEARCH TEXT
  searchText: "",
  // SEARCH USERS
  users: [],
  usersLoading: false,
  usersErrorMessage: "",
  // SEARCH TAGS
  tags: [],
  tagsLoading: false,
  tagsErrorMessage: "",
  // SEARCH POLL
  polls: [],
  pollsLoading: false,
  pollsErrorMessage: "",
  // SEARCH ENDPOINT
  tabName: "user",
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    // CHANGE SEARCH TEXT
    setSearchTextReducer: (state, { payload }) => {
      state.searchText = payload;
    },
    // SEARCH USERS
    searchUsersStartReducer: (state) => {
      state.usersLoading = true;
    },
    searchUsersSuccessReducer: (state, { payload }) => {
      state.usersLoading = false;
      state.users = payload;
      state.usersErrorMessage = "";
    },
    searchUsersFailureReducer: (state, { payload }) => {
      state.usersLoading = false;
      state.users = [];
      state.usersErrorMessage = payload;
    },
    // SEARCH TAGS
    searchTagsStartReducer: (state) => {
      state.tagsLoading = true;
    },
    searchTagsSuccessReducer: (state, { payload }) => {
      state.tagsLoading = false;
      state.tags = payload;
      state.tagsErrorMessage = "";
    },
    searchTagsFailureReducer: (state, { payload }) => {
      state.tagsLoading = false;
      state.tags = [];
      state.tagsErrorMessage = payload;
    },
    // SEARCH POLLS
    searchPollsStartReducer: (state) => {
      state.pollsLoading = true;
    },
    searchPollsSuccessReducer: (state, { payload }) => {
      state.pollsLoading = false;
      state.polls = payload;
      state.pollsErrorMessage = "";
    },
    searchPollsFailureReducer: (state, { payload }) => {
      state.pollsLoading = false;
      state.polls = [];
      state.pollsErrorMessage = payload;
    },
    // CHANGE TAB NAME
    changeTabNameReducer: (state, { payload }) => {
      state.tabName = payload;
    },
  },
});

// Extract the action creators object and the reducer
const { actions } = searchSlice;
// Extract and export each action creator by name
export const {
  // search text
  setSearchTextReducer,
  // search users reducers
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
} = actions;
// Export the reducer, either as a default or named export
export default searchSlice;
export const selectSearch = (state) => state.search;
