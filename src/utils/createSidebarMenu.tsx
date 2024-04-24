import { MdSpaceDashboard } from 'react-icons/md';
import { BiSolidCreditCardFront, BiSolidUser } from 'react-icons/bi';
import { IoMdSettings } from 'react-icons/io';
import { TbLogout } from 'react-icons/tb';
import { AiFillPhone } from 'react-icons/ai';

export const createSidebarMenu = (label: string) => {
  switch (label) {
    case 'dashboard':
      return <MdSpaceDashboard size={24} />;
    case 'user':
      return <BiSolidUser size={24} />;
    case 'cards':
      return <BiSolidCreditCardFront size={24} />;
    case 'support':
      return <AiFillPhone size={24} />;
    case 'settings':
      return <IoMdSettings size={24} />;
    case 'logout':
      return <TbLogout size={24} />;
  }
};
