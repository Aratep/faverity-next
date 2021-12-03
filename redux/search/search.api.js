import { Fetch } from "config/fetch.config";

const searchApi = {
  searchUser: async (searchString, token) => {
    let response = await Fetch(
      `search/user`,
      "POST",
      { token },
      {
        searchString,
      }
    );
    return await response.json();
  },
  searchTag: async (searchString, token) => {
    let response = await Fetch(
      `search/tag`,
      "POST",
      { token },
      {
        searchString,
      }
    );
    return await response.json();
  },
  searchPoll: async (searchString, token) => {
    let response = await Fetch(
      `search/poll`,
      "POST",
      { token },
      {
        searchString,
      }
    );
    return await response.json();
  },
};

export default searchApi;
