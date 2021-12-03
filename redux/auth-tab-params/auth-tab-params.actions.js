import {
  // email tab
  changeEmailTabParamSlice,
  // about tab
  changeAboutTabParamSlice,
  // reset tab params
  resetTabParamsSlice,
} from "./auth-tab-params.slices";

// CHANGE EMAIL TAB's PARAM
export const changeEmailTabParam = (name, value) => (dispatch) => {
  dispatch(changeEmailTabParamSlice({ name, value }));
};

// CHANGE ABOUT TAB's PARAM
export const changeAboutTabParam = (name, value) => (dispatch) => {
  dispatch(changeAboutTabParamSlice({ name, value }));
};

// RESET TAB's PARAM
export const resetTabParams = (name) => (dispatch) => {
  dispatch(resetTabParamsSlice(name));
};
