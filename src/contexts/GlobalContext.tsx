import {
  createContext,
  useState,
} from 'react';
import { iChildren } from '../types/children';

interface iGlobalContext {
  sidebarIsOpen: boolean;
  handleOpenSidebar: () => void;
  isLightTheme: boolean;
  handleChangeTheme: () => void;
}

export const GlobalContext = createContext<iGlobalContext>(
  {} as iGlobalContext
);

export const GlobalProvider = ({ children }: iChildren) => {
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);
  const [isLightTheme, setIsLightTheme] = useState(false);

  const handleChangeTheme = () => {
    setIsLightTheme(!isLightTheme);
  };

  const handleOpenSidebar = () => {
    setSidebarIsOpen(!sidebarIsOpen);
  };

  return (
    <GlobalContext.Provider
      value={{
        isLightTheme,
        handleChangeTheme,
        sidebarIsOpen,
        handleOpenSidebar,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

