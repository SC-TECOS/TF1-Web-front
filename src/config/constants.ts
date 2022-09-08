const config = {
  VERSION: process.env.VERSION,
};

export default config;

export const SERVER_API_URL =
  process.env.REACT_APP_SERVER_API_URL || "https://localhost:3000/";
