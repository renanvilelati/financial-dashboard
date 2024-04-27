import styled from 'styled-components';
import { breakpoints } from '../../constants/breakpoints';

export const StyledCards = styled.div`
  h3 {
    font-size: 1.25rem;
    padding: 1.5rem 0 0;
  }

  .my-cards-header {
    display: flex;
    justify-content: space-between;
  }

  .my-cards-header div {
    display: flex;
    justify-content: space-between;
    padding-bottom: 1rem;
    position: relative;
  }

  .my-cards-header .btn-new-card {
    background: ${({ theme }) => theme.colors.background};
    border: 1px solid ${({ theme }) => theme.colors.border};
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem 1rem;
    color: ${({ theme }) => theme.colors.white};
    align-self: center;
    gap: 0.5rem;
    border-radius: 8px;
  }

  .my-cards-header .btn-new-card:hover {
    outline: 1px solid ${({ theme }) => theme.colors.primary};
  }

  .title-wrapper {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .title-wrapper span {
    font-size: 0.875rem;
    display: flex;
    color: ${({ theme }) => theme.colors.gray};
  }

  @keyframes moveRight1 {
    0% {
      transform: translateX(0) scaleX(0.2);
      opacity: 0.2;
    }
    50% {
      transform: translateX(50%) scaleX(1);
      opacity: 1;
    }
    100% {
      transform: translateX(100%) scaleX(0.2);
      opacity: 0.2;
    }
  }

  .arrow {
    animation: moveRight1 3s infinite;
  }

  button.btn-show-password {
    background: transparent;
    color: ${({ theme }) => theme.colors.gray};
    transition: all 0.4s;
    padding: 1rem;
    padding-bottom: 0.8rem;
    position: absolute;
    left: 7rem;
    bottom: 41px;

    &:hover {
      color: ${({ theme }) => theme.colors.primary};
      transform: translateY(-2px);
    }
  }

  @media ${breakpoints.md} {
    width: 100%;
  }
`;

export const StyledCardList = styled.div`
  width: 300px;
  min-width: 100%;
  display: flex;
  gap: 1.5rem;
  overflow-x: scroll;
  justify-content: flex-start;
  padding: 1rem 0 0.5rem;

  .actions {
    display: none;
    gap: 1rem;
    z-index: 2;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    button {
      background: ${({ theme }) => theme.colors.primary};
      color: ${({ theme }) => theme.colors.white};
      width: 3rem;
      height: 3rem;
      border-radius: 16px;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
    }
  }

  &::-webkit-scrollbar {
    height: 5px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.border};
  }

  @media ${breakpoints.md} {
    padding: 0.1rem 0 0.5rem 0.1rem;
  }

  @media ${breakpoints.sm} {
  }
`;
