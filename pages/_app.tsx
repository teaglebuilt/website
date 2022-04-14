import { MDXProvider } from '@mdx-js/react';
import type { AppProps } from 'next/app';
import 'tailwindcss/tailwind.css';
import RootThemeProvider from '../src/theme';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <RootThemeProvider>
      <MDXProvider>
        <Component {...pageProps} />
      </MDXProvider>
    </RootThemeProvider>
  );
}

export default MyApp;
