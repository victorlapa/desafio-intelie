import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: #DDDEE1;
    font-size: 16px;
    font-family: 'Source Sans Pro', sans-serif;
  }

  button {
    cursor: pointer;
  }
`;
