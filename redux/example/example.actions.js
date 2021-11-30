// SLICES
import { setUsersSlice } from "./example.slice";

// set search text
export const setUsers = (users) => (dispatch) => {
  dispatch(setUsersSlice(users));
};
