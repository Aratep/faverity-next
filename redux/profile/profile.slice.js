import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  // INPUTS' PARAMS
  settingsParams: {
    firstname: "",
    lastname: "",
    alias: "",
    birthday: "",
    instagramName: "",
    snapchatName: "",
    email: "",
    gender: "FEMALE",
    bio: "",
    url: "",
    countryId: null,
    categories: [],
  },
  // PROFILE DATA
  profileData: {},
  profileDataLoading: false,
  profileDataErrorMessage: "",
  // UPDATE PROFILE DATA
  updateProfileDataLoading: false,
  // BECOME AN INFLUENCER
  becomeInfluencerLoading: false,
};

const profileSlices = createSlice({
  name: "profile",
  initialState,
  reducers: {
    // CHANGE INPUTS' PARAM
    changeParamSlice: (state, { payload }) => {
      state.settingsParams = {
        ...state.settingsParams,
        [payload.name]: payload.value,
      };
    },
    // SET TAB's PARAMS
    setSettingsParamsSlice: (state, { payload }) => {
      state.settingsParams = payload;
    },
    // RESET SETTINGS's PARAMS
    resetParamsSlice: (state) => {
      state.settingsParams = initialState.settingsParams;
    },
    // GET PROFILE DATA
    getProfileStartSlice: (state) => {
      state.profileDataLoading = true;
    },
    getProfileSuccessSlice: (state, { payload }) => {
      state.profileDataLoading = false;
      state.profileData = payload;
      state.profileDataErrorMessage = "";
    },
    getProfileFailureSlice: (state, { payload }) => {
      state.profileDataLoading = false;
      state.profileData = {};
      state.profileDataErrorMessage = payload;
    },
    // UPDATA PROFILE DATA
    updateProfileStartSlice: (state) => {
      state.updateProfileDataLoading = true;
    },
    updateProfileSuccessSlice: (state) => {
      state.updateProfileDataLoading = false;
    },
    updateProfileFailureSlice: (state) => {
      state.updateProfileDataLoading = false;
    },
    // BECOME AN INFLUENCER
    becomeInfluencerStartSlice: (state) => {
      state.becomeInfluencerLoading = true;
    },
    becomeInfluencerSuccessSlice: (state) => {
      state.becomeInfluencerLoading = false;
    },
    becomeInfluencerFailureSlice: (state) => {
      state.becomeInfluencerLoading = false;
    },
  },
});

// Extract the action creators object and the reducer
const { actions } = profileSlices;
// Extract and export each action creator by name
export const {
  // change settings' param
  changeParamSlice,
  // reset params
  resetParamsSlice,
  // set settings params
  setSettingsParamsSlice,
  // get profile data
  getProfileStartSlice,
  getProfileSuccessSlice,
  getProfileFailureSlice,
  // update profile data
  updateProfileStartSlice,
  updateProfileSuccessSlice,
  updateProfileFailureSlice,
  // become an influencer
  becomeInfluencerStartSlice,
  becomeInfluencerSuccessSlice,
  becomeInfluencerFailureSlice,
} = actions;
export const profileParams = (state) => state.profile;
// Export the reducer, either as a default or named export
export default profileSlices;
