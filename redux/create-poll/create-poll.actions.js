// APIs
import createPollApi from "./create-poll.api";
// SLICES
import {
  changeStep1TabParamsSlice,
  changeStep2TabParamsSlice,
  // create poll
  createPollStartSlice,
  createPollSuccessSlice,
  createPollFailureSlice,
} from "./create-poll.slice";
import { setGlobalMessage } from "redux/common/common.slice";
// UTILITIES
import { catchGlobalMessages } from "../utilities";

// CHANGE STEP1 TAB's PARAM
export const changeStep1TabParam = (name, value) => (dispatch) => {
  dispatch(changeStep1TabParamsSlice({ name, value }));
};

// CHANGE STEP2 TAB's PARAM
export const changeStep2TabParam = (name, value) => (dispatch) => {
  dispatch(changeStep2TabParamsSlice({ name, value }));
};

// crate poll async
export const createPollAsync = (token, pollParams, history) => async (
  dispatch
) => {
  const params = {
    question: pollParams.question,
    hashtags: pollParams.tags,
    categoryId: pollParams.categories[0],
    showInProfile: pollParams.showInProfile,
    answerOptionCount: pollParams?.images.length,
    privateUserIds: pollParams.privateUserIds, // must change to pollParams.privateUserIds
    privateGroupIds: pollParams.privateGroupIds,
  };
  dispatch(createPollStartSlice());

  try {
    const response = await createPollApi.createPoll(token, params);
    const status = catchGlobalMessages(
      response,
      dispatch,
      createPollSuccessSlice(response),
      createPollFailureSlice(),
      "Poll created!"
    );

    if (status === "OK") {
      response.urls.forEach((url, idx) => {
        createPollApi.uploadPollImages(
          url,
          pollParams.images[idx].file,
          dispatch
        );
      });
      history.push("/feed/personal-profile");
    }
  } catch (error) {
    dispatch(setGlobalMessage({ severity: "error", text: error.message }));
  }
};
