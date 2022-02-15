/* eslint-disable react/no-array-index-key */
/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/destructuring-assignment */
import { NextRouter, useRouter } from 'next/router';
import React, { ReactElement, useEffect, useRef, useState } from 'react';
import { usePrevious } from 'react-use';
import { movieApi } from '../src/utils/Api';

type Type = 'movie' | 'series';

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
  const [plot, setPlot] = useState(props.plot);
  const [genres, setGenres] = useState(props.genres);
  const [runtime, setRuntime] = useState(props.runtime);
  const [cast, setCast] = useState(props.cast);
  const [poster, setPoster] = useState(props.poster);
  const [title, setTitle] = useState(props.title);
  const [fullplot, setFullplot] = useState(props.fullplot);
  const [languages, setLanguages] = useState(props.languages);
  const [released, setReleased] = useState(props.released);
  const [directors, setDirectors] = useState(props.directors);
  const [writers, setWriters] = useState(props.writers);
  const [year, setYear] = useState(props.year);
  const [countries, setCountries] = useState(props.countries);
  const [type, setType] = useState(props.type);
  const [tomatoes, setTomatoes] = useState(props.tomatoes);
  const [rated, setRated] = useState(props.rated);
  const [metacritic, setMetacritic] = useState(props.metacritic);

  const router: NextRouter = useRouter();

  // eslint-disable-next-line arrow-body-style
  const formObject = () => {
    return {
      awards,
      imdb,
      plot,
      genres,
      runtime,
      cast,
      poster,
      title,
      fullplot,
      languages,
      released,
      directors,
      writers,
      year,
      countries,
      type,
      tomatoes,
      rated,
      metacritic,
    };
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    movieApi(
      props.isEdit ? 'patch' : 'post',
      props.isEdit ? `/${props._id}` : '/',
      (): void => {
        router.replace(props.isEdit ? `/movies/${id}` : '/movies');
      },
      formObject(),
    );
  };

  // *** Director Handlers
  const onChangeDirector = (index: number, newValue: string): void => {
    setDirectors((currentDirectors: string[]): string[] => {
      const directorsCopy: string[] = [...currentDirectors];
      directorsCopy[index] = newValue;
      return directorsCopy;
    });
  };

  const onAddDirector: () => void = (): void => {
    setDirectors((currentDirectors: string[]): string[] => [
      ...currentDirectors,
      '',
    ]);
  };

  const onRemoveDirector = (index: number): void => {
    if (directors.length > 1) {
      setDirectors((currentDirectors) =>
        currentDirectors.filter((_director, i: number) => i !== index),
      );
    }
  };

  // *** Focus for Director New Input Field
  const prevDirectors = usePrevious(directors);
  const directorsContainer = useRef<any>(null);

  useEffect(() => {
    if (prevDirectors && prevDirectors.length < directors.length) {
      (directorsContainer.current as HTMLElement) &&
        (directorsContainer.current.firstChild as HTMLElement) &&
        (directorsContainer.current.firstChild as HTMLElement).focus();
    }
  }, [directors, prevDirectors]);

  // *** Genre Handlers
  const onChangeGenre = (index: number, newValue: string): void => {
    setGenres((currentGenres: string[]): string[] => {
      const genresCopy: string[] = [...currentGenres];
      genresCopy[index] = newValue;
      return genresCopy;
    });
  };

  const onAddGenre: () => void = (): void => {
    setGenres((currentGenres: string[]): string[] => [...currentGenres, '']);
  };

  const onRemoveGenre = (index: number): void => {
    if (genres.length > 1) {
      setGenres((currentGenres) =>
        currentGenres.filter((_director, i: number) => i !== index),
      );
    }
  };

  // *** Focus for Genre New Input Field
  const prevGenres = usePrevious(genres);
  const genresContainer = useRef<any>(null);

  useEffect(() => {
    if (prevGenres && prevGenres.length < genres.length) {
      (genresContainer.current as HTMLElement) &&
        (genresContainer.current.firstChild as HTMLElement) &&
        (genresContainer.current.firstChild as HTMLElement).focus();
    }
  }, [genres, prevGenres]);

  // *** Cast Handlers
  const onChangeCast = (index: number, newValue: string): void => {
    setCast((currentCast: string[]): string[] => {
      const castCopy: string[] = [...currentCast];
      castCopy[index] = newValue;
      return castCopy;
    });
  };

  const onAddCast: () => void = (): void => {
    setCast((currentCast: string[]): string[] => [...currentCast, '']);
  };

  const onRemoveCast = (index: number): void => {
    if (cast.length > 1) {
      setCast((currentCast) =>
        currentCast.filter((_actor, i: number) => i !== index),
      );
    }
  };

  // *** Focus for Genre New Input Field
  const prevCast = usePrevious(cast);
  const castContainer = useRef<any>(null);

  useEffect(() => {
    if (prevCast && prevCast.length < cast.length) {
      (castContainer.current as HTMLElement) &&
        (castContainer.current.firstChild as HTMLElement) &&
        (castContainer.current.firstChild as HTMLElement).focus();
    }
  }, [cast, prevCast]);

  return (
    <div className="container mx-auto mt-14 font-Poppins">
      <form onSubmit={onSubmit} className="mt-8 mb-4 flex flex-col gap-4">
        <div className="flex flex-col">
          <label className="mb-2 text-base font-medium tracking-wider text-gray-900">
            Title
          </label>
          <input
            className="mr-2 mb-2 border border-indigo-600 px-5 py-2.5 text-base font-medium tracking-wide text-indigo-700 invalid:border-rose-400 hover:bg-indigo-100 hover:bg-opacity-25 hover:text-indigo-600 focus:bg-white focus:outline-none valid:focus:ring-2 valid:focus:ring-indigo-300"
            type="text"
            placeholder="Title"
            required
            minLength={3}
            value={title}
            onChange={(e: React.ChangeEvent<HTMLInputElement>): void =>
              setTitle(e.target.value)
            }
          />
        </div>
        <div className="flex flex-col gap-2">
          <div className="">
            <label className="text-base font-medium tracking-wider text-gray-900">
              Directors{' '}
            </label>
            <button
              className="btn-small-form"
              type="button"
              onClick={onAddDirector}
            >
              +
            </button>
          </div>
          {directors.map((director: string, index: number) => (
            <div
              ref={directorsContainer}
              key={index}
              className="mb-2 flex flex-row items-center"
            >
              <input
                className="mr-2 mb-2 flex-auto border border-indigo-600 px-5 py-2.5 text-base font-medium tracking-wide text-indigo-700 invalid:border-rose-400 hover:bg-indigo-100 hover:bg-opacity-25 hover:text-indigo-600 focus:bg-white focus:outline-none valid:focus:ring-2 valid:focus:ring-indigo-300"
                placeholder="Director"
                type="text"
                required
                value={director}
                onChange={(e) => onChangeDirector(index, e.target.value)}
              />
              <button
                className="btn-small-form"
                type="button"
                onClick={() => onRemoveDirector(index)}
              >
                -
              </button>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-2">
          <div className="">
            <label className="text-base font-medium tracking-wider text-gray-900">
              Genres{' '}
            </label>
            <button
              className="btn-small-form"
              type="button"
              onClick={onAddGenre}
            >
              +
            </button>
          </div>
          {genres.map((genre: string, index: number) => (
            <div
              ref={genresContainer}
              key={index}
              className="mb-2 flex flex-row items-center"
            >
              <input
                className="mr-2 mb-2 flex-auto border border-indigo-600 px-5 py-2.5 text-base font-medium tracking-wide text-indigo-700 invalid:border-rose-400 hover:bg-indigo-100 hover:bg-opacity-25 hover:text-indigo-600 focus:bg-white focus:outline-none valid:focus:ring-2 valid:focus:ring-indigo-300"
                placeholder="Genre"
                type="text"
                required
                value={genre}
                onChange={(e) => onChangeGenre(index, e.target.value)}
              />
              <button
                className="btn-small-form"
                type="button"
                onClick={() => onRemoveGenre(index)}
              >
                -
              </button>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-2">
          <div className="">
            <label className="text-base font-medium tracking-wider text-gray-900">
              Cast{' '}
            </label>
            <button
              className="btn-small-form"
              type="button"
              onClick={onAddCast}
            >
              +
            </button>
          </div>
          {cast.map((actor: string, index: number) => (
            <div
              ref={castContainer}
              key={index}
              className="mb-2 flex flex-row items-center"
            >
              <input
                className="mr-2 mb-2 flex-auto border border-indigo-600 px-5 py-2.5 text-base font-medium tracking-wide text-indigo-700 invalid:border-rose-400 hover:bg-indigo-100 hover:bg-opacity-25 hover:text-indigo-600 focus:bg-white focus:outline-none valid:focus:ring-2 valid:focus:ring-indigo-300"
                placeholder="Actor"
                type="text"
                required
                value={actor}
                onChange={(e) => onChangeCast(index, e.target.value)}
              />
              <button
                className="btn-small-form"
                type="button"
                onClick={() => onRemoveCast(index)}
              >
                -
              </button>
            </div>
          ))}
        </div>
        <div className="flex flex-col">
          <label className="mb-2 text-base font-medium tracking-wider text-gray-900">
            Plot
          </label>
          <textarea
            className="mr-2 mb-2 border border-indigo-600 px-5 py-2.5 text-base font-medium tracking-wide text-indigo-700 invalid:border-rose-400 hover:bg-indigo-100 hover:bg-opacity-25 hover:text-indigo-600 focus:bg-white focus:outline-none valid:focus:ring-2 valid:focus:ring-indigo-300"
            placeholder="Brief Plot Summary"
            required
            rows={4}
            minLength={10}
            value={plot}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>): void =>
              setPlot(e.target.value)
            }
          />
        </div>
        <div className="flex flex-col">
          <label className="mb-2 text-base font-medium tracking-wider text-gray-900">
            Fullplot
          </label>
          <textarea
            className="mr-2 mb-2 border border-indigo-600 px-5 py-2.5 text-base font-medium tracking-wide text-indigo-700 invalid:border-rose-400 hover:bg-indigo-100 hover:bg-opacity-25 hover:text-indigo-600 focus:bg-white focus:outline-none valid:focus:ring-2 valid:focus:ring-indigo-300"
            placeholder="Full Plot Summary"
            required
            rows={8}
            minLength={24}
            value={fullplot}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>): void =>
              setFullplot(e.target.value)
            }
          />
        </div>
        <div className="flex flex-col">
          <label className="mb-2 text-base font-medium tracking-wider text-gray-900">
            Poster
          </label>
          <input
            className="mr-2 mb-2 border border-indigo-600 px-5 py-2.5 text-base font-medium tracking-wide text-indigo-700 invalid:border-rose-400 hover:bg-indigo-100 hover:bg-opacity-25 hover:text-indigo-600 focus:bg-white focus:outline-none valid:focus:ring-2 valid:focus:ring-indigo-300"
            placeholder="http://"
            required
            type="url"
            value={poster}
            onChange={(e: React.ChangeEvent<HTMLInputElement>): void =>
              setPoster(e.target.value)
            }
          />
        </div>
        {/* <div className="flex flex-col">
          <label className="mb-2 text-base font-medium tracking-wider text-gray-900">
            Id
          </label>
          <input
            className="mr-2 mb-2 border border-indigo-600 px-5 py-2.5 text-base font-medium tracking-wide text-indigo-700 invalid:border-rose-400 hover:bg-indigo-100 hover:bg-opacity-25 hover:text-indigo-600 focus:bg-white focus:outline-none valid:focus:ring-2 valid:focus:ring-indigo-300"
            placeholder={
              props.isEdit
                ? props._id
                : 'Id will be assigned by the system automatically...'
            }
            readOnly={props.isEdit}
            type="text"
            value={id}
          />
        </div> */}
        <div className="flex flex-row items-center gap-4">
          <div className="flex flex-col">
            <label className="mb-2 text-base font-medium tracking-wider text-gray-900">
              Release Date
            </label>
            <input
              className="mr-2 mb-2 w-max border border-indigo-600 px-5 py-2.5 text-left text-base font-medium tracking-wide text-indigo-700 invalid:border-rose-400 hover:bg-indigo-100 hover:bg-opacity-25 hover:text-indigo-600 focus:bg-white focus:outline-none valid:focus:ring-2 valid:focus:ring-indigo-300"
              type="date"
              required
              value={released}
              onChange={(e: React.ChangeEvent<HTMLInputElement>): void =>
                setReleased(e.target.value)
              }
            />
          </div>
          <div className="flex flex-col">
            <label className="mb-2 text-base font-medium tracking-wider text-gray-900">
              Production Year
            </label>
            <input
              className="mr-2 mb-2 w-max border border-indigo-600 px-5 py-2.5 text-left text-base font-medium tracking-wide text-indigo-700 invalid:border-rose-400 hover:bg-indigo-100 hover:bg-opacity-25 hover:text-indigo-600 focus:bg-white focus:outline-none valid:focus:ring-2 valid:focus:ring-indigo-300"
              placeholder="e.g. 1984"
              type="text"
              required
              pattern="^(18|19|20)\d{2}$"
              value={year}
              onChange={(e: React.ChangeEvent<HTMLInputElement>): void =>
                setYear(e.target.value)
              }
            />
          </div>
          <div className="flex flex-col">
            <label className="mb-2 text-base font-medium tracking-wider text-gray-900">
              IMDB Rating
            </label>
            <input
              className="mr-2 mb-2 w-max border border-indigo-600 px-5 py-2.5 text-left text-base font-medium tracking-wide text-indigo-700 invalid:border-rose-400 hover:bg-indigo-100 hover:bg-opacity-25 hover:text-indigo-600 focus:bg-white focus:outline-none valid:focus:ring-2 valid:focus:ring-indigo-300"
              placeholder="1-10 -> e.g. 3 or 3.3"
              required
              type="text"
              pattern="^[0-9]{1}([,.][0-9]{1})?$"
              value={imdb.rating}
              onChange={(e: React.ChangeEvent<HTMLInputElement>): void =>
                setImdb({ rating: `${e.target.value}`, votes: '' })
              }
            />
          </div>
          <div className="flex flex-col">
            <label className="mb-2 text-base font-medium tracking-wider text-gray-900">
              Type
            </label>
            <select
              className="mr-2 mb-2 w-max border border-indigo-600 px-5 py-2.5 text-left text-base font-medium tracking-wide text-indigo-700 invalid:border-rose-400 hover:bg-indigo-100 hover:bg-opacity-25 hover:text-indigo-600 focus:bg-white focus:outline-none valid:focus:ring-2 valid:focus:ring-indigo-300"
              value={type}
              required
              onChange={(e) => setType(e.target.value as Type)}
            >
              <option value="">------</option>
              <option value="movie">Movie</option>
              <option value="series">Series</option>
            </select>
          </div>
        </div>
        <button className="btn mx-auto mt-12 mb-12 w-2/4" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default MovieForm;
