import Skeleton from '.';
import { StyledSkeletonWrapper } from './style';

interface iSkeletonCard {
  width: string;
  height: string;
}

const SkeletonNavigation = ({ width, height }: iSkeletonCard) => {
  return (
    <StyledSkeletonWrapper minWidth={width} height={height}>
      <div
        className="flex"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '100%'
        }}
      >
        <Skeleton classes="title width-100" />
        <Skeleton classes="text width-100" />
        <Skeleton classes="text width-100" />
        <Skeleton classes="text width-100" />
        <Skeleton classes="text width-100" />
        <Skeleton classes="text width-100" />
      </div>
    </StyledSkeletonWrapper>
  );
};

export default SkeletonNavigation;
