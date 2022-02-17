/* eslint-disable @typescript-eslint/ban-types */
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
  type: string;
  setType: React.Dispatch<React.SetStateAction<string>>;
  onReset: () => void;
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
  type,
  setType,
  onReset,
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
          Type
        </label>
        <select
          className="mr-2 w-max border border-indigo-600 px-5 py-2.5 text-left text-base font-medium tracking-wide text-indigo-700 invalid:border-rose-400 hover:bg-indigo-100 hover:bg-opacity-25 hover:text-indigo-600 focus:bg-white focus:outline-none valid:focus:ring-2 valid:focus:ring-indigo-300"
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <option value="">All types</option>
          <option value="movie">Movie</option>
          <option value="series">Series</option>
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
          <option value="1979">1979</option>
          <option value="1978">1978</option>
          <option value="1977">1977</option>
          <option value="1976">1976</option>
          <option value="1975">1975</option>
          <option value="1974">1974</option>
          <option value="1973">1973</option>
          <option value="1972">1972</option>
          <option value="1971">1971</option>
          <option value="1970">1970</option>
          <option value="1969">1969</option>
          <option value="1968">1968</option>
          <option value="1967">1967</option>
          <option value="1966">1966</option>
          <option value="1965">1965</option>
          <option value="1964">1964</option>
          <option value="1963">1963</option>
          <option value="1962">1962</option>
          <option value="1961">1961</option>
          <option value="1960">1960</option>
          <option value="1959">1959</option>
          <option value="1958">1958</option>
          <option value="1957">1957</option>
          <option value="1956">1956</option>
          <option value="1955">1955</option>
          <option value="1954">1954</option>
          <option value="1953">1953</option>
          <option value="1952">1952</option>
          <option value="1951">1951</option>
          <option value="1950">1950</option>
          <option value="1949">1949</option>
          <option value="1948">1948</option>
          <option value="1947">1947</option>
          <option value="1946">1946</option>
          <option value="1945">1945</option>
          <option value="1944">1944</option>
          <option value="1943">1943</option>
          <option value="1942">1942</option>
          <option value="1941">1941</option>
          <option value="1940">1940</option>
          <option value="1939">1939</option>
          <option value="1938">1938</option>
          <option value="1937">1937</option>
          <option value="1936">1936</option>
          <option value="1935">1935</option>
          <option value="1934">1934</option>
          <option value="1933">1933</option>
          <option value="1932">1932</option>
          <option value="1931">1931</option>
          <option value="1930">1930</option>
          <option value="1929">1929</option>
          <option value="1928">1928</option>
          <option value="1927">1927</option>
          <option value="1926">1926</option>
          <option value="1925">1925</option>
          <option value="1924">1924</option>
          <option value="1923">1923</option>
          <option value="1922">1922</option>
          <option value="1921">1921</option>
          <option value="1920">1920</option>
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
          onClick={onReset}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default MovieQuery;
