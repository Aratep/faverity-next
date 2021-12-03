import { Fetch } from "config/fetch.config";

const commonApi = {
  getCategories: async () => {
    let response = await Fetch(`categories`);
    return await response.json();
  },
  getCountries: async () => {
    let response = await Fetch(`countries`);
    return await response.json();
  },
};

export default commonApi;
