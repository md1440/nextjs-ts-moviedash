/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { NextRouter, useRouter } from 'next/router';
import React, { ReactElement, useEffect, useState } from 'react';
import { IoSearchOutline } from 'react-icons/io5';
import { MdStars } from 'react-icons/md';
import { Movie } from '../src/types/types';
import { movieApi } from '../src/utils/Api';
import useDebounce from '../src/hooks/useDebounce';

function MovieSearch(): ReactElement {
  const router: NextRouter = useRouter();
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState<Movie[] | null>();

  // *** Search Functionality
  // 1) onSearch -> setSearchterm 
  // 2) debouncedSearchTerm -> useDebounce
  // 3) useEffect -> debounce call api -> setSearchResults || resetSearchResults 
  const onSearch = (searchstr: string): void => {
    setSearchTerm(searchstr);
  };

  const debouncedSearchTerm: string = useDebounce(searchTerm, 500);

  useEffect((): void => {
    if (debouncedSearchTerm.length > 2) {
      const debouncedSearchTermArr: string[] = debouncedSearchTerm.split(' ');
      movieApi(
        'get',
        `?searchall=${debouncedSearchTermArr.join('+')}`,
        setSearchResults,
      );
    } else {
      setSearchResults(null);
    }
  }, [debouncedSearchTerm]);

  const onClick = (movie: Movie) => {
    setSearchResults(null);
    setSearchTerm('');
    router.push(`/movies/${movie._id}`);
  };

  const onBlur = ()=> {
    setSearchResults(null);
    setSearchTerm('');
  }

  return (
    <div className="relative">
      <div className="">
        <p className="relative flex flex-row items-center hover:text-indigo-500">
          <input
            value={searchTerm}
            type="text"
            placeholder="Search"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              onSearch(e.target.value)
            }
            onBlur={onBlur}
            className="w-max border border-indigo-600 px-5 py-2.5 text-left text-sm font-medium tracking-wide text-indigo-700 hover:bg-opacity-25 hover:text-indigo-600 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-300"
          />
          <span className="z-40 ml-[-25px]">
            <IoSearchOutline />
          </span>
        </p>
      </div>
      <div className="absolute right-28 top-16 z-40 flex w-72 flex-col gap-2 text-[13px] drop-shadow-md">
        {searchResults &&
          searchResults
            .sort((a: Movie, b: Movie): number => b.year - a.year)
            .sort((a: Movie, b: Movie): number =>
              a.imdb.rating && b.imdb.rating
                ? b.imdb.rating - a.imdb.rating
                : a.title.length - b.title.length,
            )
            .slice(0, 15)
            .map((movie: Movie) => (
              <div
                key={movie._id}
                onClick={() => onClick(movie)}
                className="w-96 rounded-lg border border-indigo-400 bg-white px-2 py-2 transition-shadow duration-300 ease-in-out hover:bg-indigo-100 focus:ring-4 focus:ring-indigo-300 dark:border-indigo-500 dark:text-indigo-500 dark:hover:bg-indigo-600 dark:hover:text-white dark:focus:ring-indigo-800"
              >
                <span className="cursor-pointer border-b">
                  <div className="flex flex-row justify-between">
                    <h1 className="text-sm font-medium tracking-wider">
                      {movie.title}
                    </h1>
                    <div className="flex flex-row items-center text-sm font-bold">
                      <p className="mr-1 text-yellow-500">
                        <MdStars />
                      </p>
                      <p className="font-medium">{movie.imdb.rating}</p>
                    </div>
                  </div>
                  <div className="mt-1 flex flex-row items-center justify-between gap-4 text-lg">
                    <p className="text-sm font-light italic">
                      {/* Cond Render Singular/Plural */}
                      {movie.genres.length > 1
                        ? `Genres: ${movie.genres.slice(0, 2).join(', ')}`
                        : `Genre: ${movie.genres}`}
                    </p>
                    <p className="text-sm font-light italic">
                      Released: {movie.year}
                    </p>
                  </div>
                </span>
              </div>
            ))}
      </div>
    </div>
  );
}



export default MovieSearch;
