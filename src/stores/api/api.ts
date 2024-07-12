import axiosInstance from '@/lib/axios';

export const authApi = {
  register: (data: any) => axiosInstance.post('/api/auth/register', data),
};

export const emailApi = {
  resend: (data: any) => axiosInstance.post('/api/auth/resend', data),
};

export const productsApi = {
  allproducts: () => axiosInstance.get('/api/products'),
};
export const categoriesApi = {
  allCategories: () => axiosInstance.get('/api/categories'),
};
