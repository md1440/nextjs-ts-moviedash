import Head from 'next/head';
import { ReactElement } from 'react';

function Home(): ReactElement {
  return (
    <div className="font-Poppins">
      <Head>
        <title>The Movie-Dash</title>
        <meta name="description" content="Some cool Movie page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="mt-12 text-center text-5xl font-black tracking-wider text-indigo-500">
          Cool Headline
        </h1>
      </main>
    </div>
  );
}

export default Home;
