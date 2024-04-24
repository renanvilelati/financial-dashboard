import { StyledDivider } from './style';

interface iDividerProps {
  verticalSpace?: number;
}

const Divider = ({ verticalSpace }: iDividerProps) => {
  return <StyledDivider verticalSpace={verticalSpace} />;
};

export default Divider;
