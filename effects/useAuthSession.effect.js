import { useEffect } from "react";
import Router from "next/router";

// EFFECTS
import useToolkit from "effects/useToolkit.effect";

const useAuthSession = () => {
  const {
    reduxStore: { authentication: authStore },
  } = useToolkit("authentication");

  const { userInfo } = authStore;

  const authToken = userInfo.accessToken;

  useEffect(() => {
    if (!authToken) Router.push("/auth/login");
    if (authToken) Router.push("/feed/search");
  }, [authToken]);
  return authToken;
};

export default useAuthSession;
