import axios from "axios";

export const axiosClient = axios.create({
  baseURL: "http://167.71.30.203:8080/stress",
});
