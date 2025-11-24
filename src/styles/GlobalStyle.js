import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

  }

  body {
    font-family: 'Playfair Display SC', serif;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;