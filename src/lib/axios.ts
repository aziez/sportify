import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
// import { getToken } from 'next-auth/jwt';

const axiosInstance = axios.create({
  baseURL: process.env.BE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const fetchData = async <T>(
  url: string,
  method: AxiosRequestConfig['method'] = 'GET',
  data: any = null
): Promise<T> => {
  const response: AxiosResponse<T> = await axiosInstance.request<T>({
    url,
    method,
    data,
  });
  return response.data;
};
export default axiosInstance;
