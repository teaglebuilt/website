import { createGlobalStyle, ThemeProvider } from "styled-components";

const theme = {
  mosGreen: '#009394',
  white: '#ffffff',
  lightGray: '#e0dad5',
  secondaryGray: '#cdcfd1',
  primaryGray: '#1e2a37',
  black: '#000000',
  apollo: '#ad9bf6BF',
  graphql: '#e10098BF',
  nextjs: '#ffffffBF',
  react: '#61dafbBF',
  typescript: '#3178c6BF',
}

const GlobalStyle = createGlobalStyle`
  html, body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    transition: all 0.5s;
  }

  html.dark {
    background-color: #333;
  }

  body.dark {
    background-color: #333;
  }

  * {
    box-sizing: border-box;
  }
`;


export default function RootThemeProvider({ children }) {
  return <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  </>
}
