import React, { ReactElement } from 'react';
import { Movie } from '../src/types/types';
import MovieCardItem from './MovieCardItem';

interface Props {
  movies: Movie[];
}

function MovieCardList({ movies }: Props): ReactElement {
  return (
    <main className="container mx-auto mt-14">
      <div className="flex flex-row flex-wrap justify-around gap-7">
        {movies.map(
          (movie: Movie): ReactElement => (
            <MovieCardItem movie={movie} />
          ),
        )}
      </div>
    </main>
  );
}

export default MovieCardList;
