import styled from 'styled-components';
import { breakpoints } from '../../../../constants/breakpoints';

export const StyledCard = styled.div`
  width: 288px;
  height: 179px;
  border-radius: 1rem;
  padding: 1.5rem 1.5rem 1rem 1.5rem;
  background-color: ${({theme}) => theme.colors.background};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  transition: transform ease-in-out 0.4s;
  border: 1px solid ${({theme}) => theme.colors.border};

  &:hover {
    outline: 1px solid ${({theme}) => theme.colors.primary};
    transform: translateY(-10px);
  }

  .user-info {
    display: flex;
    flex-direction: column;
    gap: 0.2rem;

    span:nth-of-type(1) {
      font-weight: 500;
    }
  }

  .card-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .card-footer {
    display: flex;
    justify-content: space-between;
  }

  @media ${breakpoints.md} {
    width: 40%;
  }

  @media ${breakpoints.sm} {
    width: 100%;
  }

`;

export const StyledEmptyCard = styled(StyledCard)`
  justify-content: center;
  align-items: center;
  font-size: 4rem;
  padding: 0;
`;
