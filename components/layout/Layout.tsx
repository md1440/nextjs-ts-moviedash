/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import Link from 'next/link';
import { NextComponentType, NextPageContext } from 'next/types';
import React, { ReactElement } from 'react';

interface Props {
  Component: NextComponentType<NextPageContext, any, {}>;
  pageProps: any;
}

function Layout({ Component, pageProps }: Props): ReactElement {
  return (
    <div className="bg-gray-100">
      <div className="max-w-8xl bg container mx-auto min-h-screen px-24 pb-12 font-Poppins">
        <header className="">
          <nav>
            <ul className="fontmedium flex flex-row justify-between bg-indigo-400 px-3 text-lg uppercase tracking-wide text-white">
              <Link href="/" passHref>
                <li className="cursor-pointer px-3 py-4">Home</li>
              </Link>
              <Link href="/movies" passHref>
                <li className="cursor-pointer px-3 py-4">All Movies</li>
              </Link>
              <Link href="/movies/add" passHref>
                <li className="cursor-pointer px-3 py-4">Create Movie</li>
              </Link>
              <li className="cursor-pointer px-3 py-4">Top 100 Movies</li>
              <li className="cursor-pointer px-3 py-4">Random Movie</li>
              <li className="cursor-pointer px-3 py-4">Statistics</li>
            </ul>
          </nav>
        </header>
        <div>
          <Component {...pageProps} />
        </div>
      </div>
    </div>
  );
}

export default Layout;
