import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  // CATEGORIES
  categories: [],
  isCategoriesLoading: false,
  categoriesErrorMessage: "",
  // GLOBAL MESSAGE
  globalMessage: null,
  // COUNTRIES
  countries: [],
  isCountriesLoading: false,
  countriesErrorMessage: "",
  // TAB INDEX
  selectedTabIndex: 0,
  // DETECT APP FIRST LAUNCH
  isAppFirstLaunch: true,
  // PATHNAME
  pathname: "/",
};

const commonSlice = createSlice({
  name: "common",
  initialState,
  reducers: {
    // CATEGORIES REDUCER
    getCategoriesStart: (state) => {
      state.isCategoriesLoading = true;
    },
    getCategoriesSuccess: (state, { payload }) => {
      state.isCategoriesLoading = false;
      state.categories = payload;
      state.categoriesErrorMessage = "";
    },
    getCategoriesFailure: (state, { payload }) => {
      state.categoriesErrorMessage = payload;
      state.isCategoriesLoading = false;
      state.categories = [];
    },
    // COUNTRIES REDUCER
    getCountriesStart: (state) => {
      state.isCountriesLoading = true;
    },
    getCountriesSuccess: (state, { payload }) => {
      state.isCountriesLoading = false;
      state.countries = payload;
      state.countriesErrorMessage = "";
    },
    getCountriesFailure: (state, { payload }) => {
      state.countriesErrorMessage = payload;
      state.isCountriesLoading = false;
      state.countries = [];
    },
    // GLOBAL MESSAGE REDUCER
    setGlobalMessage: (state, { payload }) => {
      state.globalMessage = payload;
    },
    // CHANGE TAB INDEX
    setSelectedTabIndexSlice: (state, { payload }) => {
      state.selectedTabIndex = payload;
    },
    // TOGGLE APP FIRST LAUNCH
    toggleAppFirstLaunchSlice: (state, { payload }) => {
      state.isAppFirstLaunch = payload;
    },
    // SET PATHNAME
    setPathNameSlice: (state, { payload }) => {
      state.pathname = payload;
    },
  },
});

// Extract the action creators object and the reducer
const { actions } = commonSlice;
// Extract and export each action creator by name
export const {
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
} = actions;
// Export the reducer, either as a default or named export
export default commonSlice;
export const selectCommon = (state) => state.common;
