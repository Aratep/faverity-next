import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  // VOTE A POLL
  votePollLoading: false,
  // POLL COMMENTS
  comments: [],
  commentsLoading: false,
  // SELECTED POLL OPTION
  selectedPollId: {},
  // ADD A COMMENT
  addCommentLoading: false,
  // REPORT COMMENT LOADING
  reportCommentLoading: false,
  // TOGGLE MESSAGE REPORT MENU
  isCommentReportMenu: false,
  // SELECTED COMMENT
  selectedComment: {},
};

const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {
    // VOTE A POLL
    votPollStart: (state) => {
      state.votePollLoading = true;
    },
    votPollSuccess: (state) => {
      state.votePollLoading = false;
    },
    votPollFailure: (state) => {
      state.votePollLoading = false;
    },
    // GET POLL COMMENTS
    getPollCommentsStart: (state) => {
      state.commentsLoading = true;
    },
    getPollCommentsSuccess: (state, { payload }) => {
      state.commentsLoading = false;
      state.comments = payload;
    },
    getPollCommentsFailure: (state) => {
      state.commentsLoading = false;
    },
    // SET SELECTED POLL OPTION
    setSelectedPollIdSlice: (state, { payload }) => {
      state.selectedPollId = payload;
    },
    // ADD A COMMENT
    addCommentStart: (state) => {
      state.addCommentLoading = true;
    },
    addCommentSuccess: (state) => {
      state.addCommentLoading = false;
    },
    addCommentFailure: (state) => {
      state.addCommentLoading = false;
    },
    // REPORT COMMENT
    reportCommentStart: (state) => {
      state.reportCommentLoading = true;
    },
    reportCommentSuccess: (state) => {
      state.reportCommentLoading = false;
    },
    reportCommentFailure: (state) => {
      state.reportCommentLoading = false;
    },
    // TOGGLE COMMENT REPORT LOADING
    toggleCommentReportMenuSlice: (state, { payload }) => {
      state.isCommentReportMenu = payload;
    },
    // TOGGLE COMMENT REPORT LOADING
    setSelectedCommentSlice: (state, { payload }) => {
      state.selectedComment = payload;
    },
  },
});

// Extract the action creators object and the reducer
const { actions } = commentsSlice;
// Extract and export each action creator by name
export const {
  // vote a poll
  votPollStart,
  votPollSuccess,
  votPollFailure,
  // get poll comments
  getPollCommentsStart,
  getPollCommentsSuccess,
  getPollCommentsFailure,
  // set selected poll id
  setSelectedPollIdSlice,
  // add a comment
  addCommentStart,
  addCommentSuccess,
  addCommentFailure,
  // report comment
  reportCommentStart,
  reportCommentSuccess,
  reportCommentFailure,
  // toggle message report menu
  toggleCommentReportMenuSlice,
  // set selected comment
  setSelectedCommentSlice,
} = actions;
// Export the reducer, either as a default or named export
export default commentsSlice;
export const selectComments = (state) => state.comments;
