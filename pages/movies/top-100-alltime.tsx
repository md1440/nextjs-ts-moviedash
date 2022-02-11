import axios from 'axios';
import React, { ReactElement } from 'react';
import useSWR from 'swr';
import { Movie } from '../../src/types/types';

function Top100Alltime() {
  const fetcher = (url: string) => axios.get(url).then((res) => res.data);
  const { data, error } = useSWR(
    'https://moviedb-rest-api.herokuapp.com/api/v1/movies/top-100-alltime',
    fetcher,
  );

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  const collection: Movie[] = data.data.movies;
  console.log(collection);

  return (
    <div className="flex">
      allmovies
      <ul>
        {collection.map(
          (movie: Movie): ReactElement => (
            <li key={movie._id}>
              {movie.title}
              <div className="p-3 pl-4">
                <div className="mt-3 text-xl font-bold tracking-wide text-gray-900">
                  {movie.title}
                </div>
                <div className="mt-[0.5px] text-lg italic text-gray-800">
                  {movie.plot}
                </div>
                <div className="mt-5 text-base text-gray-500">
                  {/* {movie.cast.map((cast: string) => (
                    <span
                      key={cast}
                      className="pr-2 after:content-[','] after:last-of-type:content-['']"
                    >
                      {cast}
                    </span>
                  ))} */}
                  <p className="pt-1">
                    ISBN:
                    <span className="pl-1" />
                    <span className="tracking-wide">{movie.directors}</span>
                  </p>
                </div>
              </div>
            </li>
          ),
        )}
      </ul>
    </div>
  );
}

export default Top100Alltime;
