import { createGlobalStyle } from 'styled-components'

import { colors } from '@theme/colors'

export const GlobalStyles = createGlobalStyle`
  body {
    overflow-x: hidden;

    margin: 0;

    color: ${colors.WHITE};
    background-color: ${colors.BLACK_70};
    
    min-height: 100vh;
  }
  
  * {
    box-sizing: border-box;

    font-family: 'Roboto', sans-serif;

    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    -webkit-text-size-adjust: 100%;
  }
`
