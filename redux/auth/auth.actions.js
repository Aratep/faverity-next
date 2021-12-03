import authApi from "./auth.api";
// SLICES
import {
  // login
  loginStart,
  loginSuccess,
  loginFailure,
  // register
  registerStart,
  registerSuccess,
  registerFailure,
  // upload info
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
} from "./auth.slice";
import {
  setGlobalMessage,
  setSelectedTabIndexSlice,
} from "redux/common/common.slice";
// ACTIONS
import { setSelectedTabIndex } from "redux/common/common.actions";
import { resetTabParams } from "redux/auth-tab-params/auth-tab-params.actions";
// UTILITIES
import { catchGlobalMessages } from "../utilities";

// login
export const login = ({ email, password }, fcmToken = "") => async (
  dispatch
) => {
  dispatch(loginStart());

  try {
    const response = await authApi.login({ email, password, fcmToken });
    catchGlobalMessages(
      response,
      dispatch,
      loginSuccess(response),
      loginFailure()
    );
  } catch (error) {
    dispatch(loginFailure());
    dispatch(setGlobalMessage({ severity: "error", text: error.message }));
  }
};

// Register user
export const register = (props) => async (dispatch) => {
  dispatch(registerStart());

  try {
    const response = await authApi.register(props);
    catchGlobalMessages(
      response,
      dispatch,
      registerSuccess(response),
      registerFailure(),
      "Your data have saved successfully! Go to step two."
    );
    if (!response.errors) {
      dispatch(setSelectedTabIndex(1));
    }
  } catch (error) {
    dispatch(registerFailure());
    dispatch(setGlobalMessage({ severity: "error", text: error.message }));
  }
};

// Send user general info
export const uploadUserGeneralInfo = (
  props,
  emailTabParams,
  token,
  history,
  requestProfileImageUpload
) => async (dispatch) => {
  dispatch(uploadInfoStart());

  try {
    const response = await authApi.uploadUserGeneralInfo(
      props,
      token,
      requestProfileImageUpload
    );
    const status = catchGlobalMessages(
      response,
      dispatch,
      uploadInfoSuccess(),
      uploadInfoFailure(),
      "Your info have saved!"
    );
    if (status === "OK") {
      dispatch(loginStart());
      try {
        const response = await authApi.login({
          email: emailTabParams.email,
          password: emailTabParams.password,
          fcmToken: token,
        });
        const loginStatus = catchGlobalMessages(
          response,
          dispatch,
          loginSuccess(response),
          loginFailure()
        );

        if (loginStatus === "OK") {
          // reset params after uploading info
          dispatch(resetTabParams("emailTabParams"));
          dispatch(resetTabParams("aboutTabParams"));
          // set tab index to 0 after uploading info
          dispatch(setSelectedTabIndexSlice(0));
        }
      } catch (error) {
        dispatch(loginFailure());
        dispatch(setGlobalMessage({ severity: "error", text: error.message }));
      }
    }
  } catch (error) {
    dispatch(uploadInfoFailure());
    dispatch(setGlobalMessage({ severity: "error", text: error.message }));
  }
};

// Log out
export const logout = (token) => async (dispatch) => {
  try {
    const response = await authApi.logOut({ token });
    if (response.success === true) {
      dispatch(logOut());
    } else {
      dispatch(
        setGlobalMessage({
          severity: "error",
          text: "• Etwas ist schief gelaufen.",
        })
      );
    }
  } catch (error) {
    dispatch(setGlobalMessage({ severity: "error", text: error.message }));
  }
};

// Change password
export const changePasswordAsync = ({
  passwordOld,
  passwordNew,
  token,
  history,
}) => async (dispatch) => {
  dispatch(changePasswordStart());

  try {
    const response = await authApi.changePassword({
      passwordOld,
      passwordNew,
      token,
    });
    const status = catchGlobalMessages(
      response,
      dispatch,
      changePasswordSuccess(),
      changePasswordFailure(),
      "Password changed successfully!"
    );
    if (status === "OK") {
      history.push("/profile");
    }
  } catch (error) {
    dispatch(changePasswordFailure());
    dispatch(setGlobalMessage({ severity: "error", text: error.message }));
  }
};

// Resetting the password
export const resetPassword = ({ email }) => async (dispatch) => {
  dispatch(resetPasswordStartSlice());

  try {
    const response = await authApi.resetPassword({ email });
    catchGlobalMessages(
      response,
      dispatch,
      resetPasswordSuccessSlice(),
      resetPasswordFailureSlice(),
      "The email with new password was sent!"
    );
  } catch (error) {
    dispatch(resetPasswordFailureSlice());
    dispatch(setGlobalMessage({ severity: "error", text: error.message }));
  }
};

// Resetting the password
export const removeAccountAsync = (token) => async (dispatch) => {
  dispatch(removeAccountStartSlice());

  try {
    const response = await authApi.removeAccount(token);
    catchGlobalMessages(
      response,
      dispatch,
      removeAccountSuccessSlice(),
      removeAccountFailureSlice()
    );
  } catch (error) {
    dispatch(removeAccountFailureSlice());
    dispatch(setGlobalMessage({ severity: "error", text: error.message }));
  }
};

// Login with Facebook
export const facebookLoginAsync = (redirectUrl) => async (dispatch) => {
  dispatch(facebookLoginStartSlice());

  try {
    const response = await authApi.facebookLogin(redirectUrl);
    catchGlobalMessages(
      response,
      dispatch,
      facebookLoginSuccessSlice(),
      facebookLoginFailureSlice()
    );
  } catch (error) {
    dispatch(facebookLoginFailureSlice());
    dispatch(setGlobalMessage({ severity: "error", text: error.message }));
  }
};

// Login with Facebook
export const getFacebookLoginInfoAsync = (redirectUrl, code) => async (
  dispatch
) => {
  dispatch(getFacebookLoginInfoStartSlice());

  try {
    const response = await authApi.facebookFinish(redirectUrl, code);
    catchGlobalMessages(
      response,
      dispatch,
      getFacebookLoginInfoSuccessSlice(),
      getFacebookLoginInfoFailureSlice()
    );
  } catch (error) {
    dispatch(getFacebookLoginInfoFailureSlice());
    dispatch(setGlobalMessage({ severity: "error", text: error.message }));
  }
};
