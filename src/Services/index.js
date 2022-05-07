import axios from "axios";
import { getItem } from "../persist-storage";

export const BASE_URL = "https://webdesignpreviews.com/custom/storyshare";

export const getToken = async () => {
  const token = await getItem("token");
  return token;
};

export const getUser = async () => {
  const user = await getItem("user");
  return JSON.parse(user);
};

export const fetchAPI = async (
  method,
  api,
  data,
  headers = null,
  params = null
) => {
  

  const url = `${BASE_URL}/public/api/${api}`;
  const config = {
    method, // *GET, POST, PUT, DELETE, etc.
    headers,
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  };
  if (headers) {
    // alert("inside Heade")
    config.headers.Authorization = "Bearer " + (await getToken());
  }
  // console.log(config)
  return await fetch(url, config);
};
