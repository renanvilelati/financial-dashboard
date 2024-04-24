import styled from 'styled-components';
import { breakpoints } from '../../constants/breakpoints';

interface iStyledAsideProps {
  sidebarIsOpen: boolean;
}

export const StyledAside = styled.aside<iStyledAsideProps>`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  z-index: 2;
  background-color:  ${({theme}) => theme.colors.background};;

  .show {
    transform: translateY(0);
  }

  .logo {
    margin-top: 2rem;
    cursor: pointer;
  }

  nav {
    padding-top: 6rem;
    width: 100%;
    height: 100%;

    ul {
      display: flex;
      flex-direction: column;
      height: 100%;
      align-items: center;
    }

    li {
      height: 5rem;
      display: flex;
      align-items: center;
      justify-content: left;
      width: 100%;
      cursor: pointer;
      transition: all 0.4s;
      position: relative;

      a {
        display: flex;
        align-items: center;
        gap: 1rem;
        color: ${({theme}) => theme.colors.white};
        padding-left: ${({ sidebarIsOpen }) => (sidebarIsOpen ? 5 : 2.2)}rem;
      }

      &:hover::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 4px;
        background-color: ${({theme}) => theme.colors.primary};
        border-radius: 0 4px 4px 0;
      }

      &:last-of-type {
        margin-top: auto;
        margin-bottom: 4rem;
      }
    }
  }

  @media ${breakpoints.md} {
    margin-top: 4rem;
    height: 100vh;
    background-color: ${({theme}) => theme.colors.black};
    display: none;

    .logo {
      display: none;
    }

    nav li a {
      padding-left: ${({ sidebarIsOpen }) => (sidebarIsOpen ? 9 : 0)}rem;
    }

    nav li:last-of-type {
      margin-top: initial;
    }
  }
`;
