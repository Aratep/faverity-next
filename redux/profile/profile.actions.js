// APIS
import profileApi from "./profile.api";
// SLICES
import {
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
} from "./profile.slice";
import { setGlobalMessage } from "../common/common.slice";
// UTILITIES
import { catchGlobalMessages } from "../utilities";

// CHANGE SETTINGS' PARAM
export const changeSettingsParam = (name, value) => (dispatch) => {
  dispatch(changeParamSlice({ name, value }));
};

// RESET PARAMS
export const resetTabParams = () => (dispatch) => {
  dispatch(resetParamsSlice());
};

// SET PARAMS
export const setProfileParams = (params) => (dispatch) => {
  dispatch(setSettingsParamsSlice(params));
};

// get profile data
export const getProfileDataAsync = (token) => async (dispatch) => {
  dispatch(getProfileStartSlice());

  try {
    const response = await profileApi.getProfileData(token);
    catchGlobalMessages(
      response,
      dispatch,
      getProfileSuccessSlice(response),
      getProfileFailureSlice()
    );
  } catch (error) {
    dispatch(setGlobalMessage({ severity: "error", text: error.message }));
  }
};

// update profile data
export const updateProfileDataAsync = (token, params) => async (dispatch) => {
  dispatch(updateProfileStartSlice());

  try {
    const response = await profileApi.updateProfileData(token, params);
    catchGlobalMessages(
      response,
      dispatch,
      updateProfileSuccessSlice(),
      updateProfileFailureSlice(),
      "Your data was updated!"
    );
    dispatch(getProfileDataAsync(token));
  } catch (error) {
    dispatch(setGlobalMessage({ severity: "error", text: error.message }));
  }
};

// become an influencer
export const becomeInfluencerAsync = (token) => async (dispatch) => {
  dispatch(becomeInfluencerStartSlice());

  try {
    const response = await profileApi.becomeInfluencer(token);
    catchGlobalMessages(
      response,
      dispatch,
      becomeInfluencerSuccessSlice(),
      becomeInfluencerFailureSlice(),
      "You are an Influencer!"
    );
    // dispatch(getProfileDataAsync(token));
  } catch (error) {
    dispatch(setGlobalMessage({ severity: "error", text: error.message }));
  }
};
