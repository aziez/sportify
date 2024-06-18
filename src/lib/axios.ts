import axios from 'axios';
// import { getToken } from 'next-auth/jwt';

const axiosInstance = axios.create({
  baseURL: process.env.BE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
