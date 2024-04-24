'use client';
import styled from 'styled-components';
import { breakpoints } from '../../constants/breakpoints';

interface iStyledContainerProps {
  sidebarIsOpen: boolean;
}
export const StyledContainer = styled.div<iStyledContainerProps>`
  height: 100vh;
  width: 100%;
  display: grid;
  column-gap: 2rem;
  padding-right: 2rem;
  transition: all 0.4s;
  grid-template-columns: ${({ sidebarIsOpen }) =>
      sidebarIsOpen ? `${280}px` : `${100}px`} 1fr 392px;
  grid-template-rows: 120px 1fr;
  grid-template-areas:
    'sidebar header header'
    'sidebar main navigation';

  header {
    grid-area: header;
  }

  aside {
    grid-area: sidebar;
  }

  main {
    grid-area: main;
  }

  .navigation {
    grid-area: navigation;
    background-color: ${({theme}) => theme.colors.background};
  }

  @media ${breakpoints.md} {
    grid-template-rows: 100px 1fr;
    grid-template-columns: 1fr;
    grid-template-areas:
      /* 'sidebar' */
      'header'
      'main'
      'navigation';
  }
`;
