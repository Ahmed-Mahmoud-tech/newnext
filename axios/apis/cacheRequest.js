"use server";
import axios from "axios";
import { cookies } from "next/headers";

const cacheRequest = () => {
  const localStorageToken = cookies().get("token");
  let axiosObject = {
    baseURL: "http://localhost:5000/api/",
    withCredentials: true,
    headers: {
      "Access-Control-Expose-Headers": "token1",
      Authorization: localStorageToken?.value,
      Cookie: cookies(),
    },
  };
  const mainInstance = axios.create(axiosObject);
  return mainInstance;
};

export default cacheRequest;
