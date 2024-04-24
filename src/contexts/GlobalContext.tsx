import {
  ReactNode,
  createContext,
  useContext,
  useState,
} from 'react';


interface iGlobalContext {
  sidebarIsOpen: boolean;
  handleOpenSidebar: () => void;
  isLightTheme: boolean;
  handleChangeTheme: () => void;
}
interface iGlobalProviderProps {
  children: ReactNode;
}

export const GlobalContext = createContext<iGlobalContext>(
  {} as iGlobalContext
);

export const GlobalProvider = ({ children }: iGlobalProviderProps) => {
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

export const useGlobalContext = () => useContext(GlobalContext);
