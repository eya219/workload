import axios from "axios";

export const axiosClient = axios.create({
 baseURL: "http://206.189.230.46:8080/stress",
});
