import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

// token이 필요없는 axios 인스턴스
const http = axios.create({
  baseURL: API_URL,
  withCredentials: true,
});

// token이 필요한 axios 인스턴스
// const https = axios.create({
//   baseURL: API_URL,
//   withCredentials: true,
// });

// https.interceptors.request.use(config => {
//   const { accessToken } = store.getState().user;
//   if (accessToken) {
//     config.headers["Authorization"] = `Bearer ${accessToken}`;
//   }
//   return config;
// });

export { http };
