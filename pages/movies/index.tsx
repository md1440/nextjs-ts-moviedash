import Head from 'next/head';
import Link from 'next/link';
import React, { ReactElement } from 'react';
import LoadingSpinner from '../../components/LoadingSpinner';
import { Movie } from '../../src/types/types';
import { useMovieApi } from '../../src/utils/Api';

function MovieList(): ReactElement {
  const [movies, setMovies] = useMovieApi<Movie[]>('/');

  if (!movies) return <LoadingSpinner />;

  return (
    <div className="font-Poppins">
      <Head>
        <title>List of all Movies</title>
        <meta name="description" content="A list of all Movies" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto">
        <h1 className="mt-12 text-center text-3xl font-extrabold">
          List of all Movies
        </h1>
        <ul>
          {movies.map(
            (movie: Movie): ReactElement => (
              <Link key={movie._id} href={`/movies/${movie._id}`} passHref>
                <li className="px-3 py-2">{movie.title}</li>
              </Link>
            ),
          )}
        </ul>
      </main>

      <footer className="flex"></footer>
    </div>
  );
}

export default MovieList;
