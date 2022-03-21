import Head from 'next/head';
import React, { ReactElement } from 'react';
import MovieForm from '../../components/MovieForm';

function AddMovie(): ReactElement {
  return (
    <div className="font-Poppins">
      <Head>
        <title>List of all Movies</title>
        <meta name="description" content="A list of all Movies" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <h1 className="mt-12 text-center text-5xl font-black tracking-wider text-indigo-500">
          Add a Movie to the Database
        </h1>
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
      </div>
    </div>
  );
}

export default AddMovie;
