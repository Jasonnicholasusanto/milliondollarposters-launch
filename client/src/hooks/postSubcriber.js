import axios from "axios";
import { makeRequest } from "../makeRequest";

export const postSubscriber = async (name, email) => {
    try {
      const response = await axios.post(
        process.env.REACT_APP_SUB_API_URL + "/subscribers", 
        {
          data: {
            name: name,
            email: email
          }
        },
        {
          baseURL: process.env.REACT_APP_SUB_API_URL,
          headers: {
              Authorization: "bearer " + process.env.REACT_APP_API_TOKEN,
          },
        });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };