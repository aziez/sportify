import { useState } from 'react';

export const SUCCESS = 'SUCCESS';
export const ERROR = 'ERROR';

type ApiFunction<T> = (...args: any[]) => Promise<T>;
type UseAsyncReturn<T> = [
  (...args: any[]) => Promise<T>,
  boolean,
  string | undefined,
  T | undefined,
];

const useAsync = <T,>(
  api: ApiFunction<T>,
  defaultLoading: boolean = false,
): UseAsyncReturn<T> => {
  const [inProgress, setInProgress] = useState(defaultLoading);
  const [error, setError] = useState<string | undefined>(undefined);
  const [success, setSuccess] = useState<T | undefined>(undefined);

  const callApi = (...args: any[]) =>
    new Promise<T>((resolve, reject) => {
      setInProgress(true);
      setError(undefined);

      api(...args)
        .then((res) => {
          setSuccess(res);
          resolve(res);
        })
        .catch((err) => {
          setError(
            err?.data?.message ??
              err?.data?.ErrorMessage?.indonesian ??
              err?.message,
          );
          reject(err);
        })
        .finally(() => {
          setInProgress(false);
        });
    });

  return [callApi, inProgress, error, success];
};

export default useAsync;
