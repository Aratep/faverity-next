import { useEffect } from "react";
import { useRouter } from "next/router";
import { getCookie } from "cookies-next";

// EFFECTS
import useToolkit from "effects/useToolkit.effect";
// ACTIONS
import { setPathName } from "redux/common/common.actions";
// UTILITIES
import { isObjectEmpty } from "utilities/helper-functions";

const useAuthSession = (path = "/feed") => {
  const {
    dispatch,
    reduxStore: { common: commonStore },
  } = useToolkit("authentication", "common");

  const router = useRouter();
  const user = getCookie("user");
  const parsedUser = !isObjectEmpty(user) && JSON.parse(user);

  const authEndpoint = "/auth";
  const feedEndpoint = "/feed";

  const { pathname } = commonStore;

  const authToken = parsedUser?.accessToken;

  const authPaths = [
    authEndpoint,
    `${authEndpoint}/login`,
    `${authEndpoint}/reset-password`,
    `${authEndpoint}/register`,
    `${authEndpoint}/register/email`,
    `${authEndpoint}/register/facebook`,
    `${authEndpoint}/register/register-success`,
  ];

  const feedPaths = [
    feedEndpoint,
    `${feedEndpoint}/search`,
    `${feedEndpoint}/chats`,
    `${feedEndpoint}/personal-profile`,
    `${feedEndpoint}/create-poll`,
    `${feedEndpoint}/single-feed`,
    `${feedEndpoint}/feed-owner-profile`,
    `${feedEndpoint}/subscribers`,
    `${feedEndpoint}/create-poll`,
    `${feedEndpoint}/poll-preview`,
    `${feedEndpoint}/change-profile`,
    `${feedEndpoint}/change-profile/settings`,
    `${feedEndpoint}/change-profile/change-password`,
    `${feedEndpoint}/comments`,
  ];

  useEffect(() => {
    dispatch(setPathName(path));
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (!authToken) {
      if (authPaths.includes(router.pathname)) {
        router.push(router.pathname);
      } else {
        router.push(`/auth`);
      }
    }
    if (authToken) {
      if (feedPaths.includes(router.pathname)) {
        router.push(router.pathname);
      } else {
        router.push(pathname);
      }

      if (router.pathname === "/") {
        router.push("/feed");
      }
    }
  }, [authToken]);
  return parsedUser?.accessToken;
};

export default useAuthSession;
