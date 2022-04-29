/* eslint-disable arrow-body-style */
/* eslint-disable prefer-destructuring */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable @next/next/no-img-element */
import Head from 'next/head';
import { NextRouter, useRouter } from 'next/router';
import React, { ReactElement, useEffect, useState } from 'react';
import MovieCardList from '../components/MovieCardList';
import MovieQuery from '../components/MovieQuery';
import Pagination from '../components/Pagination';
import useQuery from '../src/hooks/useQuery';
import { Movie } from '../src/types/types';
import { useMovieApi } from '../src/utils/Api';

interface Props {
  query: any;
}

// TODO - Implement getStaticProps
function MovieList({ query }: Props): ReactElement {
  // *** Building the Query
  const [pageQuery, pageIndex, setPageIndex] = useQuery(
    query.page || '1',
    `?page=`,
  );

  const [limitQuery, limit, setLimit] = useQuery(
    query.limit || '100',
    `&limit=`,
  );

  const [genreQuery, genre, setGenre] = useQuery(
    query.genres || '',
    `&genres=`,
  );

  const [yearEqQuery, yearEq, setYearEq] = useQuery(
    query['year[eq]'] || '',
    `&year[eq]=`,
  );

  const [typeQuery, type, setType] = useQuery(query.type || '', `&type=`);

  const [sortQuery, sort, setSort] = useQuery(query.sort || '', `&sort=`);

  const [searchQuery, searchResults, setSearchResults] = useQuery(
    query.searchall || '',
    `&searchall=`,
  );

  // *** State for searchTerm of Search funct in <Moviequery />
  const [searchTerm, setSearchTerm] = useState(searchResults);

  // *** Building the querystr
  const queryStr = `${pageQuery}${limitQuery}${yearEqQuery}${genreQuery}${sortQuery}${typeQuery}${searchQuery}`;

  // *** Fetching the Data
  const [movies, mutate] = useMovieApi<Movie[]>(queryStr);

  // *** Shallow Routing for updating client url in browser
  const router: NextRouter = useRouter();
  
  useEffect(() => {
    router.push(`${queryStr}`, undefined, { shallow: true });
  }, [queryStr]);

  // *** onReset clickhandler -> reset form to default
  const onReset = (): void => {
    setPageIndex('1');
    setLimit('100');
    setGenre('');
    setYearEq('');
    setSort('');
    setType('');
    setSearchTerm('');
    setSearchResults('');
  };

  return (
    <div className="font-Poppins">
      <Head>
        <title>The Movie-Dash</title>
        <meta name="description" content="Some cool Movie page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <h1 className="mt-12 text-center text-5xl font-black tracking-wider text-indigo-500">
          Imagine Cool Headline Here
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
          type={type}
          setType={setType}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          searchResults={searchResults}
          setSearchResults={setSearchResults}
          onReset={onReset}
        />
        <MovieCardList movies={movies} />
        <Pagination pageIndex={pageIndex} setPageIndex={setPageIndex} />
      </div>
    </div>
  );
}

export default MovieList;

MovieList.getInitialProps = ({ query }: any) => {
  return { query };
};
