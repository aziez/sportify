/* eslint-disable no-useless-catch */
/*eslint no-useless-catch: "error"*/
import axiosInstance from '@/lib/axios';

export const getAllcategories = async () => {
  try {
    const req = await axiosInstance.get('/api/categories');
    const data = await req.data;

    return data;
  } catch (error) {
    throw error;
  }
};
