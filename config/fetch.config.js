// GLOBAL STORE
import store from "redux/store";
// ACTIONS
import { logout } from "redux/auth/auth.actions";
import { setGlobalMessage } from "redux/common/common.slice";

const dispatch = store.dispatch;
const authStore = store.getState().authentication;
const token = authStore?.userInfo.accessToken;

const API_URL = "https://dev.faverity.com/v2";
const defaultHeaders = { "Content-Type": "application/json; charset=utf-8" };

export function Fetch(url, method = "GET", headers = defaultHeaders, data) {
  return fetch(`${API_URL}/${url}`, {
    method: method,
    mode: "cors",
    body: method !== "GET" ? JSON.stringify(data) : undefined,
    headers: { ...defaultHeaders, ...headers },
  }).then((response) => {
    if (response.ok) {
      return response;
    } else {
      //handle errors in the way you want to
      switch (response.status) {
        case 403:
          dispatch(logout(token));
          dispatch(
            setGlobalMessage({
              severity: "error",
              text: "• TOKEN HAS EXPIRED",
            })
          );
          break;
        case 404:
          dispatch(
            setGlobalMessage({
              severity: "error",
              text: "• Object not found",
            })
          );
          break;
        case 500:
          dispatch(
            setGlobalMessage({
              severity: "error",
              text: "• Internal server error",
            })
          );
          break;
        default:
          dispatch(
            setGlobalMessage({
              severity: "error",
              text: "• Etwas ist schief gelaufen.",
            })
          );
          break;
      }
    }
    return response;
  });
}
