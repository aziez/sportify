'use client';
import { categoriesApi } from '@/stores/api/api';
import { useQuery } from '@tanstack/react-query';

const fetchCategories = async () => {
  const { data } = await categoriesApi.allCategories();
  return data;
};

export const useCategories = () => {
  return useQuery({
    queryKey: ['categories'],
    queryFn: () => fetchCategories(),
  });
};
