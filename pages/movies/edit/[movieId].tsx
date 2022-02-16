import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { ReactElement } from 'react';
import { Movie } from '../../../src/types/types';
import { useMovieApi } from '../../../src/utils/Api';
import LoadingSpinner from '../../../components/LoadingSpinner';
import MovieForm from '../../../components/MovieForm';

function MovieEdit(): ReactElement {
  const { back, asPath, push, replace } = useRouter();

  // *** Extracting _id from asPath/Router
  const movieId = asPath.slice(12);

  // *** Get movie api call, useState
  const [movie] = useMovieApi<Movie>(`${movieId}`);

  if (!movie) {
    return <LoadingSpinner />;
  }

  return (
    <div className="font-Poppins">
      <Head>
        <title>Edit Movie in the Database</title>
        <meta
          name="description"
          content="A form to edit the Movie in the Database"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1 className="mt-12 text-center text-5xl font-black tracking-wider text-indigo-500">
          Edit this Movie in the Database
        </h1>
        <MovieForm
          awards={{
            ...movie.awards,
            nominations: String(movie.awards.nominations),
            wins: String(movie.awards.wins),
          }}
          imdb={{
            ...movie.imdb,
            rating: String(movie.imdb.rating) || '',
            votes: String(movie.imdb.votes) || '',
          }}
          _id={movie._id}
          plot={movie.plot || ''}
          genres={movie.genres}
          runtime={movie.runtime?.toString() || ''}
          cast={movie.cast}
          poster={movie.poster}
          title={movie.title}
          fullplot={movie.fullplot || ''}
          languages={movie.languages || ['']}
          released={movie.released.slice(0, 10)}
          directors={movie.directors}
          writers={movie.writers || ['']}
          year={movie.year.toString()}
          countries={movie.countries}
          type={movie.type}
          tomatoes={{
            ...movie.tomatoes,
            viewer: {
              ...movie.tomatoes?.viewer,
              rating: String(movie.tomatoes?.viewer.rating || '') ,
              numReviews: String(movie.tomatoes?.viewer.numReviews || '') ,
              meter: String(movie.tomatoes?.viewer.meter || '') ,
            } || { rating: '', numReviews: '', meter: '' },
            critic: {
              ...movie.tomatoes?.critic,
              rating: String(movie.tomatoes?.critic?.rating || ''),
              numReviews: String(movie.tomatoes?.critic?.numReviews || ''),
              meter: String(movie.tomatoes?.critic?.meter || ''),
            } || { rating: '', numReviews: '', meter: '' },
            rotten: String(movie.tomatoes?.rotten || ''),
            fresh: String(movie.tomatoes?.fresh || ''),
            lastUpdated: movie.tomatoes?.lastUpdated || '',
            website: movie.tomatoes?.website || '',
            production: movie.tomatoes?.production || '',
            dvd: movie.tomatoes?.dvd || '',
            boxOffice: movie.tomatoes?.boxOffice || '',
          }}
          rated={movie.rated || ''}
          metacritic={movie.metacritic?.toString() || ''}
          isEdit
        />
      </main>
    </div>
  );
}

export default MovieEdit;