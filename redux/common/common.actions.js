import commonApi from "./common.api";
import {
  // categories
  getCategoriesStart,
  getCategoriesSuccess,
  getCategoriesFailure,
  // countries
  getCountriesStart,
  getCountriesSuccess,
  getCountriesFailure,
  // global message
  setGlobalMessage,
  // set selected tab index
  setSelectedTabIndexSlice,
  // toggle app first launch
  toggleAppFirstLaunchSlice,
  // set pathname
  setPathNameSlice,
  // set last poll id
  setLastPollIdSlice,
} from "./common.slice";
// UTILITIES
import { catchGlobalMessages } from "../utilities";

// set selected tab index
export const setSelectedTabIndex = (index) => async (dispatch) => {
  dispatch(setSelectedTabIndexSlice(index));
};

// toggle app first lauch param
export const toggleAppFirstLauch = (isLaunched) => async (dispatch) => {
  dispatch(toggleAppFirstLaunchSlice(isLaunched));
};

// set path name
export const setPathName = (pathname) => async (dispatch) => {
  dispatch(setPathNameSlice(pathname));
};

// set last poll id
export const setLastPollId = (lastPollId) => async (dispatch) => {
  dispatch(setLastPollIdSlice(lastPollId));
};

// get countries
export const getCountriesAsync = () => async (dispatch) => {
  dispatch(getCountriesStart());

  try {
    const response = await commonApi.getCountries();
    catchGlobalMessages(
      response,
      dispatch,
      getCountriesSuccess(response.countries),
      getCountriesFailure()
    );
  } catch (error) {
    dispatch(setGlobalMessage({ severity: "error", text: error.message }));
  }
};

// get categories
export const getCategoriesAsync = () => async (dispatch) => {
  dispatch(getCategoriesStart());

  try {
    const response = await commonApi.getCategories();
    catchGlobalMessages(
      response,
      dispatch,
      getCategoriesSuccess(response.categories),
      getCategoriesFailure()
    );
  } catch (error) {
    dispatch(setGlobalMessage({ severity: "error", text: error.message }));
  }
};
