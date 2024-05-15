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
  z-index: 99;
  position: relative;
  background-color: ${({ theme }) => theme.colors.background};

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
    /* display: flex; */

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
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        gap: 1rem;
        color: ${({ theme }) => theme.colors.white};
        padding-left: ${({ sidebarIsOpen }) => (sidebarIsOpen ? 5 : 2.2)}rem;
      }

      &:hover::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 4px;
        background-color: ${({ theme }) => theme.colors.primary};
        border-radius: 0 4px 4px 0;
      }

      &:last-of-type {
        margin-top: auto;
        margin-bottom: 4rem;
      }
    }
  }

  .close-menu-icon {
    display: none;
  }

  @media ${breakpoints.md} {
    background-color: ${({ theme }) => theme.colors.black};
    transform: translateX(-100%);
    transition: transform 0.5s;
    position: fixed;
    inset: 0;

    nav li:hover::after {
      background-color: initial;
    }

    &[data-sidebar-is-open='true'] {
      transform: translateX(0);

      .close-menu-icon {
        display: inline-block;
        position: absolute;
        right: 1.5rem;
        top: 0.5rem;
        padding: 2rem;
        cursor: pointer;
        color: ${({ theme }) => theme.colors.gray};
      }

      nav {
        padding-top: 4rem;
        justify-content: center;

        ul {
          padding-left: 40vw;
        }

        a {
          padding-left: 0;
        }
      }
    }

    nav li:last-of-type {
      margin-top: initial;
    }
  }
`;
