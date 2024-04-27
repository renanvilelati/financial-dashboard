import styled from 'styled-components';
import { breakpoints } from '../../constants/breakpoints';

interface iStyledModal {
  isDarkTheme: boolean;
}

export const StyledModal = styled.div<iStyledModal>`
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
    background: transparent;
    color: ${({ theme }) => theme.colors.white};
    padding: 1rem;

    &:hover {
      color: ${({ theme }) => theme.colors.primary};
    }
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
      border: 1px solid ${({ theme }) => theme.colors.border};
      &::placeholder {
        color: ${({ theme }) => theme.colors.gray};
      }
    }

    select {
      color: #FFF;
    }

    input {
      color: ${({ theme }) => theme.colors.white};
    }

    ::-webkit-calendar-picker-indicator {
      filter: ${({ isDarkTheme }) => (isDarkTheme ? 'invert(1)' : 'initial')};
    }

    option {
      background-color: #222;
      padding: 0.5rem 0;
      height: 10px;
    }

    button {
      width: 100%;
      padding: 0.7rem 2rem;
      font-weight: 500;
      color: #FFF;
      background-color: ${({ theme }) => theme.colors.primary};
      border-radius: 8px;
      font-size: 1rem;
      position: initial;
      transition: all 0.4s;
      &:hover {
        transform: translateY(-2px);
      }
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
