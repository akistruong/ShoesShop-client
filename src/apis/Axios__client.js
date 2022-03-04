import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import queryString from "query-string";
import { BASE__API__URL } from "../const";
const axiosClient = axios.create({
  baseURL: BASE__API__URL,
  headers: {
    "content-type": "application/json",
  },
  responseType: "json",
  paramsSerializer: (ParamsUrl) => queryString.stringify(ParamsUrl),
});

axiosClient.interceptors.request.use(
  (AxiosRequestConfig) => {
    const accessToken = localStorage.accessToken;
    if (accessToken) {
      AxiosRequestConfig.headers.Authorization = `Bearer ${accessToken}`;
    }
    return AxiosRequestConfig;
  },
  function error() {
    return Promise.reject(error);
  }
);

axiosClient.interceptors.response.use(
  (AxiosResponse) => {
    if (AxiosResponse && AxiosResponse.data) {
      return AxiosResponse.data;
    }
    return AxiosResponse;
  },
  (err) => {
    throw err;
  }
);

export default axiosClient;