import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:9010/compiler",
  timeout: 2000,
});

const textToBinary = (str = "") => {
  let res = "";
  res = str
    .split("")
    .map((char) => {
      return char.charCodeAt(0).toString(2);
    })
    .join(" ");
  return res;
};

const api = {
  compiler: () => {
    return {
      execute: (code: string) => {
        const encoded = Buffer.from(code)
          .toString("base64")
          .replaceAll("=", "");
        console.log(encoded);

        return axiosInstance.post("/execute", encoded);
      },
    };
  },
};

export default api;
