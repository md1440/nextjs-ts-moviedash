import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { ReactElement } from 'react';

const Home: NextPage = (): ReactElement => {
  return (
    <div className="font-Poppins">
      <Head>
        <title>The Movie-Dash</title>
        <meta name="description" content="Some cool Movie page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto">
        <h1 className="mt-12 text-center text-3xl font-extrabold">
          The Movie Page
        </h1>
        <div className='mt-12'>
          <Link href="/movies/">
            <a className='text-lg'>All Movies List</a>
          </Link>
        </div>
      </main>

      <footer className="flex"></footer>
    </div>
  );
};

export default Home;
