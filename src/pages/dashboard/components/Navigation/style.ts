import styled, { css } from 'styled-components';
import { breakpoints } from '../../../../constants/breakpoints';

export const StyledNavigation = styled.div`
  padding: 3rem;
  /* margin: 0 2rem; */
  border-radius: 0.5rem;
  border: 1px solid ${({theme}) => theme.colors.border};
  margin-bottom: 3rem;

  h3 {
    font-size: 1.25rem;
    padding-bottom: 2rem;
  }

  span {
    font-size: 0.875rem;
  }

  .money {
    margin-left: auto;
    color: ${({theme}) => theme.colors.white};
  }

  .header {
    display: flex;
    justify-content: space-between;

    a {
      color: ${({theme}) => theme.colors.gray};
      font-size: 0.875rem;
      padding-top: 0.4rem;

      &:hover {
        color: ${({theme}) => theme.colors.primary};
      }
    }
  }

  .payment-list {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding-bottom: 2rem;
  }

  .payment-list li {
    display: flex;
    align-items: center;
    gap: 1rem;
    cursor: pointer;
    transition: all 0.4s;

    &:hover {
      transform: translateX(10px);
      color: ${({theme}) => theme.colors.primary};
    }

    .icon-wrapper {
      width: 40px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      color: #25d757;
    }
  }

  .recent-transictions {
    .user-wrapper {
      display: flex;
      align-items: center;
      /* cursor: pointer; */
      gap: 1rem;

      img {
        border-radius: 50%;
      }
    }

    .user-info {
      display: flex;
      flex-direction: column;

      .hour {
        color: ${({theme}) => theme.colors.gray};
      }
    }

    .money {
      margin-left: auto;
    }

    .positive {
      color: ${({theme}) => theme.colors.success};
    }

    .negative {
      color: ${({theme}) => theme.colors.danger};
    }
  }
`;

interface iStyledPaymentItem {
  type: string;
}
export const StyledPaymentItem = styled.li<iStyledPaymentItem>`
  .icon-wrapper {
    ${({ type }) => {
      switch (type) {
        case 'laundry':
          return css`
            background-color: #25d75720;
            color: red;
          `;
        case 'veterinary':
          return css`
            background-color: #864cff20;
          `;
        case 'internet':
          return css`
            background-color: #41ffc620;
          `;
        case 'medical':
          return css`
            background-color: #ff41b320;
          `;
        case 'furniture':
          return css`
            background-color: #f8564020;
          `;
        default:
          return css`
            background-color: #222;
          `;
      }
    }};
  }

  @media ${breakpoints.md} {
    h3 {
      font-size: 1rem;
    }
    width: 100%;
    padding: 0;
  }
`;
