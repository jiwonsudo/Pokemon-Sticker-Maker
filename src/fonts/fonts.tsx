import { createGlobalStyle } from 'styled-components';
import Galmuri14 from './Galmuri14.woff2'

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Galmuri14';
    src: local('Galmuri14');
    font-style: normal;
    src: url(${Galmuri14}) format('truetype');
  }  
`

export { GlobalStyle };

