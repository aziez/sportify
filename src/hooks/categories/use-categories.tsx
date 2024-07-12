'use client';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

import { categoriesApi } from '@/stores/api/api';

const fetchCategories = async () => {
  const { data } = await categoriesApi.allCategories();
  return data;
};

const addCategories = async (newCategories: { name: string }) => {
  const data = await axios.post('/api/products', newCategories);
  return data;
};

export const useCategories = () => {
  return useQuery({
    queryKey: ['categories'],
    queryFn: () => fetchCategories(),
  });
};

export const useAddCategories = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: addCategories,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['categories'],
      });
    },
  });
};
