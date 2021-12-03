import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  // EMAIL REGISTER TAB'S PARAMS
  emailTabParams: {
    alias: "",
    email: "",
    password: "",
    rePassword: "",
    isAgreed: false,
  },
  // ABOUT TAB'S PARAMS
  aboutTabParams: {
    firstname: "",
    lastname: "",
    birthday: "",
    countryId: "",
    gender: "FEMALE",
    instagram: "",
    snapchat: "",
    bio: "",
    categories: [],
  },
};

const authTabParamsSlices = createSlice({
  name: "authTabParams",
  initialState,
  reducers: {
    // CHANGE EMAIL TAB's PARAMS
    changeEmailTabParamSlice: (state, { payload }) => {
      state.emailTabParams = {
        ...state.emailTabParams,
        [payload.name]: payload.value,
      };
    },
    // CHANGE ABOUT TAB's PARAMS
    changeAboutTabParamSlice: (state, { payload }) => {
      state.aboutTabParams = {
        ...state.aboutTabParams,
        [payload.name]: payload.value,
      };
    },
    // RESET TAB's PARAMS
    resetTabParamsSlice: (state, { payload }) => {
      state[payload] = initialState[payload];
    },
  },
});

// Extract the action creators object and the reducer
const { actions } = authTabParamsSlices;
// Extract and export each action creator by name
export const {
  changeEmailTabParamSlice,
  changeAboutTabParamSlice,
  resetTabParamsSlice,
} = actions;
export const selectAuthTabParams = (state) => state.authTabParams;
// Export the reducer, either as a default or named export
export default authTabParamsSlices;
