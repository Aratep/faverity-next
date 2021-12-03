import { Fetch } from "config/fetch.config";
import { setGlobalMessage } from "redux/common/common.slice";

const createPollApi = {
  createPoll: async (token, params) => {
    let response = await Fetch(
      `poll`,
      "PUT",
      { token },
      {
        ...params,
      }
    );
    return await response.json();
  },
  uploadPollImages: async (url, image, dispatch) => {
    const formData = new FormData();

    formData.append("File", image);
    console.log(formData);

    fetch(url, {
      method: "PUT",
      body: JSON.stringify(formData),
      headers: {
        // "Content-Type": image.type,
        Accept: "*/*",
      },
    })
      .then((res) => {
        console.log(res.url);
        dispatch(setGlobalMessage({ severity: "success", text: "Uploaded!" }));
      })
      .catch((err) => {
        dispatch(setGlobalMessage({ severity: "error", text: err.message }));
        console.log(err);
      });
  },
};

export default createPollApi;
