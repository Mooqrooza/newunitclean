import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Nunito&family=Roboto:wght@300;400;500;700;900&display=swap');
  ::-moz-selection { /* Code for Firefox */
    background: #FFF0E5;
  }
  ::selection {
    background: #FFF0E5;
  }
  html, body{
    height: 100%;
    width: 100%;
    overflow-x: hidden;
  }
  input {
    outline:none;
    internal-autofill-selected
  }
  body {
    margin: 0;
    font-family: Roboto, "Open Sans", Helvetica, Arial, sans-serif;
    letter-spacing: 0em;
    text-align: center;
    color: #FFFFFF;
    overflow-x: hidden;
    user-select: none;
  }
  #root {
    position: absolute;
    width: 100%;
    overflow: hidden;
  }
  #root > div {
    min-width: 920px;
  }
  #root > div.mobile {
    min-width: 0;
  }
  p {
    text-indent: 2em;
  }
`