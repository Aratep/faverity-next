import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  // EMAIL REGISTER TAB'S PARAMS
  step1TabParams: {
    question: "",
    tags: [],
    categories: [],
  },
  // ABOUT TAB'S PARAMS
  step2TabParams: {
    images: [],
    privateUserIds: [],
    privateGroupIds: [],
    showInProfile: false,
  },
  // CREATE POLL RESPONSE
  createPollResponse: {},
  createPollLoading: false,
  // UPLOAD IMAGE
  imageUploadResponse: {},
  imageUploadLoading: false,
};

const createPollSlices = createSlice({
  name: "createPoll",
  initialState,
  reducers: {
    // CHANGE STEP1 TAB's PARAMS
    changeStep1TabParamsSlice: (state, { payload }) => {
      state.step1TabParams = {
        ...state.step1TabParams,
        [payload.name]: payload.value,
      };
    },
    // CHANGE STEP2 TAB's PARAMS
    changeStep2TabParamsSlice: (state, { payload }) => {
      state.step2TabParams = {
        ...state.step2TabParams,
        [payload.name]: payload.value,
      };
    },
    // RESET TAB's PARAMS
    resetCreatePollParamsSlice: (state, { payload }) => {
      state[payload] = initialState[payload];
    },
    // CREATE POLL
    createPollStartSlice: (state) => {
      state.createPollLoading = true;
    },
    createPollSuccessSlice: (state, { payload }) => {
      state.createPollLoading = false;
      state.createPollResponse = payload;
    },
    createPollFailureSlice: (state) => {
      state.createPollLoading = false;
    },
    // IMAGE UPLOAD
    imageUploadStartSlice: (state) => {
      state.imageUploadLoading = true;
    },
    imageUploadSuccessSlice: (state, { payload }) => {
      state.imageUploadLoading = false;
      state.imageUploadResponse = payload;
    },
    imageUploadFailureSlice: (state) => {
      state.imageUploadLoading = false;
    },
  },
});

// Extract the action creators object and the reducer
const { actions } = createPollSlices;
// Extract and export each action creator by name
export const {
  changeStep1TabParamsSlice,
  changeStep2TabParamsSlice,
  resetCreatePollParamsSlice,
  // create poll
  createPollStartSlice,
  createPollSuccessSlice,
  createPollFailureSlice,
  // image uplaod
  imageUploadStartSlice,
  imageUploadSuccessSlice,
  imageUploadFailureSlice,
} = actions;
export const selectCreatePoll = (state) => state.createPoll;
// Export the reducer, either as a default or named export
export default createPollSlices;
