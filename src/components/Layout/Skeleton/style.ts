import styled from 'styled-components';
import { ReactNode } from 'react';
import { breakpoints } from '../../../constants/breakpoints';

export const StyledSkeleton = styled.div`
  background-color: #444;
  border-radius: 8px;
  position: relative;

  &.title {
    height: 1.25rem;
    margin-bottom: 1rem;
  }

  &.text {
    height: 0.75rem;
  }

  &.width-20 {
    width: 20%;
  }

  &.width-50 {
    width: 50%;
  }

  &.width-100 {
    width: 100%;
  }

  &.circle {
    width: 150px;
    height: 150px;
    border-radius: 50%;
  }

  &.profile-circle {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 10;
    background: linear-gradient(90deg, #222, #444, #222);
    background-size: 200%;
    animation: pulse 1s infinite linear;
    border-radius: 16px;
  }

  &.circle::before {
    border-radius: 50%;
  }

  @keyframes pulse {
    0% {
      background-position: -100% 0;
    }
    100% {
      background-position: 100% 0;
    }
  }
`;

interface iSkeletonWrapperProps {
  minWidth?: string;
  height?: string;
  children: ReactNode;
}

export const StyledSkeletonWrapper = styled.div<iSkeletonWrapperProps>`
  min-width: ${({ minWidth }) => minWidth};
  height: ${({ height }) => height};
  background-color: #181818;
  padding: 1.5rem;
  border-radius: 16px;
  border: 1px solid #222;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 1rem 0;

  &.circleChart {
    min-width: 50%;
  }

  @media ${breakpoints.md} {
    &.circleChart {
      min-width: 100% !important;
    }
  }
`;
