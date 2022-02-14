/* eslint-disable no-param-reassign */
/* eslint-disable no-self-assign */
import axios, { AxiosResponse, Method } from 'axios';
import { Dispatch, SetStateAction } from 'react';
import useSWR from 'swr';
import { Movie } from '../types/types';

// *** Check if Movie or Movie[] and transform data property
axios.interceptors.response.use(
  (res: AxiosResponse) => {
    if (res && res.data.data.movie) {
      res.data = res.data.data.movie;
      return res;
    }

    if (res && res.data.data.movies) {
      res.data = res.data.data.movies;
      res.data = res.data.filter((movie: Movie) => movie.poster !== undefined);
      return res;
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
    url: `${baseUrl}/${path}`,
  }).then((resp) => resp.data);

}

export function useMovieApi<T>(
  path: string,
): [T | undefined] {
  const { data } = useSWR(path, fetcher);
  return [data];
}
