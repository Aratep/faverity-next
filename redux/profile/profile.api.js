import { Fetch } from "config/fetch.config";

const profileApi = {
  getProfileData: async (token) => {
    let response = await Fetch(`profile`, "GET", { token });
    return await response.json();
  },
  updateProfileData: async (token, params) => {
    const settingsParams = { ...params };
    delete settingsParams.aboCount;
    delete settingsParams.faversCount;
    delete settingsParams.influencer;
    delete settingsParams.loginType;
    delete settingsParams.profileImageUrl;
    delete settingsParams.userId;

    let response = await Fetch(
      `profile`,
      "POST",
      { token },
      { ...settingsParams }
    );
    return await response.json();
  },
  becomeInfluencer: async (token) => {
    let response = await Fetch(`profile/becomeInfluencer`, "POST", { token });
    return await response.json();
  },
};

export default profileApi;
