import { ReactNode } from 'react';
import { StyledContainer } from './style';
import { useGlobalContext } from '../../hooks/useGlobalContext';

interface iChildren {
  children: ReactNode;
}
const Container = ({ children }: iChildren) => {
  const { sidebarIsOpen } = useGlobalContext();

  return (
    <StyledContainer sidebarIsOpen={sidebarIsOpen}>{children}</StyledContainer>
  );
};

export default Container;
