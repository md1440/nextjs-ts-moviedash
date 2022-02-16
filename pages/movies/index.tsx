/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable @next/next/no-img-element */
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { ReactElement, useEffect, useState } from 'react';
import LoadingSpinner from '../../components/LoadingSpinner';
import MovieCardList from '../../components/MovieCardList';
import Pagination from '../../components/Pagination';
import { Movie } from '../../src/types/types';
import { useMovieApi } from '../../src/utils/Api';

function MovieList(): ReactElement {
  const [pageIndex, setPageIndex] = useState(1);
  const defaultQuery = `?page=${pageIndex}`;

  const [limit, setLimit] = useState('100');
  const [genre, setGenre] = useState('');
  const [sort, setSort] = useState('');

  const limitQuery = `&limit=${limit}`;
  const genreQuery = genre !== '' ? `&genres=${genre}` : '';
  const sortQuery = sort !== '' ? `&sort=${sort}` : '';
  const query = `${defaultQuery}${limitQuery}${genreQuery}${sortQuery}`;

  const [movies, mutate] = useMovieApi<Movie[]>(query);

  const router = useRouter();

  useEffect(() => {
    router.push(`/movies${query}`, undefined, { shallow: true });
  }, [movies, query]);

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

        <div className="mt-12 mb-8 flex flex-row items-end justify-end gap-4">
          <div className="flex flex-col">
            <label className="mb-[0.5px] text-base font-medium tracking-wider text-indigo-600">
              Genre
            </label>
            <select
              className="mr-2 w-max border border-indigo-600 px-5 py-2.5 text-left text-base font-medium tracking-wide text-indigo-700 invalid:border-rose-400 hover:bg-indigo-100 hover:bg-opacity-25 hover:text-indigo-600 focus:bg-white focus:outline-none valid:focus:ring-2 valid:focus:ring-indigo-300"
              value={genre}
              onChange={(e) => setGenre(e.target.value)}
            >
              <option value="">All Genres</option>
              <option value="action">Action</option>
              <option value="animation">Animation</option>
              <option value="adventure">Adventure</option>
              <option value="biography">Biography</option>
              <option value="comedy">Comedy</option>
              <option value="crime">Crime</option>
              <option value="drama">Drama</option>
              <option value="documentary">Documentary</option>
              <option value="fantasy">Fantasy</option>
              <option value="history">History</option>
              <option value="horror">Horror</option>
              <option value="thriller">Thriller</option>
              <option value="mystery">Mystery</option>
              <option value="sci-Fi">Sci-Fi</option>
              <option value="war">War</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label className="mb-[0.5px] text-base font-medium tracking-wider text-indigo-600">
              Sort
            </label>
            <select
              className="mr-2 w-max border border-indigo-600 px-5 py-2.5 text-left text-base font-medium tracking-wide text-indigo-700 invalid:border-rose-400 hover:bg-indigo-100 hover:bg-opacity-25 hover:text-indigo-600 focus:bg-white focus:outline-none valid:focus:ring-2 valid:focus:ring-indigo-300"
              value={sort}
              onChange={(e) => setSort(e.target.value)}
            >
              <option value="-rating">By rating ⬇</option>
              <option value="rating">By rating ⬆</option>
              <option value="-year">By year ⬇</option>
              <option value="year">By year ⬆</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label className="mb-[0.5px] text-base font-medium tracking-wider text-indigo-600">
              Limit
            </label>
            <select
              className="mr-2 w-max border border-indigo-600 px-5 py-2.5 text-left text-base font-medium tracking-wide text-indigo-700 invalid:border-rose-400 hover:bg-indigo-100 hover:bg-opacity-25 hover:text-indigo-600 focus:bg-white focus:outline-none valid:focus:ring-2 valid:focus:ring-indigo-300"
              value={limit}
              onChange={(e) => setLimit(e.target.value)}
            >
              <option value="25">25</option>
              <option value="50">50</option>
              <option value="75">75</option>
              <option value="100">100</option>
            </select>
          </div>
          <div className=''>
            <button className="btn mb-0 py-3 rounded-lg" type="button" onClick={() => router.push('/movies')}>
              Reset
            </button>
          </div>
        </div>
        <MovieCardList movies={movies} />
        <Pagination pageIndex={pageIndex} setPageIndex={setPageIndex} />
      </main>
    </div>
  );
}

export default MovieList;
