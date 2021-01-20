import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background: linear-gradient(to right, #1a2a6c , #b21f1f);
    color: #FFF;
    -webkit-font-smoothing: antialiased;
  }

  h1, h2, h3, h4, h5, h6, strong, p, span, a{
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
  }

  button {
    cursor: pointer;
  }
`;
