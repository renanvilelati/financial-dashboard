import Skeleton from '..';
import { StyledSkeletonWrapper } from '../style';

interface iSkeletonCard {
  width: string;
  height: string;
}

const SkeletonCard = ({ width, height }: iSkeletonCard) => {
  return (
    <StyledSkeletonWrapper minWidth={width} height={height}
    >
      <div
        className="flex"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Skeleton classes="title width-100" />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', rowGap: '1rem' }}>
        <Skeleton classes="text width-100" />
        <Skeleton classes="text width-100" />
      </div>
    </StyledSkeletonWrapper>
  );
};

export default SkeletonCard;
