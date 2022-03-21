/* eslint-disable react-hooks/exhaustive-deps */
import Head from 'next/head';
import React, { ReactElement, useEffect, useState } from 'react';
import { IoRemoveCircleOutline } from 'react-icons/io5';
import LoadingSpinner from '../../components/LoadingSpinner';
import MovieCardItem from '../../components/MovieCardItem';
import useLocalStorage from '../../src/hooks/useLocalStorage';
import { Movie } from '../../src/types/types';
import { useWatchlistStoreContext } from '../../src/utils/WatchlistStore';

function Watchlist(): ReactElement {
  const { store, dispatch } = useWatchlistStoreContext();
  const [watchlist, setWatchlist] = useLocalStorage<Movie[]>('watchlist', []);
  const [uniqueWatchList, setUniqueWatchList] = useState<Movie[]>();

  // *** Browser code in useEffect hook to prevent SSR issues
  useEffect(() => {
    // *** Prepare Uniquelist of Movies in Watchlist
    // *** Array of IDs of Movies
    const idOfmovies: string[] = store.watchlist.map(
      (movie: Movie): string => movie._id,
    );

    // *** Filter against Array _id + sort Ascending
    const uniqueList: Movie[] = store.watchlist
      .filter(
        ({ _id }: Movie, index: number): boolean =>
          !idOfmovies.includes(_id, index + 1),
      )
      .sort((a: Movie, b: Movie): any => b.year - a.year);
      setUniqueWatchList(uniqueList)
  }, [store]);

  // *** Remove from Watchlist
  const onRemoveFromWatchlist = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    movie: Movie,
  ): void => {
    e.preventDefault();
    dispatch({ type: 'RemoveFromWatchList', movie });
    setWatchlist([...store.watchlist].filter((el) => el !== movie));
  };

  if (!uniqueWatchList) return <LoadingSpinner />;

  if (store.watchlist.length === 0) {
    return (
      <div className="">
        <h1 className="mt-12 text-center text-5xl font-black tracking-wider text-indigo-500">
          Your watchlist is currently empty...
        </h1>
      </div>
    );
  }

  return (
    <div className="font-Poppins">
      <Head>
        <title>Your Watchlist</title>
        <meta name="description" content="Your Watchlist" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container mx-auto">
        <h1 className="mt-12 mb-14 text-center text-5xl font-black tracking-wider text-indigo-500">
          Your Watchlist
        </h1>
        <div className="container mx-auto mt-14 flex flex-row flex-wrap justify-around gap-x-8 gap-y-10">
          {uniqueWatchList.map((movie: Movie) => (
            <MovieCardItem key={movie._id} movie={movie}>
              <p className="absolute right-3 bottom-0">
                <button
                  type="button"
                  onClick={(
                    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
                  ): void => onRemoveFromWatchlist(e, movie)}
                >
                  <span className="text-xl text-indigo-500">
                    <IoRemoveCircleOutline />
                  </span>
                </button>
              </p>
            </MovieCardItem>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Watchlist;
