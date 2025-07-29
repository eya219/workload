import axios from "axios";

export const axiosClient = axios.create({
  baseURL: "http://10.202.54.70:30081/stress",
});
