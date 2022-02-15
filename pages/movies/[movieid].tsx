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
  const { back, asPath, push, replace } = useRouter();

  // *** Extracting _id from asPath/Router
  const movieId = asPath.slice(7);

  // *** Get movie api call, useState
  const [movie] = useMovieApi<Movie>(`${movieId}`);
  // *** Modal is Open/Closed useState
  const [isOpen, setIsOpen] = useState(false);

  // *** Modal functionality + blur functionality when Modal isOpen
  function closeModal(): void {
    setIsOpen(false);
  }

  function openModal(): void {
    setIsOpen(true);
  }

  const modalClassBlur = isOpen ? `font-poppins blur-xl` : `font-poppins`;

  // *** Delete funtionality and url change with replace to /movies
  const onDelete = () => {
    movieApi('delete', `/${movieId}`, () => replace('/movies'));
  };

  if (!movie) return <LoadingSpinner />;

  return (
    <div className={modalClassBlur}>
      <Head>
        <title>{movie.title} - Details</title>
        <meta
          name="description"
          content={`Detail Information for the movie: ${movie.title}`}
        />
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
                {/* Cond Render Singular/Plural */}
                {movie.genres.length > 1
                  ? `Genres: ${movie.genres.join(', ')}`
                  : `Genre: ${movie.genres}`}
              </p>
              <p className="text-sm font-light italic">
                Released: {movie.year}
              </p>
            </div>
            <p className="mt-5 font-medium">{movie.fullplot}</p>
            <h2 className="mt-4 text-base font-light">
              {/* Cond Render Singular/Plural */}
              {movie.directors.length > 1
                ? `Directors: ${movie.directors.join(', ')}`
                : `Director: ${movie.directors}`}
            </h2>
            <h2 className="font-light mt-1">{`Cast: ${movie.cast.join(', ')}`}</h2>
            <div className="mt-12 flex flex-row items-center justify-center gap-4">
              <button type="button" className="btn" onClick={() => back()}>
                Back
              </button>
              <button
                type="button"
                className="btn"
                onClick={() => push(`/movies/edit/${movieId}`)}
              >
                Edit
              </button>
              <button type="button" className="btn" onClick={openModal}>
                Delete
              </button>
            </div>
          </div>
        </div>
        {/* Modal for Delete Headless Ui */}
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
