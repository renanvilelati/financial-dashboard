import { AiOutlineClose } from 'react-icons/ai';
import { GiHamburgerMenu } from 'react-icons/gi';
import { useGlobalContext } from '../../../../hooks/useGlobalContext';

const OpenSidebarButton = ({size = 32} ) => {
  const { sidebarIsOpen, handleOpenSidebar } = useGlobalContext();

  return (
    <div className="menu-icon" title='Open/close sidebar button'>
      {sidebarIsOpen ? (
        <AiOutlineClose size={size} onClick={handleOpenSidebar} />
      ) : (
        <GiHamburgerMenu size={size} onClick={handleOpenSidebar} />
      )}
    </div>
  );
};

export default OpenSidebarButton;
