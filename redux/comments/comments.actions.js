import commentsApi from "./comments.api";
import {
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
} from "redux/comments/comments.slice";
import { setGlobalMessage } from "redux/common/common.slice";
// UTILITIES
import { catchGlobalMessages } from "../utilities";

// set selected poll id
export const setSelectedPollId = (pollId) => async (dispatch) => {
  dispatch(setSelectedPollIdSlice(pollId));
};

// toggle message report menu
export const toggleCommentReportMenu = (isMenu) => async (dispatch) => {
  dispatch(toggleCommentReportMenuSlice(isMenu));
};

// toggle message report menu
export const setSelectedComment = (comment) => async (dispatch) => {
  dispatch(setSelectedCommentSlice(comment));
};

// vote a poll async
export const votePollAsync = (token, pollId, optionId) => async (dispatch) => {
  dispatch(votPollStart());

  try {
    const response = await commentsApi.voteAPoll(token, pollId, optionId);
    const status = catchGlobalMessages(
      response,
      dispatch,
      votPollSuccess(),
      votPollFailure(),
      "Voted!"
    );

    if (status === "OK") {
      dispatch(getPollCommentsAsync(token, pollId));
    }
  } catch (error) {
    dispatch(setGlobalMessage({ severity: "error", text: error.message }));
  }
};

// get poll comments async
export const getPollCommentsAsync = (token, pollId, history) => async (
  dispatch
) => {
  dispatch(getPollCommentsStart());

  try {
    const response = await commentsApi.getPollComments(token, pollId);
    const status = catchGlobalMessages(
      response,
      dispatch,
      getPollCommentsSuccess(response.comments),
      getPollCommentsFailure()
    );
    if (status === "OK" && history) {
      dispatch(setSelectedPollId(pollId));
      history.push("/comments");
    }
  } catch (error) {
    dispatch(setGlobalMessage({ severity: "error", text: error.message }));
  }
};

// get poll comments async
export const addCommentAsync = (token, pollId, comment) => async (dispatch) => {
  dispatch(addCommentStart());

  try {
    const response = await commentsApi.addComment(token, pollId, comment);
    const status = catchGlobalMessages(
      response,
      dispatch,
      addCommentSuccess(),
      addCommentFailure()
    );
    if (status === "OK") {
      dispatch(getPollCommentsAsync(token, pollId));
    }
  } catch (error) {
    dispatch(setGlobalMessage({ severity: "error", text: error.message }));
  }
};

// report comment async
export const reportCommentAsync = (token, commentId) => async (dispatch) => {
  dispatch(reportCommentStart());

  try {
    const response = await commentsApi.reportComment(token, commentId);
    catchGlobalMessages(
      response,
      dispatch,
      reportCommentSuccess(),
      reportCommentFailure(),
      "Comment reported!"
    );
    dispatch(toggleCommentReportMenu(false));
  } catch (error) {
    dispatch(reportCommentFailure());
    dispatch(setGlobalMessage({ severity: "error", text: error.message }));
  }
};
