import styled from 'styled-components';
import { breakpoints } from '../../constants/breakpoints';

export const StyledCards = styled.div`

  h3 {
    font-size: 1.25rem;
    padding: 1.5rem 0 0;
  }

  .my-cards-header {
    display: flex;
    align-items: center;
    justify-content: -between;
    padding-bottom: 1rem;
    position: relative;
  }

  .title-wrapper {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .title-wrapper span{
    font-size: 0.875rem;
    color: ${({ theme }) => theme.colors.gray};
  }

  button {
    background: transparent;
    color: ${({ theme }) => theme.colors.gray};
    transition: all 0.4s;
    padding: 1rem;
    padding-bottom: 0.8rem;
    position: absolute;
    left: 5rem;

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
