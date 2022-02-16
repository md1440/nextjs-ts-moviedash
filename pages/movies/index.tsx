/* eslint-disable jsx-a11y/label-has-associated-control */
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
  const defaultQuery = `?page=${pageIndex}`;

  const [limit, setLimit] = useState('100');
  const [genre, setGenre] = useState('');
  const [sort, setSort] = useState('')

  const limitQuery = `&limit=${limit}`;
  const genreQuery = genre !== '' ? `&genres=${genre}` : '';
  const sortQuery = sort !== '' ? `&sort=${sort}` : '';

  const [movies] = useMovieApi<Movie[]>(
    `${defaultQuery}${limitQuery}${genreQuery}${sortQuery}`,
  );

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

        <div className="mt-12 mb-8 flex flex-row items-center justify-end gap-4">
          <div className="flex flex-col">
            <label className="mb-2 text-base font-medium tracking-wider text-gray-900">
              Genre
            </label>
            <select
              className="mr-2 mb-2 w-max border border-indigo-600 px-5 py-2.5 text-left text-base font-medium tracking-wide text-indigo-700 invalid:border-rose-400 hover:bg-indigo-100 hover:bg-opacity-25 hover:text-indigo-600 focus:bg-white focus:outline-none valid:focus:ring-2 valid:focus:ring-indigo-300"
              value={genre}
              onChange={(e) => setGenre(e.target.value)}
            >
              <option value="">All Genres</option>
              <option value="Action">Action</option>
              <option value="Animation">Animation</option>
              <option value="Adventure">Adventure</option>
              <option value="Biography">Biography</option>
              <option value="Comedy">Comedy</option>
              <option value="Crime">Crime</option>
              <option value="Drama">Drama</option>
              <option value="Documentary">Documentary</option>
              <option value="Fantasy">Fantasy</option>
              <option value="History">History</option>
              <option value="Horror">Horror</option>
              <option value="Thriller">Thriller</option>
              <option value="Mystery">Mystery</option>
              <option value="Sci-Fi">Sci-Fi</option>
              <option value="War">War</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label className="mb-2 text-base font-medium tracking-wider text-gray-900">
              Sort
            </label>
            <select
              className="mr-2 mb-2 w-max border border-indigo-600 px-5 py-2.5 text-left text-base font-medium tracking-wide text-indigo-700 invalid:border-rose-400 hover:bg-indigo-100 hover:bg-opacity-25 hover:text-indigo-600 focus:bg-white focus:outline-none valid:focus:ring-2 valid:focus:ring-indigo-300"
              value={sort}
              onChange={(e) => setSort(e.target.value)}
            >
              <option value="-rating">By rating (descending)</option>
              <option value="rating">By rating (ascending)</option>
              <option value="-year">By year (descending)</option>
              <option value="year">By year (ascending)</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label className="mb-2 text-base font-medium tracking-wider text-gray-900">
              Limit
            </label>
            <select
              className="mr-2 mb-2 w-max border border-indigo-600 px-5 py-2.5 text-left text-base font-medium tracking-wide text-indigo-700 invalid:border-rose-400 hover:bg-indigo-100 hover:bg-opacity-25 hover:text-indigo-600 focus:bg-white focus:outline-none valid:focus:ring-2 valid:focus:ring-indigo-300"
              value={limit}
              onChange={(e) => setLimit(e.target.value)}
            >
              <option value="25">25</option>
              <option value="50">50</option>
              <option value="75">75</option>
              <option value="100">100</option>
            </select>
          </div>
        </div>
        <MovieCardList movies={movies} />
        <Pagination pageIndex={pageIndex} setPageIndex={setPageIndex} />
      </main>
    </div>
  );
}

export default MovieList;
