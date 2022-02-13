export interface RootObject {
  status: string;
  results: number;
  data: Movies;
}

export interface Movies {
  movies: Movie[];
}

export interface Movie {
  awards: Awards;
  imdb: Imdb;
  _id: string;
  plot?: string;
  genres: string[];
  runtime?: number;
  cast: string[];
  poster: string;
  title: string;
  fullplot?: string;
  languages?: string[];
  released: string;
  directors: string[];
  writers?: string[];
  year: number;
  countries: string[];
  type: string;
  yearsSinceRelease: number;
  tomatoes?: Tomatoes;
  rated?: string;
  metacritic?: number;
}

export interface Tomatoes {
  viewer: Viewer;
  lastUpdated: string;
  website?: string;
  production?: string;
  critic?: Critic;
  rotten?: number;
  fresh?: number;
  dvd?: string;
  boxOffice?: string;
}

export interface Critic {
  rating: number;
  numReviews: number;
  meter: number;
}

export interface Viewer {
  rating: number;
  numReviews: number;
  meter?: number;
}

export interface Imdb {
  rating?: number;
  votes?: number;
}

export interface Awards {
  wins: number;
  nominations: number;
  text: string;
}
