/* eslint-disable @next/next/no-img-element */
import Head from 'next/head';
import React, { ReactElement, useState } from 'react';
import LoadingSpinner from '../../components/LoadingSpinner';
import MovieCardList from '../../components/MovieCardList';
import Pagination from '../../components/Pagination';
import { Movie } from '../../src/types/types';
import { useMovieApi } from '../../src/utils/Api';

function MovieList(): ReactElement {
  const [pageIndex, setPageIndex] = useState(1);
  const [movies, mutate] = useMovieApi<Movie[]>(`?page=${pageIndex}`);
  // const [cnt, setCnt] = useState(1);

  if (!movies) return <LoadingSpinner />;

  return (
    <div className="font-Poppins">
      <Head>
        <title>List of all Movies</title>
        <meta name="description" content="A list of all Movies" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1 className="mt-12 text-center text-5xl font-black tracking-wider text-indigo-500">
          List of all Movies
        </h1>
        <MovieCardList movies={movies} />
       <Pagination  pageIndex={pageIndex} setPageIndex={setPageIndex} />
      </main>
    </div>
  );
}

export default MovieList;
