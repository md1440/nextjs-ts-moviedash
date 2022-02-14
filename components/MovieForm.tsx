/* eslint-disable react/destructuring-assignment */
import React, { ReactElement, useState } from 'react';

interface Props {
  awards: { wins: string; nominations: string; text: string };
  imdb: { rating: string; votes: string };
  _id: string;
  plot: string;
  genres: string[];
  runtime: string;
  cast: string[];
  poster: string;
  title: string;
  fullplot: string;
  languages: string[];
  released: string;
  directors: string[];
  writers: string[];
  year: string;
  countries: string[];
  type: string;
  tomatoes: {
    viewer: { rating: string; numReviews: string; meter: string };
    lastUpdated: string;
    website: string;
    production: string;
    critic: { rating: string; numReviews: string; meter: string };
    rotten: string;
    fresh: string;
    dvd: string;
    boxOffice: string;
  };
  rated: string;
  metacritic: string;
  // eslint-disable-next-line react/no-unused-prop-types
  isEdit: boolean;
}

function MovieForm(props: Props): ReactElement {
  const [awards, setAwards] = useState(props.awards);
  const [imdb, setImdb] = useState(props.imdb);
  const [id] = useState(props._id);
  const [plot, setPlot] = useState(props.plot)
  const [genres, setGenres] = useState(props.genres)
  const [runtime, setRuntime] = useState(props.runtime)
  const [cast, setCast] = useState(props.cast)
  const [poster, setPoster] = useState(props.poster)
  const [title, setTitle] = useState(props.title)
  const [fullplot, setFullplot] = useState(props.fullplot)
  const [languages, setLanguages] = useState(props.languages)
  const [released, setReleased] = useState(props.released)
  const [directors, setDirectors] = useState(props.directors)
  const [writers, setWriters] = useState(props.writers)
  const [year, setYear] = useState(props.year)
  const [countries, setCountries] = useState(props.countries)
  const [type, setType] = useState(props.type)
  const [tomatoes, setTomatoes] = useState(props.tomatoes)
  const [rated, setRated] = useState(props.rated)
  const [metacritic, setMetacritic] = useState(props.metacritic)

  return <div>MovieForm</div>;
}

export default MovieForm;
