import { endpoint, graphqlQuery } from "../config/queryConfig";

import axios from "axios";

export const fetchPrograms = async () => {
  return await axios.post(`${endpoint}`, graphqlQuery);
};
