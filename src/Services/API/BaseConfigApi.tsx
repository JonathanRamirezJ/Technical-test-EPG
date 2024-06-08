import axios from "axios";
import { baseURL } from "../../Constants/ConfigureApi";

export const BaseConfigApi = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-Type": "application/json",
  }
});

BaseConfigApi.interceptors.request.use(
  function(config) {
    return config;
  },
  function(error) {
    return Promise.reject(error);
  }
);