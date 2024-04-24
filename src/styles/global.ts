import { createGlobalStyle } from 'styled-components';
import { breakpoints } from '../constants/breakpoints';

export const GlobalStyle = createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: 0;
}

html {
  font-family: 'Roboto', sans-serif;
}

ul {
  list-style: none;
}

a {
  text-decoration: none;
}

button {
  cursor: pointer;
  border: 0;
}

body {
  background-color: ${({theme}) => theme.colors.black};;
  color: ${({theme}) => theme.colors.white};;
}

h3 {
  font-weight: 500;
}

main {
  padding: 0 2rem;
}

h3 {
  font-weight: 600 !important;
}

@media ${breakpoints.md} {
  h3 {
    font-size: 1rem !important;
    font-weight: 600;
  }
}

`;
