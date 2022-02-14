/* eslint-disable react/jsx-props-no-spreading */
import type { AppProps } from 'next/app';
import Layout from '../components/layout/Layout';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return <Layout Component={Component} pageProps={pageProps} />;
}

export default MyApp;
