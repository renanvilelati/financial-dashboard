import styled from 'styled-components';

export const StyledMyBalanceChart = styled.div`
  margin: 1.5rem 0;
  padding: 1.5rem;
  border-radius: 8px;
  background-color: ${({theme}) => theme.colors.background};
  border: 1px solid ${({theme}) => theme.colors.border};

  .header {
    display: flex;
    padding-bottom: 1.5rem;
  }

  .chart {
    width: 100%;
    height: 300px;
  }

  .situation {
    justify-self: center;
    display: flex;
    gap: 1rem;
    margin: auto;
    align-items: center;

    span {
      display: flex;
      align-items: center;
      gap: 1rem;
    }

    span span {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      display: inline-block;
    }
  }

  .income {
    span {
      background-color: #54e0a5;
    }
  }

  .spend {
    span {
      background-color: #5d2ac9;
    }
  }
`;
