interface iDataMenu {
  id: number;
  href: string;
  label: string;
  icon: string;
}

export const dataMenu: iDataMenu[] = [
  { id: 1, href: 'dashboard', label: 'dashboard', icon: 'MdSpaceDashboard' },
  { id: 2, href: 'dashboard', label: 'user', icon: 'BiSolidUser' },
  {
    id: 3,
    href: 'dashboard',
    label: 'cards',
    icon: 'BiSolidCreditCardFront',
  },
  { id: 4, href: 'dashboard', label: 'support', icon: 'AiFillPhone' },
  { id: 5, href: 'dashboard', label: 'settings', icon: 'IoMdSettings' },
  { id: 6, href: 'dashboard', label: 'logout', icon: 'TbLogout' },
];
