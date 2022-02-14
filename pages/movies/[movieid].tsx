/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/jsx-one-expression-per-line */
import { Dialog, Transition } from '@headlessui/react';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { Fragment, ReactElement, useState } from 'react';
import { MdStars } from 'react-icons/md';
import LoadingSpinner from '../../components/LoadingSpinner';
import DeleteModal from '../../components/modals/DeleteModal';
import { Movie } from '../../src/types/types';
import { movieApi, useMovieApi } from '../../src/utils/Api';

function MovieDetails(): ReactElement {
  const {
    back,
    asPath,
    push,
    replace,
  } = useRouter();

  const movieId = asPath.slice(7);
  console.log(movieId)

  const [movie] = useMovieApi<Movie>(`${movieId}`);
  const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const onDelete = () => {
    movieApi('delete', `/${movieId}`, () => replace('/movies'));
  };

  if (!movie) return <LoadingSpinner />;

  return (
    <div className="font-Poppins">
      <Head>
        <title>The Movie-Dash</title>
        <meta name="description" content="Some cool Movie page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="mt-20 rounded-lg bg-indigo-100 shadow-lg">
        <div className="relative flex min-h-fit flex-row justify-between rounded-t-lg">
          <div className="basis-4/12 py-20 pl-20">
            {movie.poster && (
              <Image
                src={movie.poster}
                objectFit="contain"
                height={400}
                width={300}
              />
            )}
          </div>
          <div className="flex basis-8/12 flex-col bg-white px-12 pt-12 pb-8">
            <div className="flex flex-row justify-between">
              <h1 className="text-2xl font-extrabold tracking-wider">
                {movie.title}
              </h1>
              <div className="flex flex-row items-center text-xl font-extrabold">
                <p className="mr-1 text-yellow-500">
                  <MdStars />
                </p>
                <p className="font-medium">{movie.imdb.rating}</p>
              </div>
            </div>
            <div className="mt-2 flex flex-row items-center justify-between gap-4 text-lg">
              <p className="text-sm font-light italic">
                {movie.genres.length > 1
                  ? `Genres: ${movie.genres.join(', ')}`
                  : `Genre: ${movie.genres}`}
              </p>
              <p className="text-sm font-light italic">
                Released: {movie.year}
              </p>
            </div>
            <p className="mt-8 font-medium">{movie.fullplot}</p>
            <h2 className="mt-4 text-base">
              {movie.directors.length > 1
                ? `Directors: ${movie.directors.join(', ')}`
                : `Director: ${movie.directors}`}
            </h2>
            <h2>{`Cast: ${movie.cast.join(', ')}`}</h2>
            <div className="flex flex-row justify-center">
              <button
                type="button"
                className="btn mx-auto mt-8 flex"
                onClick={() => back()}
              >
                Back
              </button>
              <button
                type="button"
                className="btn mx-auto mt-8 flex"
                onClick={openModal}
              >
                Delete
              </button>
            </div>
          </div>
        </div>

        <Transition appear show={isOpen} as={Fragment}>
          <Dialog
            as="div"
            className="fixed inset-0 z-10 overflow-y-auto"
            onClose={closeModal}
          >
            <DeleteModal
              openModal={openModal}
              closeModal={closeModal}
              onDelete={onDelete}
            />
          </Dialog>
        </Transition>
      </main>
    </div>
  );
}

export default MovieDetails;
