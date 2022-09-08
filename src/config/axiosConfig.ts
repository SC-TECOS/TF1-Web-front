import axios from "axios";
import { SERVER_API_URL } from "./constants";

const API = axios.create({
  baseURL: SERVER_API_URL,
});

export default API;
