import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';
import { theme } from 'globalStyles/theme';

export const GlobalStyle = createGlobalStyle`
 body {
    margin: 0;
    font-family: 'Montserrat', sans-serif;
    font-weight: ${theme.fontWeights.medium};
    font-size: ${theme.fontSizes.s};
    line-height: ${theme.lineHeights.text};
  }
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
  h1,h2,h3,h4,h5,h6,p {
    margin: 0;
  }
  ul, ol {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  a{
    text-decoration: none;
  }
`;