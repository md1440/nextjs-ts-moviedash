import React, { ReactElement } from 'react';
import { Movie } from '../src/types/types';
import MovieCardItem from './MovieCardItem';

interface Props {
  movies: Movie[];
}

function MovieCardList({ movies }: Props): ReactElement {
  return (
    <main className="container mx-auto">
      <div className="flex flex-row flex-wrap justify-around gap-x-8 gap-y-10">
        {movies.map(
          (movie: Movie): ReactElement => (
            <MovieCardItem key={movie._id} movie={movie} />
          ),
        )}
      </div>
    </main>
  );
}

export default MovieCardList;
