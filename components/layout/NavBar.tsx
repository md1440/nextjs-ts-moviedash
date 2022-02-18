import Link from 'next/link';
import React, { ReactElement } from 'react';
import { MdMovieFilter } from 'react-icons/md';
import MovieSearch from '../MovieSearch';

function NavBar(): ReactElement {
  return (
    <nav className="flex flex-row justify-between bg-indigo-400 items-center">
      <ul className="fontmedium flex flex-row py-2 items-center justify-start px-3 text-lg uppercase tracking-wide text-white">
        <MdMovieFilter className="ml-12 mr-4 text-3xl" />
        <Link href="/" passHref>
          <li className="cursor-pointer px-3 py-4">Home</li>
        </Link>
        <Link href="/movies" passHref>
          <li className="cursor-pointer px-3 py-4">All Movies</li>
        </Link>
        <Link href="/movies/add" passHref>
          <li className="cursor-pointer px-3 py-4">Create Movie</li>
        </Link>
        <Link href="/movies/top-100-alltime" passHref>
          <li className="cursor-pointer px-3 py-4">Top 100</li>
        </Link>
        <Link href="/movies/random" passHref>
          <li className="cursor-pointer px-3 py-4">Random</li>
        </Link>
        <Link href="/movies/watchlist" passHref>
          <li className="cursor-pointer px-3 py-4">Watchlist</li>
        </Link>
      </ul>
      <div className="cursor-pointer px-3 py-2 mr-12">
        <MovieSearch />
      </div>
    </nav>
  );
}

export default NavBar;
