import { createGlobalStyle } from 'styled-components';
import Galmuri11 from './Galmuri11.woff2';
import Pretendard from './PretendardVariable.woff2';

const GlobalFonts = createGlobalStyle`
  @font-face {
    font-family: 'Galmuri11';
    src: local('Galmuri11');
    font-style: normal;
    src: url(${Galmuri11}) format('truetype');
  }  

  @font-face {
    font-family: 'Pretendard';
    src: local('Pretendard');
    font-style: normal;
    src: url(${Pretendard}) format('truetype');
  } 
`

export default GlobalFonts;

