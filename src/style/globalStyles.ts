import { createGlobalStyle } from 'styled-components';
import {Main as Theme} from 'src/themes/main';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Nunito&family=Roboto:wght@300;400;500;700;900&display=swap');
  ::-moz-selection { /* Code for Firefox */
    background: #FFF0E5;
  }
  html, body{
    height: 100%;
    width: 100%;
    min-height: 100%;
    overflow-x: hidden;
  }
  * {
    -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
    -webkit-tap-highlight-color: transparent;
  }
  input, select {
    outline:none;
    internal-autofill-selected
  }
  input::placeholder, select::placeholder {
    opacity: 1;
    color: #9C9C9C;
    font-size: 1em;
  }
  input::-webkit-input-placeholder, select::-webkit-input-placeholder{
    color: #9C9C9C;
    font-size: 1em;
  }
  input::-ms-input-placeholder, select::-ms-input-placeholder {
    color: #9C9C9C;
    font-size: 1em;
  }
  textarea {
    outline:none;
    internal-autofill-selected
  }
  textarea::placeholder {
    font-family: Roboto, "Open Sans", Helvetica, Arial, sans-serif;
    font-weight: 400;
    opacity: 1;
    color: #9C9C9C;
    font-size: 1em;
  }
  textarea::-webkit-input-placeholder {
    font-family: Roboto, "Open Sans", Helvetica, Arial, sans-serif;
    font-weight: 400;
    color: #9C9C9C;
    font-size: 1em;
  }
  textarea::-ms-input-placeholder {
    font-family: Roboto, "Open Sans", Helvetica, Arial, sans-serif;
    font-weight: 400;
    color: #9C9C9C;
    font-size: 1em;
  }

  body {
    margin: 0;
    font-family: Roboto, "Open Sans", Helvetica, Arial, sans-serif;
    letter-spacing: normal;
    text-align: center;
    color: #FFFFFF;
    overflow-x: hidden;
    user-select: none;
  }
  #root {
    position: absolute;
    min-height: 100%;
    width: 100%;
    overflow: hidden;
  }
  #root > div {
    min-width: 300px;
  }
  #root > div.mobile {
    min-width: 0;
  }
  p {
    text-indent: 2em;
  }
  a:hover {
    color: ${Theme.colors.orange};
  }
`