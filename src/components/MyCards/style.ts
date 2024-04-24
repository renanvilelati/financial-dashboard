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

  form {
    width: 500px;
    background-color: #333;
    padding: 2rem;
    

    .form-group {
      display: flex;
      flex-direction: column;
      margin-bottom: 1rem;
    }

    input, select {
      padding: 0.5rem 2rem;
      border-radius: 8px;
      background: transparent;
      color: #FFF;
      border: 1px solid ${({theme}) => theme.colors.border};
      &::placeholder {
        color: ${({theme}) => theme.colors.gray};
      }
    }

    option {
      background-color: #222;
    }

    button {
      width: 100%;
      background-color: #222;
      border-radius: 8px;
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
