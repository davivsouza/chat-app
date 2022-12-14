import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, Helvetica, sans-serif;

  }

  body{
    overflow-x: hidden;
    background: #f1faee;

  }

  ::-webkit-scrollbar {
    width: 5px;
  }

/* Track */
  ::-webkit-scrollbar-track {
    background: transparent;
  }

/* Handle */
  ::-webkit-scrollbar-thumb {
    background: #1d3557;
  }
`;