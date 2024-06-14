import axios from 'axios';
import { getToken } from 'next-auth/jwt';

const axiosInstance = axios.create({
  baseURL: process.env.BE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.request.use(
  async (config) => {
    // Assuming you have access to req object
    const token = await getToken({ req: config.req });

    if (token) {
      config.headers.Authorization = `Bearer ${token.accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
