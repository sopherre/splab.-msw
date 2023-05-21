import Axios from "axios";

const axiosInstance = Axios.create({
  baseURL: "http://localhost:8080",
  headers: {
    "Content-Type": "application/json",
  },
});

export * from "axios";
export { axiosInstance as axios };
