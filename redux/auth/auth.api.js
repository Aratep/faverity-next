import { Fetch } from "config/fetch.config";

const commonApi = {
  register: async (props) => {
    let response = await Fetch(
      `localuser`,
      "PUT",
      {},
      {
        ...props,
      }
    );
    return await response.json();
  },
  uploadUserGeneralInfo: async (
    props,
    token,
    requestProfileImageUpload = false
  ) => {
    const params = { ...props, requestProfileImageUpload };

    let response = await Fetch(
      `infos`,
      "POST",
      { token },
      {
        ...params,
      }
    );
    return await response.json();
  },
  login: async ({ email, password, fcmToken }) => {
    let response = await Fetch(
      `localuser`,
      "POST",
      {},
      {
        email,
        password,
        fcmToken,
      }
    );
    return await response.json();
  },
  logOut: async ({ token }) => {
    let response = await Fetch(`logout`, "POST", {
      accept: "application/json",
      token,
    });
    return await response.json();
  },
  resetPassword: async ({ email }) => {
    let response = await Fetch(
      `localuser/reset`,
      "POST",
      { accept: "application/json" },
      {
        email,
      }
    );
    return await response.json();
  },
  changePassword: async ({ passwordOld, passwordNew, token }) => {
    let response = await Fetch(
      `localuser/password`,
      "POST",
      { token, accept: "application/json" },
      {
        passwordOld,
        passwordNew,
      }
    );
    return await response.json();
  },
  removeAccount: async (token) => {
    let response = await Fetch(`profile`, "DELETE", {
      token,
    });
    return await response.json();
  },
  facebookRegister: async (params) => {
    let response = await Fetch(`facebook/register`, "PUT", {
      ...params,
    });
    return await response.json();
  },
  facebookLogin: async (redirectUrl) => {
    let response = await Fetch(
      `facebook/login?redirectUrl=${redirectUrl}`,
      "GET"
    );
    return await response.json();
  },
  facebookFinish: async (redirectUrl, code) => {
    let response = await Fetch(
      `facebook/finish?redirectUrl=${redirectUrl}&code=${code}`,
      "POST"
    );
    return await response.json();
  },
};

export default commonApi;
