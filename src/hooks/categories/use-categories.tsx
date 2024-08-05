'use client';
import { useQuery } from '@tanstack/react-query';

import { categoriesApi } from '@/stores/api/api';

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
