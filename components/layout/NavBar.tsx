import Link from 'next/link';
import React, { ReactElement } from 'react';
import { MdMovieFilter } from 'react-icons/md';

function NavBar(): ReactElement {
  return (
    <nav>
      <ul className="fontmedium flex flex-row justify-start items-center bg-indigo-400 px-3 text-lg uppercase tracking-wide text-white">
        <MdMovieFilter className='text-3xl ml-12 mr-4'/>
        <Link href="/" passHref>
          <li className="cursor-pointer px-3 py-4">Home</li>
        </Link>
        <Link href="/movies" passHref>
          <li className="cursor-pointer px-3 py-4">All Movies</li>
        </Link>
        <Link href="/movies/add" passHref>
          <li className="cursor-pointer px-3 py-4">Create Movie</li>
        </Link>
        <li className="cursor-pointer px-3 py-4">Top 100 Movies</li>
        <li className="cursor-pointer px-3 py-4">Random Movie</li>
        <li className="cursor-pointer px-3 py-4">Statistics</li>
      </ul>
    </nav>
  );
}

export default NavBar;
