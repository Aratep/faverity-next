import { Fetch } from "config/fetch.config";

const chatApi = {
  getCommonPolls: async (token, userId, lastId = -1) => {
    let response = await Fetch(`feed/byUser/${userId}/page/${lastId}`, "GET", {
      token,
    });
    return await response.json();
  },
};

export default chatApi;
