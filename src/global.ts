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
  @font-face {
    font-family: 'Paperozi';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/2408-3@1.0/Paperlogy-8ExtraBold.woff2') format('woff2');
    font-weight: 800;
    font-display: swap;
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

  h2 {
    font-family: 'Paperozi';
  }

 body {
    background: linear-gradient(
      120deg,
      #f0e6f6 0%,
      #ffe4e8 40%,
     #e4f7ff 100%
    );
    width: 100vw;
    min-height: 100vh;
  }
`;
