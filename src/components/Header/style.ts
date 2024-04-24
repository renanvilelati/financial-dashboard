'use client';
import styled from 'styled-components';
import { breakpoints } from '../../constants/breakpoints';

export const StyledHeader = styled.header`
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 3;
  padding-left: 2rem;

  .input-wrapper {
    width: 100%;
    height: 48px;
    border-radius: 8px;
    background-color: ${({theme}) => theme.colors.background};
    display: flex;
    align-items: center;
    gap: 1rem;
    padding-left: 1rem;
    border: 1px solid ${({theme}) => theme.colors.border};
    transition: border 0.4s;

    &:focus-within {
      border: 1px solid ${({theme}) => theme.colors.primary};
    }

    input {
      background: transparent;
      width: 100%;
      height: 100%;
      color: ${({theme}) => theme.colors.white};
      border: 0;
    }

    label {
      line-height: 0;
    }

    svg {
      color: ${({theme}) => theme.colors.gray};
    }
  }

  .profile-wrapper {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    cursor: pointer;
  }

  .img-wrapper {
    border-radius: 50%;
    position: relative;
    img {
      border-radius: 50%;
    }

    span {
      width: 10px;
      height: 10px;
      display: inline-block;
      border-radius: 50%;
      position: absolute;
      bottom: 8px;
      right: 0;
      background-color: ${({theme}) => theme.colors.success};
    }
  }

  .header-left {
    display: flex;
    gap: 2rem;
    align-items: center;
    width: 50vh;

    .menu-icon {
      cursor: pointer;

      svg {
        color: #494949;
        &:hover {
          color: ${({theme}) => theme.colors.primary};
        }
      }
    }

    input {
    }
  }

  .header-right {
    display: flex;
    align-items: center;
    gap: 2rem;

    button {
      background: transparent;
      color: ${({theme}) => theme.colors.gray};
      transition: all 0.4s;

      &:hover {
        color: ${({theme}) => theme.colors.primary};
        transform: translateY(-2px);
      }
    }

    .notification {
      position: relative;

      span {
        width: 10px;
        height: 10px;

        display: inline-block;
        border-radius: 50%;
        position: absolute;
        top: 2px;
        right: -2px;
        background-color: ${({theme}) => theme.colors.danger};
      }
    }
  }

  .info-wrapper {
    display: flex;
    flex-direction: column;

    span:nth-of-type(2) {
      color: ${({theme}) => theme.colors.gray};
    }
  }

  @media ${breakpoints.md} {
    gap: 0.5rem;
    width: 100vw;
    padding: 0 2rem;


    .input-wrapper {
      order: 3;
    }

    .input-wrapper {
      display: none;
    }
  }
`;
