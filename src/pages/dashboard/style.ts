'use client';
import styled from 'styled-components';
import { breakpoints } from '../../constants/breakpoints';

export const StyledDashboard = styled.main`
  margin-bottom: 3rem;

  h2 {
    font-size: 2rem;
  }

  .footer-charts {
    display: flex;
    gap: 1.5rem;
  }

  @media ${breakpoints.md} {
    .footer-charts {
      flex-direction: column;
    }
  }
`;
