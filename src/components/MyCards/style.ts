import styled from 'styled-components';
import { breakpoints } from '../../constants/breakpoints';

export const StyledCards = styled.div`
  h3 {
    font-size: 1.25rem;
    padding: 1.5rem 0 0;
  }

  .my-cards-header  {
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
    color: ${({ theme }) => theme.colors.gray};
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
