'use client';
import styled from 'styled-components';

export const StyledDashboard = styled.main`
  margin-bottom: 3rem;

  h2 {
    font-size: 2rem;
  }

  .footer-charts {
    display: flex;
    gap: 1.5rem;
  }

  @media (max-width: 1024px) {
    .footer-charts {
      flex-direction: column;
    }
  }
`;
