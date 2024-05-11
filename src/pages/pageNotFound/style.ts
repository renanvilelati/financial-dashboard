'use client'
import styled from 'styled-components';

export const StyledNotFound = styled.div`
  width: 100%;
  h2 {
    color: ${({ theme }) => theme.colors.white};
    font-size: 3rem;
    margin-bottom: 2rem;
  }

  a {
    color: ${({theme}) => theme.colors.white};
    padding: 1rem 2rem;
    background-color: ${({theme}) => theme.colors.primary};
    border-radius: 8px;
    margin-top: 2rem;
  }
`;
