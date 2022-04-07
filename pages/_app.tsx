import '../styles/globals.css';
import 'tailwindcss/tailwind.css';
import { ThemeProvider } from 'styled-components';
import type { AppProps } from 'next/app';
import { MDXProvider } from "@mdx-js/react";
import RootThemeProvider from '../src/theme';

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
