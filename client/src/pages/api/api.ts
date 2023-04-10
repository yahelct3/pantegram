import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://localhost:9010/compiler",
  timeout: 2000,
});

const api = {
  compiler: (code: string) => {
    return {
      execute: axiosInstance.post("/execute", {
        data: code,
      }),
    };
  },
};
