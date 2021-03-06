import React, { ReactElement } from 'react';
import { Movie } from '../src/types/types';
import LoadingSpinner from './LoadingSpinner';
import MovieCardItem from './MovieCardItem';

interface Props {
  movies: Movie[] | undefined;
}

function MovieCardList({ movies }: Props): ReactElement {
  if (!movies) return <LoadingSpinner />;
  if (movies.length === 0) return <LoadingSpinner />;

  return (
    <div className="container mx-auto">
      <div className="flex flex-row flex-wrap justify-around gap-x-8 gap-y-10">
        {movies.map(
          (movie: Movie): ReactElement => (
            <MovieCardItem key={movie._id} movie={movie} />
          ),
        )}
      </div>
    </div>
  );
}

export default MovieCardList;
