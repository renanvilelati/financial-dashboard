import styled from 'styled-components';
import { breakpoints } from '../../constants/breakpoints';

export const StyledModal = styled.div`
  .background {
    position: fixed;
    inset: 0 0 0 0;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 1000;
  }

  .content {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 2rem;
    border-radius: 16px;
    background-color: ${({ theme }) => theme.colors.black};
    border: 1px solid ${({ theme }) => theme.colors.border};
  }

  .header {
    width: 100%;
    height: 20px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 1rem 0;
  }

  .header button {
    position: initial;
  }

  form {
    width: 500px;

    .form-group {
      display: flex;
      flex-direction: column;
      margin-bottom: 1rem;
      gap: 1rem;
    }

    .input-wrapper {
      width: 100%;

      input {
        width: 100%;
      }
    }

    input,
    select {
      padding: 0.7rem 2rem;
      font-size: 1rem;
      border-radius: 8px;
      background: transparent;
      color: #fff;
      border: 1px solid ${({ theme }) => theme.colors.border};
      &::placeholder {
        color: ${({ theme }) => theme.colors.gray};
      }
    }

    ::-webkit-calendar-picker-indicator {
      filter: invert(1);
    }

    option {
      background-color: #222;
      padding: 0.5rem 0;
      height: 10px;
    }

    button {
      width: 100%;
      font-weight: 500;
      color: ${({ theme }) => theme.colors.white};
      background-color: ${({ theme }) => theme.colors.primary};
      border-radius: 8px;
      font-size: 1rem;
      position: initial;
    }
    
    button:hover {
      color: ${({ theme }) => theme.colors.white};
    }
  }

  @media ${breakpoints.sm} {
    .content {
      width: 90%;
    }
    form {
      width: 100%;
    }
  }
`;
