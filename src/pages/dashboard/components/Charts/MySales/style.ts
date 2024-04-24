import styled from 'styled-components';

export const StyledMySalesChart = styled.div`
  span {
    font-size: 0.875rem;
  }
  width: 50%;
  height: 226px;
  padding: 1.5rem;
  border-radius: 8px;
  background-color: ${({theme}) => theme.colors.background};
  border: 1px solid ${({theme}) => theme.colors.border};
  display: flex;

  .chart {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    width: calc(100% - 110px);
    height: 100%;
  }

  @media (max-width: 1024px) {
    width: 100%;
  }
`;
