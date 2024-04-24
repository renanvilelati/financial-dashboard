interface iDataMenu {
  id: number;
  href: string;
  label: string;
  icon: string;
}

export const dataMenu: iDataMenu[] = [
  { id: 1, href: '', label: 'dashboard', icon: 'MdSpaceDashboard' },
  { id: 2, href: 'users', label: 'user', icon: 'BiSolidUser' },
  {
    id: 3,
    href: 'cards',
    label: 'cards',
    icon: 'BiSolidCreditCardFront',
  },
  { id: 4, href: 'support', label: 'support', icon: 'AiFillPhone' },
  { id: 5, href: 'settings', label: 'settings', icon: 'IoMdSettings' },
  { id: 6, href: 'logout', label: 'logout', icon: 'TbLogout' },
];
