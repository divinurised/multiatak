import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
  --dark-gray: #141414;
  --light-gray: #1b1b1b;
  --lighter-gray: #e5e5e5;
  --semi-light-gray: #d4d4d4;
  --background: #f1f1f1;
  --text-gray: #939393;
  --strong: #a70000;
  }
  body {
    background: var(---background);
  }
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Ubuntu', sans-serif;
  }
  .App {
    max-width: 100vw;
    overflow: hidden;
  }
  textarea:focus, input:focus{
    outline: 0;
  }
`;
