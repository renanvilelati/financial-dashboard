import styled from 'styled-components';
import { breakpoints } from '../../../../../constants/breakpoints';

export const StyledMonthlyExpensesChart = styled.div`
  width: 50%;
  height: 226px;
  padding: 1.5rem;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.border};

  .chart {
    width: 100%;
    height: 100%;
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    li {
      display: flex;
      gap: 0.5rem;
    }
    li div span:nth-of-type(1) {
      margin-right: 0.5rem;
    }

    .expense-name {
      text-align: left;
    }
  }

  .legend-icon {
    width: 12px;
    height: 12px;
    display: inline-block;
    border-radius: 50%;
  }
  .expense-name {
    font-size: 0.875rem;
    color: ${({ theme }) => theme.colors.gray};
  }
  
  @media ${breakpoints.md} {

    .recharts-responsive-container {
      position: relative;
      right: -70px;
    }

    ul {
      gap: initial;
      margin-right: 0;
      position: absolute;
      left: -75px;
      bottom: 50%;
    }

    ul li {
      gap: 0.5rem;
      width: 10rem;
      display: flex;
    }

    ul li {
      font-size: 12px;
    }
    width: 100%;
  }

`;
