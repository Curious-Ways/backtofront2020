import { createGlobalStyle } from 'styled-components';
import background_pattern from './images/background_pattern.jpg'

export const GlobalStyles = createGlobalStyle`
  *, *::after, *::before {
    box-sizing: border-box;
  }
  html {
    font-family: AribauGrotesk-Rg, sans-serif;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    background-blend-mode: color-burn;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: linear-gradient(180deg, #302AB8 0%, #302AB8 25%, #2AAAB2 100%);
    
    &.project-addition {
      background-image: linear-gradient(180deg, #302AB8 11%, #00DCA1 100%);
    }
    &.project-dog-ear {
      background-image: linear-gradient(180deg, #302AB8 12%, #242424 82%);
    }
    &.project-notion {
      background-image: linear-gradient(180deg, #302AB8 11%, #000000 100%);
    }
    &.project-pished-fish {
      background-image: linear-gradient(180deg, #302AB8 11%, #FF8725 100%);
    }
    &.project-rosetta {
      background-image: linear-gradient(180deg, #302AB8 11%, #C80E5C 100%);
    }
    &.project-van {
      background-image: linear-gradient(180deg, #302AB8 12%, #0E2C1F 82%);
    }
    &.project-zenden {
      background-image: linear-gradient(180deg, #302AB8 11%, #7361F5 100%);
    }
  }
  body {
    .page-home & {
      background-image: url(${background_pattern});
      background-repeat: repeat-x;
      background-position: 0 600px;
    }
    color: #fff;
    min-height: 100vh;
    height: 100%;
    margin: 0;
    font-size: 22px;
    position: relative;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  img {
    display: block;
  }
  a:link, a:visited {
    text-decoration: none;
    transition: 0.5s all;
    /*padding-bottom: 1px;
    border-bottom: 2px solid #1DD5E1; */
  }
  a:hover, a:active, a:focus {
    /*color: #1DD5E1;*/ 
  }
  p {
    margin-top: 0;
      &:last-child {
        margin-bottom: 0
    }
  }
  h1, h2, h3, h4 {
    font-weight: normal;
  }
`