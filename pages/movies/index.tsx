/* eslint-disable @next/next/no-img-element */
import Head from 'next/head';
import React, { ReactElement, useState } from 'react';
import LoadingSpinner from '../../components/LoadingSpinner';
import MovieCardList from '../../components/MovieCardList';
import { Movie } from '../../src/types/types';
import { useMovieApi } from '../../src/utils/Api';

function MovieList(): ReactElement {
  const [pageIndex, setPageIndex] = useState(0);
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
        <div className='mt-12 flex flex-row justify-center gap-4'>
          <button type="button" className='btn' onClick={() => setPageIndex(pageIndex - 1)}>Previous</button>
          <button type="button" className='btn' onClick={() => setPageIndex(pageIndex + 1)}>Next</button>
        </div>
      </main>
    </div>
  );
}

export default MovieList;
