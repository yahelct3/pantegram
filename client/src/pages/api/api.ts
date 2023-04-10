import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:9010/compiler",
  timeout: 2000,
});

const api = {
  compiler: () => {
    return {
      execute: (code: string) => {
        const encoded = Buffer.from(code)
          .toString("base64")
          .replaceAll("=", "");

        return axiosInstance.post("/execute", encoded);
      },
    };
  },
};

export default api;
