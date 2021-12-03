import { useEffect } from "react";
import { useRouter } from "next/router";
// EFFECTS
import useToolkit from "effects/useToolkit.effect";

const useAuthSession = (path) => {
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
    `${feedEndpoint}/profile`,
    `${feedEndpoint}/create-poll`,
    `${feedEndpoint}/single-feed`,
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
