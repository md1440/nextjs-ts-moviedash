/* eslint-disable arrow-body-style */
/* eslint-disable prefer-destructuring */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable @next/next/no-img-element */
import Head from 'next/head';
import { NextRouter, useRouter } from 'next/router';
import React, { ReactElement, useEffect } from 'react';
import LoadingSpinner from '../../components/LoadingSpinner';
import MovieCardList from '../../components/MovieCardList';
import MovieQuery from '../../components/MovieQuery';
import Pagination from '../../components/Pagination';
import useQuery from '../../src/hooks/useQuery';
import { Movie } from '../../src/types/types';
import { useMovieApi } from '../../src/utils/Api';

interface Props {
  query: any;
}

function MovieList({ query }: Props): ReactElement {
  const router: NextRouter = useRouter();

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

  const queryStr = `${pageQuery}${limitQuery}${yearEqQuery}${genreQuery}${sortQuery}${typeQuery}`;

  const [movies, mutate] = useMovieApi<Movie[]>(queryStr);

  // *** Shallow Routing for updating client url in browser
  useEffect(() => {
    router.push(`${queryStr}`, undefined, { shallow: true });
  }, [queryStr]);

  const onReset = (): void => {
    setPageIndex('1');
    setLimit('100');
    setGenre('');
    setYearEq('');
    setSort('');
    setType('');
  };

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
          type={type}
          setType={setType}
          onReset={onReset}
        />
        <MovieCardList movies={movies} />
        <Pagination pageIndex={pageIndex} setPageIndex={setPageIndex} />
      </main>
    </div>
  );
}

export default MovieList;

MovieList.getInitialProps = ({ query }: any) => {
  return { query };
};
