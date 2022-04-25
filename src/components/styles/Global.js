import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  html {
    font-size: 16px;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    background-color: black;
  }
  
  body {
    font-family: 'Poppins', sans-serif;
    color: #FFFFFF;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  // Desktop
  @media (min-width: 1281px) {
    html {
      font-size: 20px;
    }
  }

  // Laptops, Desktops

  @media (min-width: 1025px) and (max-width: 1280px) {
    html {
      font-size: 18px;
    }
  }

  // Tablets, (portrait)

  @media (min-width: 768px) and (max-width: 1024px) {
    
    /* CSS */
    
  }

  // Tablets, (landscape)

  @media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
    
    /* CSS */
    
  }

  // Low Resolution Tablets, Mobiles (Landscape)

  @media (min-width: 481px) and (max-width: 767px) {
    html {
      font-size: 13px;
    }
  }

  // Smartphones Mobiles (Portrait)

  @media (min-width: 280px) and (max-width: 480px) {
    html {
      font-size: 10px;
    }
  }
`;

export default GlobalStyles;
