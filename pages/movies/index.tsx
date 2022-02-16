/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable @next/next/no-img-element */
import Head from 'next/head';
import { NextRouter, useRouter } from 'next/router';
import React, { ReactElement, useEffect, useState } from 'react';
import LoadingSpinner from '../../components/LoadingSpinner';
import MovieCardList from '../../components/MovieCardList';
import MovieQuery from '../../components/MovieQuery';
import Pagination from '../../components/Pagination';
import { Movie } from '../../src/types/types';
import { useMovieApi } from '../../src/utils/Api';

function MovieList(): ReactElement {
  const [pageIndex, setPageIndex] = useState(1);
  const defaultQuery = `?page=${pageIndex}`;

  // *** Building the Query
  const [limit, setLimit] = useState('100');
  const [genre, setGenre] = useState('');
  const [yearEq, setYearEq] = useState('');
  const [sort, setSort] = useState('');

  const limitQuery = `&limit=${limit}`;
  const genreQuery = genre !== '' ? `&genres=${genre}` : '';
  const yearEqQuery = yearEq !== '' ? `&year[eq]=${yearEq}` : '';
  const sortQuery = sort !== '' ? `&sort=${sort}` : '';
  const queryStr = `${defaultQuery}${limitQuery}${yearEqQuery}${genreQuery}${sortQuery}`;

  const [query, setQuery] = useState(queryStr);

  // *** Functionality needed for reset
  useEffect(() => {
    setQuery(queryStr);
  }, [queryStr]);

  const [movies, mutate] = useMovieApi<Movie[]>(query);

  const router: NextRouter = useRouter();

  // *** Shallow Routing for updating client url in browser
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

        <MovieQuery
          genre={genre}
          setGenre={setGenre}
          limit={limit}
          setLimit={setLimit}
          yearEq={yearEq}
          setYearEq={setYearEq}
          sort={sort}
          setSort={setSort}
          setQuery={setQuery}
          defaultQuery={defaultQuery}
        />
        <MovieCardList movies={movies} />
        <Pagination pageIndex={pageIndex} setPageIndex={setPageIndex} />
      </main>
    </div>
  );
}

export default MovieList;
