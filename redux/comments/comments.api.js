import { Fetch } from "config/fetch.config";

const commentsApi = {
  voteAPoll: async (token, pollId, optionId) => {
    let response = await Fetch(`poll/${pollId}/vote/${optionId}`, "POST", {
      token,
    });
    return await response.json();
  },
  getPollComments: async (token, pollId) => {
    let response = await Fetch(`polls/${pollId}/comment`, "GET", {
      token,
    });
    return await response.json();
  },
  addComment: async (token, pollId, comment) => {
    let response = await Fetch(
      `polls/${pollId}/comment`,
      "PUT",
      {
        token,
      },
      {
        comment,
      }
    );
    return await response.json();
  },
  reportComment: async (token, commentId) => {
    let response = await Fetch(
      `comments/${commentId}/report?commentId=${commentId}`,
      "POST",
      {
        token,
      }
    );
    return await response.json();
  },
};

export default commentsApi;
