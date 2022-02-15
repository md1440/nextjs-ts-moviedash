/* eslint-disable no-underscore-dangle */
import Head from 'next/head';
import React, { ReactElement } from 'react';
import LoadingSpinner from '../../components/LoadingSpinner';
import MovieCardList from '../../components/MovieCardList';
import { Movie } from '../../src/types/types';
import { useMovieApi } from '../../src/utils/Api';

function Top100Alltime(): ReactElement {
  const [movies, mutate] = useMovieApi<Movie[]>('/top-100-alltime');

  if (!movies) return <LoadingSpinner />;

  return (
    <div className="font-Poppins">
      <Head>
        <title>Top 100 Movies of Alltime</title>
        <meta name="description" content="Top 100 rated Movies of Alltime" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="mt-12 text-center text-5xl font-black tracking-wider text-indigo-500">
        Top 100 Movies of Alltime
      </h1>
      <MovieCardList movies={movies} />
    </div>
  );
}

export default Top100Alltime;
