import { AiOutlineClose } from 'react-icons/ai';
import { GiHamburgerMenu } from 'react-icons/gi';
import { useGlobalContext } from '../../../contexts/GlobalContext';

const OpenSidebarButton = () => {
  const { sidebarIsOpen, handleOpenSidebar } = useGlobalContext();

  return (
    <div className="menu-icon">
      {sidebarIsOpen ? (
        <AiOutlineClose size={32} onClick={handleOpenSidebar} />
      ) : (
        <GiHamburgerMenu size={32} onClick={handleOpenSidebar} />
      )}
    </div>
  );
};

export default OpenSidebarButton;
