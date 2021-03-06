/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextComponentType, NextPageContext } from 'next/types';
import React, { ReactElement } from 'react';
import { WatchlistStoreProvider } from '../../src/utils/WatchlistStore';
import NavBar from './NavBar';

interface Props {
  Component: NextComponentType<NextPageContext, any, {}>;
  pageProps: any;
}

function Layout({ Component, pageProps }: Props): ReactElement {
  return (
    <WatchlistStoreProvider>
      <div className="bg-gray-100 font-Poppins">
        <header className="">
          <NavBar />
        </header>
        <main className="max-w-8xl bg container mx-auto min-h-[65vh] px-24 pb-12 ">
          <Component {...pageProps} />
        </main>
        <footer className="h-[25vh] bg-indigo-400" />
      </div>
    </WatchlistStoreProvider>
  );
}

export default Layout;
