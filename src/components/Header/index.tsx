'use client';
import { BiSearch, BiSun } from 'react-icons/bi';
import { MdNotificationsNone } from 'react-icons/md';
import { StyledHeader } from './style';
import React, { Dispatch } from 'react';
import OpenSidebarButton from './components/OpenSidebarButton';

interface iHeader {
  isLightTheme: boolean;
  setIsLightTheme: Dispatch<React.SetStateAction<boolean>>;
}
const Header = ({ isLightTheme, setIsLightTheme }: iHeader) => {

  return (
    <StyledHeader>
      <div className="header-left">
        <OpenSidebarButton />

        <div className="input-wrapper">
          <label htmlFor="search">
            <BiSearch size={20} />
          </label>
          <input id="search" type="text" placeholder="Search" />
        </div>
      </div>

      <div className="header-right">
        <button>
          <BiSun size={24} onClick={() => setIsLightTheme(!isLightTheme)} />
        </button>
        <div className="notification">
          <button>
            <MdNotificationsNone size={24} />
          </button>
          <span></span>
        </div>

        <div className="profile-wrapper">
          <div className="img-wrapper">
            <img src="./user-1.png" width={48} alt="Imagem do usuário logado" />
            <span></span>
          </div>
          <div className="info-wrapper">
            <span className="name">Jane Cooper</span>
            <span className="username">@cooperuser</span>
          </div>
        </div>
      </div>
    </StyledHeader>
  );
};

export default Header;
