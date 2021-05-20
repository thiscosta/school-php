import axios, { AxiosInstance } from "axios";
import MockAdapter from "axios-mock-adapter";

import mocks from "./mock";

const createAxiosInstance = (): AxiosInstance => {
  const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    timeout: 5000,
  });
  if (process.env.REACT_APP_ENVIRONMENT === "mock") {
    const mock = new MockAdapter(axiosInstance);
    mocks.forEach((mockMethod) => mockMethod(mock));
  }
  return axiosInstance;
};

export default createAxiosInstance();
