import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:9010/compiler",
  timeout: 2000,
});

const api = {
  compiler: () => {
    return {
      execute: (code: string) => {
        const encodedBase64 = Buffer.from(code, "binary").toString("base64");

        return axiosInstance.post(
          "/execute", encodedBase64
        );
      },
    };
  },
};

export default api;
