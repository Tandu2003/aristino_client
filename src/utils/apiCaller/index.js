import axios from "axios";
import { Environment } from "../../environments";

axios.defaults.withCredentials = true;

const api = axios.create({
  baseURL: Environment.API_URL,
});

export default api;
