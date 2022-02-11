import axios, { AxiosResponse, Method } from 'axios';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';

// *** Check if Movie or Movie[] and transform data property
axios.interceptors.response.use(
  (res: AxiosResponse) => {
    if (res && res.data.data.movie) {
      res.data = res.data.data.movie;
      return res;
    }

    if (res && res.data.data.movies) {
      res.data = res.data.data.movies;
      return res;
    }
    return res;
  },
  (error) => Promise.reject(error),
);

export function movieApi<T>(
  method: Method,
  path: string,
  callback?: (data: T) => void,
  data = {},
): void {
  const baseUrl = 'https://moviedb-rest-api.herokuapp.com/api/v1/movies';
  axios({
    method,
    url: `${baseUrl}${path}`,
    data,
  })
    .then((res: AxiosResponse<T>): void => {
      if (callback) callback(res.data);
      res.data;
    })
    .catch();
}

export function useMovieApi<T>(
  path: string,
): [T | undefined, Dispatch<SetStateAction<T | undefined>>] {
  const [data, setData] = useState<T>();

  useEffect((): void => {
    movieApi('get', `${path}`, setData);
  }, [path]);
  return [data, setData];
}
