/* eslint-disable @typescript-eslint/no-redeclare */
import { createContext, ReactElement, useContext, useReducer } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

import { Movie } from '../types/types';

export interface Store {
  watchlist: Movie[];
}

export interface AddToWatchList {
  type: 'AddToWatchList';
  movie: Movie;
}

export interface RemoveFromWatchList {
  type: 'RemoveFromWatchList';
  movie: Movie;
}

export const initialStore: Store = {
  watchlist: [],
};

export type Actions = AddToWatchList | RemoveFromWatchList;

export function watchlistReducer(store: Store, action: Actions): Store {
  switch (action.type) {
    case 'AddToWatchList':
      return { ...store, watchlist: [...store.watchlist, action.movie] };
    case 'RemoveFromWatchList': {
      const index: number = store.watchlist
        .map((item: Movie): string => item._id)
        .indexOf(action.movie._id);
      return {
        ...store,
        watchlist: store.watchlist.filter(
          (_item: Movie, i: number): boolean => i !== index,
        ),
      };
    }
    default:
      return store;
  }
}

interface WatchlistStoreContext {
  store: Store;
  dispatch: React.Dispatch<Actions>;
}

const WatchlistStoreContext = createContext({} as WatchlistStoreContext);
WatchlistStoreContext.displayName = 'WatchlistContext';

export const useWatchlistStoreContext = (): WatchlistStoreContext =>
  useContext(WatchlistStoreContext);

interface Props {
  children: ReactElement;
}

export function WatchlistStoreProvider({ children }: Props): ReactElement {
  const [watchlist] = useLocalStorage<Movie[]>('watchlist', []);
  const [store, dispatch] = useReducer(watchlistReducer, { watchlist });
  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <WatchlistStoreContext.Provider value={{ store, dispatch }}>
      {children}
    </WatchlistStoreContext.Provider>
  );
}
