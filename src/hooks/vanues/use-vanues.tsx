/* eslint-disable react-hooks/rules-of-hooks */
'use client';

import { vanueApi } from '@/stores/api/api';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

interface VanueInterface {
  name: string;
  localtion: string;
  logo: string;
  lat: number;
  lng: number;
}

const fetchVanue = async (userId: string) => {
  const fetching = await vanueApi.getVanue(userId);

  // Extract the first element from the data array if needed
  const data = fetching?.data?.data[0];

  return { data }; // Return the extracted venue
};

const createVanue = async (vanue: VanueInterface) => {
  const data = await vanueApi.addVanue(vanue);

  return data;
};

export const getUserVanue = (userId: string) => {
  return useQuery({
    queryKey: ['vanue', userId], // Include userId in the query key for proper caching
    queryFn: () => fetchVanue(userId),
  });
};

export const addProduct = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createVanue,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['vanue'],
      });
    },
  });
};
