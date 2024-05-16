import { Link } from 'react-router-dom';
import Logo from '../../../../public/logo.svg';
import { StyledAside } from './style';
import OpenSidebarButton from '../Header/components/OpenSidebarButton';
import { dataMenu } from '../../../mock/menu';
import { createSidebarMenu } from '../../../utils/createSidebarMenu';
import { useGlobalContext } from '../../../hooks/useGlobalContext';

const Sidebar = () => {
  const { sidebarIsOpen, handleOpenSidebar } = useGlobalContext();

  return (
    <StyledAside sidebarIsOpen={sidebarIsOpen} data-sidebar-is-open={sidebarIsOpen}>

      {
        sidebarIsOpen && <span className='close-menu-icon'> <OpenSidebarButton size={24}  /> </span>
      }

      <img
        src={Logo}
        width={54}
        height={54}
        className="logo"
        alt="Logomarca da empresa"
      />

      <nav>
        <ul>
          {dataMenu.map((item) => {          
            return (
              <li key={item.id} onClick={handleOpenSidebar}>
                <Link to={`/${item.href}`}>
                  {createSidebarMenu(item.label)}
                  {sidebarIsOpen ? item.label: null}
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
