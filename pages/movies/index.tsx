/* eslint-disable @next/next/no-img-element */
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React, { ReactElement } from 'react';
import { MdStars } from 'react-icons/md';
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
        <div className="mt-8 flex flex-row flex-wrap justify-around gap-7">
          {movies.map(
            (movie: Movie): ReactElement => (
              <Link key={movie._id} href={`/movies/${movie._id}`} passHref>
                <div className="w-56 cursor-pointer rounded-lg bg-indigo-100 shadow-lg">
                  <div className="relative my-2 h-60 rounded-t-lg">
                    {movie.poster && (
                      <Image
                        src={movie.poster}
                        objectFit="contain"
                        layout="fill"
                      />
                    )}
                  </div>
                  <div className="rounded-b-lg bg-gray-100 px-3 py-2">
                    <h2 className="text-sm font-semibold">{movie.title}</h2>
                    <div className="flex flex-row items-center justify-between pt-1">
                      <div className="flex flex-row items-center mt-1">
                        <p className="text-sm text-yellow-500 mr-1">
                          <MdStars />
                        </p>
                        <p className="text-sm font-semibold">
                          {movie.imdb.rating}
                        </p>
                      </div>
                      <p className="text-sm font-medium ">{movie.year}</p>
                    </div>
                    <p className="text-sm font-regular italic">
                      {movie.genres.join(', ')}
                    </p>
                  </div>
                </div>
              </Link>
            ),
          )}
        </div>
      </main>
      <footer className="flex" />
    </div>
  );
}

export default MovieList;
