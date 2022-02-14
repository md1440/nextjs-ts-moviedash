import React, { ReactElement } from 'react';
import MovieForm from '../../components/MovieForm';

function AddMovie(): ReactElement {
  return (
    <MovieForm
      awards={{ wins: '', nominations: '', text: '' }}
      imdb={{ rating: '', votes: '' }}
      _id=""
      plot=""
      genres={['']}
      runtime=""
      cast={['']}
      poster=""
      title=""
      fullplot=""
      languages={['']}
      released=""
      directors={['']}
      writers={['']}
      year=""
      countries={['']}
      type=""
      tomatoes={{
        viewer: { rating: '', numReviews: '', meter: '' },
        lastUpdated: '',
        website: '',
        production: '',
        critic: { rating: '', numReviews: '', meter: '' },
        rotten: '',
        fresh: '',
        dvd: '',
        boxOffice: '',
      }}
      rated=""
      metacritic=""
      isEdit={false}
    />
  );
}

export default AddMovie;
