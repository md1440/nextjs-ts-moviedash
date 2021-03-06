/* eslint-disable react/require-default-props */
import Image from 'next/image';
import Link from 'next/link';
import React, { ReactElement } from 'react';
import { MdStars } from 'react-icons/md';
import { Movie } from '../src/types/types';

interface Props {
  movie: Movie;
  children?: ReactElement;
}

// children comes in from watchlist.tsx -> renders a delete funct from watchlist component

function MovieCardItem({ movie, children }: Props): ReactElement {
  return (
    <Link key={movie._id} href={`/movies/${movie._id}`} passHref>
      <div className="relative w-60 cursor-pointer rounded-lg bg-indigo-100 shadow-lg">
        <div className="relative my-4 h-60 rounded-t-lg">
          {movie.poster && (
            <Image src={movie.poster} objectFit="contain" layout="fill" />
          )}
        </div>
        <div className="rounded-b-lg bg-gray-100 px-3 py-2">
          <h2 className="text-sm font-medium ">{movie.title.slice(0, 25)}</h2>
          <div className="flex flex-row items-center justify-between pt-1">
            <div className="mt-1 flex flex-row items-center">
              <p className="mr-1 text-sm text-yellow-500">
                <MdStars />
              </p>
              <p className="text-sm font-medium">{movie.imdb.rating}</p>
            </div>
            <p className="font-regular text-sm ">{movie.year}</p>
          </div>
          <p className="text-sm font-light italic">
            {movie.genres.slice(0, 2).join(', ')}
          </p>
        </div>
        <div>{children}</div>
      </div>
    </Link>
  );
}

export default MovieCardItem;
