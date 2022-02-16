/* eslint-disable prefer-const */
import Head from 'next/head';
import React, { ReactElement } from 'react';
import LoadingSpinner from '../../components/LoadingSpinner';
import MovieCardList from '../../components/MovieCardList';
import { Movie } from '../../src/types/types';
import { useMovieApi } from '../../src/utils/Api';

function RandomMovie(): ReactElement {
  let [movies, mutate] = useMovieApi<Movie[]>('/random', {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });

  if (!movies) return <LoadingSpinner />;

  return (
    <div className="font-Poppins">
      <Head>
        <title>Random Movies</title>
        <meta name="description" content="Top 100 rated Movies of Alltime" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="mt-12 mb-14 text-center text-5xl font-black tracking-wider text-indigo-500">
        Random Movies
      </h1>
      <MovieCardList movies={movies} />
      <button
        type="button"
        className="btn mx-auto mt-12 flex"
        onClick={() => mutate()}
      >
        Random
      </button>
    </div>
  );
}

export default RandomMovie;
