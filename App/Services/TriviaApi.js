import NetInfo from "@react-native-community/netinfo";
import axios from "axios";

const BASE_URLS = "https://opentdb.com";

export const triviaFetch = async (path, options = {}) => {
  const url = `${BASE_URLS}/api.php${path}`;

  try {
    const networkState = await NetInfo.fetch();

    if (!networkState.isConnected) {
      throw new Error("You're currently offline");
    }

    const res = await axios({ url: url, ...options });

    console.log("res", res);
    if (res.status !== 200) {
      throw new Error("Something went wrong... please try again.");
    }

    const { data } = res;

    return data;
  } catch (error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      return Promise.reject({
        message: "Something unexpected went wrong ... please try again.",
      });
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in node.js
      return Promise.reject({
        message: "Could not connect... please try again.",
      });
    } else {
      // Something happened in setting up the request that triggered an Error
      return Promise.reject(error);
    }
  }
};
