import { useEffect } from "react";
import { useRouter } from "next/router";
// EFFECTS
import useToolkit from "effects/useToolkit.effect";

const useAuthSession = () => {
  const {
    reduxStore: { authentication: authStore },
  } = useToolkit("authentication");

  const router = useRouter();

  const authEndpoint = "/auth";
  const feedEndpoint = "/feed";

  const { userInfo } = authStore;

  const authToken = userInfo.accessToken;

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
        router.push("/feed");
      }
    }
  }, [authToken]);
  return authToken;
};

export default useAuthSession;
