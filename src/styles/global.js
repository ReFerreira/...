import { createGlobalStyle } from 'styled-components';

import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  *:focus {
    outline: 0;
  }

  html {
    /* a cada 1rem será considerado 10px; */
    font-size: 62.5%;
  }

  body, input, button {
    font: 14px 'Roboto', sans-serif;
  }

  body {
    height: 100vh;
    background: linear-gradient(-90deg, #8428A5, #644AF5);
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
  }

  @media (max-width: 768px) {
    html{
      font-size: 50%;
    }
  }
`;
