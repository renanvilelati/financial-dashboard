import { Link } from 'react-router-dom';
import Logo from '../../../public/logo.svg';
import { useGlobalContext } from '../../contexts/GlobalContext';
import { dataMenu } from '../../mock/menu';
import { createSidebarMenu } from '../../utils/createSidebarMenu';
import { StyledAside } from './style';


const Sidebar = () => {
  const { sidebarIsOpen } = useGlobalContext();

  return (
    <StyledAside sidebarIsOpen={sidebarIsOpen}>
      <img
        src={Logo}
        width={54}
        height={54}
        className="logo"
        alt="Logomarca da empresa"
      />

      <nav>
        <ul className='test'>
          {dataMenu.map((item) => {
            

            return (
              <li key={item.id}>
                <Link to={`/${item.href}`}>
                  {createSidebarMenu(item.label)}
                  {sidebarIsOpen ? item.label : null}
                </Link>
              </li>
            )
          } )}
        </ul>
      </nav>
    </StyledAside>
  );
};

export default Sidebar;
