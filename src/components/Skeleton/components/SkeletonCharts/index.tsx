import Skeleton from '../..';
import { StyledSkeletonWrapper } from '../../style';

interface iSkeletonCharts {
  type?: 'text' | 'circle';
}

const SkeletonCharts = ({ type = 'text' }: iSkeletonCharts) => {
  return (
    <StyledSkeletonWrapper
      className={type === 'text' ? 'textChart' : 'circleChart'}
    >
      {type === 'text' ? (
        <>
          <div
            className="flex"
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              justifyContent: 'space-evenly',
            }}
          >
            <Skeleton classes="title width-100" />
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              rowGap: '1rem',
            }}
          >
            <Skeleton classes="text width-100" />
            <Skeleton classes="text width-50" />
            <Skeleton classes="text width-100" />
            <Skeleton classes="text width-50" />
          </div>
        </>
      ) : (
        <div
          className="flex"
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Skeleton classes="title width-100" />
          <Skeleton classes="circle width-100" />
        </div>
      )}
    </StyledSkeletonWrapper>
  );
};

export default SkeletonCharts;
