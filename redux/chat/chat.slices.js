import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  // SEARCH TEXT
  searchText: "",
  // SEARCH ENDPOINT
  tabName: "private",
  // SEARCH PRIVATE CHATS
  privateChats: [],
  privateChatsLoading: false,
  privateChatsErrorMessage: "",
  // SEARCH GROUP CHATS
  groupChats: [],
  groupChatsLoading: false,
  groupChatsErrorMessage: "",
  // COMMON POLLS
  commonPolls: [],
  commonPollsLoading: false,
  // SELECTED USER
  selectedUser: {},
};

const chatSlice = createSlice({
  name: "chat",
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
    // SEARCH PRIVATE CHATS
    searchPrivateChatsStartSlice: (state) => {
      state.privateChatsLoading = true;
    },
    searchPrivateChatsSuccessSlice: (state, { payload }) => {
      state.privateChatsLoading = false;
      state.privateChats = payload;
      state.groupChatsErrorMessage = "";
    },
    searchPrivateChatsFailureSlice: (state, { payload }) => {
      state.privateChatsLoading = false;
      state.privateChats = [];
      state.groupChatsErrorMessage = payload;
    },
    // SEARCH GROUP CHATS
    searchGroupChatsStartSlice: (state) => {
      state.groupChatsLoading = true;
    },
    searchGroupChatsSuccessSlice: (state, { payload }) => {
      state.groupChatsLoading = false;
      state.groupChats = payload;
      state.groupChatsErrorMessage = "";
    },
    searchGroupChatsFailureSlice: (state, { payload }) => {
      state.groupChatsLoading = false;
      state.groupChats = [];
      state.groupChatsErrorMessage = payload;
    },
    // GET COMMOM POLLS
    getCommonPollsStartSlice: (state) => {
      state.commonPollsLoading = true;
    },
    getCommonPollsSuccessSlice: (state, { payload }) => {
      state.commonPollsLoading = false;
      state.commonPolls = payload;
    },
    getCommonPollsFailureSlice: (state) => {
      state.commonPollsLoading = false;
    },
    // SET SELECTED USER
    setSelectedUserSlice: (state, { payload }) => {
      state.selectedUser = payload;
    },
  },
});

// Extract the action creators object and the reducer
const { actions } = chatSlice;
// Extract and export each action creator by name
export const {
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
} = actions;
// Export the reducer, either as a default or named export
export default chatSlice;
export const selectChat = (state) => state.chat;
