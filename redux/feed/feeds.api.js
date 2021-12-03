import { Fetch } from "config/fetch.config";

const feedsApi = {
  getHomeFeedData: async (token, lastId) => {
    let response = await Fetch(`feed/home/page/${lastId}`, "GET", {
      token,
    });
    return await response.json();
  },
  getUserFollowersData: async (token, userId, keyword = "") => {
    let response = await Fetch(
      `user/${userId}/follower?keyword=${keyword}`,
      "GET",
      {
        token,
      }
    );
    return await response.json();
  },
  getUserSubscribersData: async (token, userId, keyword = "") => {
    let response = await Fetch(
      `user/${userId}/abos?keyword=${keyword}`,
      "GET",
      {
        token,
      }
    );
    return await response.json();
  },
  getGroupsData: async (token) => {
    let response = await Fetch(`groups`, "GET", {
      token,
    });
    return await response.json();
  },
  getFeedOwnerData: async (token, userId) => {
    let response = await Fetch(`user/${userId}`, "GET", {
      token,
      accept: "application/json",
    });
    return await response.json();
  },
  getFeedsByCategory: async (token, categoryId, lastId) => {
    let response = await Fetch(
      `feed/byCategory/${categoryId}/page/${lastId}`,
      "GET",
      {
        token,
      }
    );
    return await response.json();
  },
  getFeedsByTagName: async (token, tagName, lastId) => {
    let response = await Fetch(`feed/byTag/${tagName}/page/${lastId}`, "GET", {
      token,
    });
    return await response.json();
  },
  getFeedsByProfile: async (token, userId, lastId) => {
    let response = await Fetch(
      `feed/byProfile/${userId}/page/${lastId}`,
      "GET",
      {
        token,
      }
    );
    return await response.json();
  },
  followUser: async (token, userId) => {
    let response = await Fetch(`user/${userId}/follow`, "PUT", {
      token,
    });
    return await response.json();
  },
  unFollowUser: async (token, userId) => {
    let response = await Fetch(`user/${userId}/follow`, "DELETE", {
      token,
    });
    return await response.json();
  },
  reportPoll: async (token, pollId) => {
    let response = await Fetch(`poll/${pollId}/report`, "POST", {
      token,
    });
    return await response.json();
  },
};

export default feedsApi;
