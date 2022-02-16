/* eslint-disable @next/next/no-img-element */
import Head from 'next/head';
import React, { ReactElement, useState } from 'react';
import LoadingSpinner from '../../components/LoadingSpinner';
import MovieCardList from '../../components/MovieCardList';
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

        <div className="flex justify-center mt-16 mb-12 items-center">
          <nav aria-label="Page navigation example">
            <ul className="list-style-none flex items-center gap-2">
              <li className="page-item">
                <a
                  className="page-link relative btn mr-0"
                  href="#"
                  onClick={() => pageIndex > 0 ? setPageIndex(pageIndex - 1) : setPageIndex(0)}
                >
                  Prev
                </a>
              </li>
              <li className="page-item">
                <a
                  className="page-link relative block rounded-full border-0 bg-transparent py-1.5 px-3 text-gray-800 outline-none transition-all duration-300 hover:bg-gray-200 hover:text-gray-800 focus:shadow-none"
                  href="#"
                >
                  {pageIndex > 1 ? pageIndex - 1 : ''}
                </a>
              </li>
              <li className="page-item active">
                <a
                  className="page-link relative block rounded-full border-0 bg-indigo-600 py-1.5 px-3 text-white shadow-md outline-none transition-all duration-300 hover:bg-indigo-600 hover:text-white focus:shadow-md"
                  href="#"
                >
                  {pageIndex} <span className="visually-hidden">(current)</span>
                </a>
              </li>
              <li className="page-item">
                <a
                  className="page-link relative block rounded-full border-0 bg-transparent py-1.5 px-3 text-gray-800 outline-none transition-all duration-300 hover:bg-gray-200 hover:text-gray-800 focus:shadow-none"
                  href="#"
                >
                  {pageIndex + 1}
                </a>
              </li>
              <li className="page-item">
                <a
                  className="page-link relative btn mr-0"
                  href="#"
                  onClick={() => setPageIndex(pageIndex + 1)}
                >
                  Next
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </main>
    </div>
  );
}

export default MovieList;
