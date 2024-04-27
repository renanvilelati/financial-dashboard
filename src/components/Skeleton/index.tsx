import { StyledSkeleton } from "./style"

const Skeleton = ({classes}: {classes: string}) => {
  const classNames = `${classes} animate-pulse`
  return <StyledSkeleton className={classNames}></StyledSkeleton>
}

export default Skeleton
