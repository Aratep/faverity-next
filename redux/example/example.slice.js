import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  users: [],
};

const exampleSlice = createSlice({
  name: "example",
  initialState,
  reducers: {
    // change users
    setUsersSlice: (state, { payload }) => {
      state.users = payload;
    },
  },
});

// Extract the action creators object and the reducer
const { actions } = exampleSlice;
// Extract and export each action creator by name
export const {
  // set users
  setUsersSlice,
} = actions;
// Export the reducer, either as a default or named export
export default exampleSlice;
