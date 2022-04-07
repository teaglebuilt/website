import { ThemeProvider, createGlobalStyle } from "styled-components";

const theme = {
  primaryBackground: "##FFFAFF",
  secondary: "#3E92CC",
  navbar: "#0A2463",
  footer: "#1E1B18",
  fifth: "#D8315B",
  primaryText: "#1E1B18",
}

const GlobalStyle = createGlobalStyle`
  html, body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    transition: all 0.5s;
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
    <ThemeProvider theme={theme}>{children}</ThemeProvider>;
  </>
}
