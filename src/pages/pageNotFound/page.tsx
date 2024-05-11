import { Link } from 'react-router-dom';
import { StyledNotFound } from './style';

const PageNotFound = () => {
  return (
    <StyledNotFound>
      <h2>Page not found</h2>
      <Link to="/"> Back to dashboard </Link>
    </StyledNotFound>
  );
};

export default PageNotFound;
