import error from 'next/error';
import { useRouter } from 'next/router';
import React, { ReactElement } from 'react';
import { Movie } from '../../src/types/types';
import { useMovieApi } from '../../src/utils/Api';

function MovieDetails(): ReactElement {
  const {
    query: { movieid },
  } = useRouter();
  // console.log(movieid);
  // const fetcher = (url: string) => axios.get(url).then((res) => res.data);
  // const { data, error } = useSWR(
  //   `https://moviedb-rest-api.herokuapp.com/api/v1/movies/${movieid}`,
  //   fetcher,
  // );

  const [movie] = useMovieApi<Movie>(`/${movieid}`);

  if (!movie) return <div>Loading...</div>;

 

  return <div>{movie.title}</div>;
}

export default MovieDetails;
