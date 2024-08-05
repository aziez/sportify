'use client';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

import { productsApi } from '@/stores/api/api';

const fetchProducts = async () => {
  const { data } = await productsApi.allproducts();
  return data;
};

const addProduct = async (newProduct: { name: string; price: number }) => {
  const data = await axios.post('/api/products', newProduct);
  return data;
};

export const useProducts = () => {
  return useQuery({
    queryKey: ['products'],
    queryFn: () => fetchProducts(),
  });
};

export const useAddProduct = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: addProduct,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['products'],
      });
    },
  });
};
