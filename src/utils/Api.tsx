/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable no-param-reassign */
/* eslint-disable no-self-assign */
import axios, { AxiosResponse, Method } from 'axios';
import { useDebugValue } from 'react';
import useSWR, { KeyedMutator } from 'swr';
import { Movie } from '../types/types';

// *** Check if Movie or Movie[] and transform data property
axios.interceptors.response.use(
  (res: AxiosResponse) => {
    if (res.statusText === 'OK') {
      if (res && res.data.data.movie) {
        res.data = res.data.data.movie;
        if (!res.data.poster) {
          res.data.poster = '/images/2084555.jpg';
        }

        return res;
      }

      if (res && res.data.data.movies) {
        res.data = res.data.data.movies;
        res.data = res.data.map((movie: Movie) => {
          if (!movie.poster) {
            movie.poster = '/images/2084555.jpg';
          }
          if (!movie.imdb.rating) {
            movie.imdb.rating = 5.0;
          }
          if (!movie.year) {
            movie.year = 2000;
          }
          return movie;
        });
        return res;
      }
    }

    return res;
  },
  (error) => Promise.reject(error),
);

export function movieApi<T>(
  method: Method,
  path: string,
  callback: (data: T) => void,
  data = {},
): void {
  const baseUrl = 'https://moviedb-rest-api.herokuapp.com/api/v1/movies';
  axios({
    method,
    url: `${baseUrl}${path}`,
    data,
  })
    .then((res: AxiosResponse<T>): void => {
      callback(res.data);
    })
    .catch();
}

export async function fetcher(path: string) {
  const baseUrl = 'https://moviedb-rest-api.herokuapp.com/api/v1/movies';
  return axios({
    method: 'GET',
    url: `${baseUrl}${path}`,
  }).then((res) => res.data);
}

export function useMovieApi<T>(
  path: string,
  swrConf = {},
): [T | undefined, KeyedMutator<T>] {
  const { data, mutate } = useSWR(path, fetcher, swrConf);
  useDebugValue(data);
  return [data, mutate];
}

// export function useMovieApiInfinite<T>(
//   getKey: () => {},
//   swrConf = {},
// ): [T | undefined, number, () => {}] {
//   const { data, size, setSize } = useSWRInfinite(getKey, fetcher, swrConf);
//   useDebugValue(data);
//   return [data, size, setSize];
// }
