import axios from "axios";
import { Environment } from "../environments";

axios.defaults.withCredentials = true;

console.log(Environment.API_URL + "/api");

const api = axios.create({
  baseURL: Environment.API_URL + "/api",
});

export default api;
