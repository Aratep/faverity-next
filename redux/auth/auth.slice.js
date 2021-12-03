import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  // LOGIN
  userInfo: {},
  isLoading: false,
  authError: "",
  // REGISTER
  registerInfo: {},
  isRegister: false,
  registerError: "",
  // CHANGE PASSWORD
  changePasswordLoding: false,
  changePasswordError: "",
  // RESET PASSWORD
  resetPasswordLoading: false,
  resetPasswordError: "",
  // REMOVE ACCOUNT
  removeAccountLoading: false,
  // FACEBOOK LOGIN
  facebookLoginLoading: false,
  // FACEBOOK LOGIN RESPONSE
  facebookLoginInfo: {},
  facebookLoginInfoLoading: false,
};

const authSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    // login reducers
    loginStart: (state) => {
      state.isLoading = true;
    },
    loginSuccess: (state, { payload }) => {
      state.isLoading = false;
      state.userInfo = payload;
      state.authError = "";
    },
    loginFailure: (state, { payload }) => {
      state.isLoading = false;
      state.userInfo = {};
      state.authError = payload;
    },
    // register reducers
    registerStart: (state) => {
      state.isRegister = true;
    },
    registerSuccess: (state, { payload }) => {
      state.isRegister = false;
      state.registerInfo = payload;
      state.registerError = "";
    },
    registerFailure: (state, { payload }) => {
      state.isRegister = false;
      state.registerInfo = {};
      state.registerError = payload;
    },
    // upload user general info reducers
    uploadInfoStart: (state) => {
      state.isLoading = true;
    },
    uploadInfoSuccess: (state) => {
      state.isLoading = false;
      state.authError = "";
    },
    uploadInfoFailure: (state, { payload }) => {
      state.isLoading = false;
      state.authError = payload;
    },
    // log out reducers
    logOut: () => {
      window.localStorage.clear();
      window.sessionStorage.clear();
      return { ...initialState };
    },
    // change password
    changePasswordStart: (state) => {
      state.changePasswordLoding = true;
    },
    changePasswordSuccess: (state) => {
      state.changePasswordLoding = false;
      state.changePasswordError = "";
    },
    changePasswordFailure: (state, { payload }) => {
      state.changePasswordLoding = false;
      state.changePasswordError = payload;
    },
    // reset password
    resetPasswordStartSlice: (state) => {
      state.resetPasswordLoading = true;
    },
    resetPasswordSuccessSlice: (state) => {
      state.resetPasswordLoading = false;
    },
    resetPasswordFailureSlice: (state) => {
      state.resetPasswordLoading = false;
    },
    // remove account
    removeAccountStartSlice: (state) => {
      state.removeAccountLoading = true;
    },
    removeAccountSuccessSlice: (state) => {
      state.removeAccountLoading = false;
    },
    removeAccountFailureSlice: (state) => {
      state.removeAccountLoading = false;
    },
    // facebook login
    facebookLoginStartSlice: (state) => {
      state.isLoading = true;
    },
    facebookLoginSuccessSlice: (state, { payload }) => {
      state.isLoading = false;
      state.authError = "";
    },
    facebookLoginFailureSlice: (state, { payload }) => {
      state.isLoading = false;
      state.authError = payload;
    },
    // get facebook login info
    getFacebookLoginInfoStartSlice: (state) => {
      state.isLoading = true;
    },
    getFacebookLoginInfoSuccessSlice: (state, { payload }) => {
      state.isLoading = false;
      state.authError = "";
    },
    getFacebookLoginInfoFailureSlice: (state, { payload }) => {
      state.isLoading = false;
      state.authError = payload;
    },
  },
});

// Extract the action creators object and the reducer
const { actions } = authSlice;
// Extract and export each action creator by name
export const {
  // login reducers
  loginStart,
  loginSuccess,
  loginFailure,
  // register reducers
  registerStart,
  registerSuccess,
  registerFailure,
  // upload info reducers
  uploadInfoStart,
  uploadInfoSuccess,
  uploadInfoFailure,
  // log out slices
  logOut,
  // change password
  changePasswordStart,
  changePasswordSuccess,
  changePasswordFailure,
  // reset password
  resetPasswordStartSlice,
  resetPasswordSuccessSlice,
  resetPasswordFailureSlice,
  // remove account
  removeAccountStartSlice,
  removeAccountSuccessSlice,
  removeAccountFailureSlice,
  // facebook login
  facebookLoginStartSlice,
  facebookLoginSuccessSlice,
  facebookLoginFailureSlice,
  // get facebook login info
  getFacebookLoginInfoStartSlice,
  getFacebookLoginInfoSuccessSlice,
  getFacebookLoginInfoFailureSlice,
} = actions;
export const selectAuth = (state) => state.authentication;
// Export the reducer, either as a default or named export
export default authSlice;
