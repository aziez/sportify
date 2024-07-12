/* eslint-disable no-useless-catch */
/*eslint no-useless-catch: "error"*/

'use client';
import { useQuery } from '@tanstack/react-query';

import { productsApi } from '@/stores/api/api';

const getAllProducts = async (limit = 10) => {
  try {
    const req = await productsApi.allproducts();
    const data = await req.data;

    return data.filter((x: any) => x.id <= limit);
  } catch (error) {
    throw error;
  }
};

export const useGetAllProduct = () => {
  return useQuery({
    queryKey: ['products', 10],
    queryFn: () => getAllProducts(10),
  });
};
