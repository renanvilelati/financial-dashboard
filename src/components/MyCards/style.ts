import styled from 'styled-components';
import { breakpoints } from '../../constants/breakpoints';

export const StyledCards = styled.div`

  h3 {
    font-size: 1.25rem;
    padding: 1.5rem 0;
  }

  .my-cards-header {
    display: flex;
    align-items: center;
  }
  button {
    background: transparent;
    color: ${({ theme }) => theme.colors.gray};
    transition: all 0.4s;
    padding: 1rem;

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
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  
  @media ${breakpoints.md} {
    justify-content: center;
    flex-wrap: wrap;
  }

  @media ${breakpoints.sm} {
    flex-direction: column;
  }
`;
