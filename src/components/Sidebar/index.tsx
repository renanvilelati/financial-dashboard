'use client';
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
          {dataMenu.map((item) => (
            <li key={item.id}>
              <a href={`/${item.href}`}>
                {createSidebarMenu(item.label)}
                {sidebarIsOpen ? item.label : null}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </StyledAside>
  );
};

export default Sidebar;
