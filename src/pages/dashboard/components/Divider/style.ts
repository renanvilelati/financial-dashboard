import styled from 'styled-components';
interface iDividerProps {
  verticalSpace?: number;
}

export const StyledDivider = styled.div<iDividerProps>`
  width: 100%;
  height: 1px;
  margin: ${({ verticalSpace }) =>
      verticalSpace ? `${verticalSpace}rem` : '1rem'}
    0;
  background-color: ${({theme}) => theme.colors.border};
`;
