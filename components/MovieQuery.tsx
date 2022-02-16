/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { ReactElement } from 'react';

interface Props {
  genre: string;
  setGenre: React.Dispatch<React.SetStateAction<string>>;
  limit: string;
  setLimit: React.Dispatch<React.SetStateAction<string>>;
  yearEq: string;
  setYearEq: React.Dispatch<React.SetStateAction<string>>;
  sort: string;
  setSort: React.Dispatch<React.SetStateAction<string>>;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
  defaultQuery: string;
  
}

function MovieQuery({
  genre,
  setGenre,
  limit,
  setLimit,
  yearEq,
  setYearEq,
  sort,
  setSort,
  setQuery,
  defaultQuery
}: Props): ReactElement {
  return (
    <div className="mt-16 mb-10 flex flex-row items-end justify-end gap-4">
      <div className="flex flex-col">
        <label className="mb-[0.5px] text-base font-medium tracking-wider text-indigo-600">
          Genre
        </label>
        <select
          className="mr-2 w-max border border-indigo-600 px-5 py-2.5 text-left text-base font-medium tracking-wide text-indigo-700 invalid:border-rose-400 hover:bg-indigo-100 hover:bg-opacity-25 hover:text-indigo-600 focus:bg-white focus:outline-none valid:focus:ring-2 valid:focus:ring-indigo-300"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
        >
          <option value="">All Genres</option>
          <option value="action">Action</option>
          <option value="animation">Animation</option>
          <option value="adventure">Adventure</option>
          <option value="biography">Biography</option>
          <option value="comedy">Comedy</option>
          <option value="crime">Crime</option>
          <option value="drama">Drama</option>
          <option value="documentary">Documentary</option>
          <option value="fantasy">Fantasy</option>
          <option value="history">History</option>
          <option value="horror">Horror</option>
          <option value="thriller">Thriller</option>
          <option value="mystery">Mystery</option>
          <option value="sci-Fi">Sci-Fi</option>
          <option value="war">War</option>
        </select>
      </div>
      <div className="flex flex-col">
        <label className="mb-[0.5px] text-base font-medium tracking-wider text-indigo-600">
          Year
        </label>
        <select
          className="mr-2 w-max border border-indigo-600 px-5 py-2.5 text-left text-base font-medium tracking-wide text-indigo-700 invalid:border-rose-400 hover:bg-indigo-100 hover:bg-opacity-25 hover:text-indigo-600 focus:bg-white focus:outline-none valid:focus:ring-2 valid:focus:ring-indigo-300"
          value={yearEq}
          onChange={(e) => setYearEq(e.target.value)}
        >
          <option value="">All years</option>
          <option value="2015">2015</option>
          <option value="2014">2014</option>
          <option value="2013">2013</option>
          <option value="2012">2012</option>
          <option value="2011">2011</option>
          <option value="2010">2010</option>
          <option value="2009">2009</option>
          <option value="2008">2008</option>
          <option value="2007">2007</option>
          <option value="2006">2006</option>
          <option value="2005">2005</option>
          <option value="2004">2004</option>
          <option value="2003">2003</option>
          <option value="2002">2002</option>
          <option value="2001">2001</option>
          <option value="2000">2000</option>
          <option value="1999">1999</option>
          <option value="1998">1998</option>
          <option value="1997">1997</option>
          <option value="1996">1996</option>
          <option value="1995">1995</option>
          <option value="1994">1994</option>
          <option value="1993">1993</option>
          <option value="1992">1992</option>
          <option value="1991">1991</option>
          <option value="1990">1990</option>
          <option value="1989">1989</option>
          <option value="1988">1988</option>
          <option value="1987">1987</option>
          <option value="1986">1986</option>
          <option value="1985">1985</option>
          <option value="1984">1984</option>
          <option value="1983">1983</option>
          <option value="1982">1982</option>
          <option value="1981">1981</option>
          <option value="1980">1980</option>
          <option value="1961">1961</option>
          <option value="1960">1960</option>
        </select>
      </div>
      <div className="flex flex-col">
        <label className="mb-[0.5px] text-base font-medium tracking-wider text-indigo-600">
          Sort
        </label>
        <select
          className="mr-2 w-max border border-indigo-600 px-5 py-2.5 text-left text-base font-medium tracking-wide text-indigo-700 invalid:border-rose-400 hover:bg-indigo-100 hover:bg-opacity-25 hover:text-indigo-600 focus:bg-white focus:outline-none valid:focus:ring-2 valid:focus:ring-indigo-300"
          value={sort}
          onChange={(e) => setSort(e.target.value)}
        >
          <option value="-rating">By rating ⬇</option>
          <option value="rating">By rating ⬆</option>
          <option value="-year">By year ⬇</option>
          <option value="year">By year ⬆</option>
          <option value="-title">By title ⬇</option>
          <option value="title">By title ⬆</option>
        </select>
      </div>
      <div className="flex flex-col">
        <label className="mb-[0.5px] text-base font-medium tracking-wider text-indigo-600">
          Limit
        </label>
        <select
          className="mr-2 w-max border border-indigo-600 px-5 py-2.5 text-left text-base font-medium tracking-wide text-indigo-700 invalid:border-rose-400 hover:bg-indigo-100 hover:bg-opacity-25 hover:text-indigo-600 focus:bg-white focus:outline-none valid:focus:ring-2 valid:focus:ring-indigo-300"
          value={limit}
          onChange={(e) => setLimit(e.target.value)}
        >
          <option value="25">25</option>
          <option value="50">50</option>
          <option value="75">75</option>
          <option value="100">100</option>
        </select>
      </div>
      <div className="">
        <button
          className="btn mb-0 rounded-lg py-3"
          type="button"
          onClick={() => setQuery(defaultQuery)}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default MovieQuery;
