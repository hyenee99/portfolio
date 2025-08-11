import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'HakgyoansimDunggeunmisoTTF-B';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/2408-5@1.0/HakgyoansimDunggeunmisoTTF-B.woff2') format('woff2');
    font-weight: 700;
    font-style: normal;
  }
  @font-face {
    font-family: 'Pretendard-Regular';
    src: url('https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
    font-weight: 400;
    font-style: normal;
  }
  @font-face {
    font-family:'DNFBitBitv2';
    font-style:normal;
    font-weight:400;
    src:url('//cdn.df.nexon.com/img/common/font/DNFBitBitv2.otf')format('opentype')
  }

  * {
    padding: 0;
    margin: 0;
    overflow-x: hidden;
    box-sizing: border-box;
    font-family: 'Pretendard-Regular';
  }

  h1 {
    font-family: 'DNFBitBitv2';
  } 
`;
