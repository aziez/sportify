import { useMutation, useQueryClient } from '@tanstack/react-query';

import { getAllcategories } from './queries';

export const useCategoriesMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => {
      return getAllcategories();
    },

    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: ['categories'] }),
  });
};
