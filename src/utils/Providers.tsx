import { ReactNode, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from '../styles/theme';
import { GlobalProvider } from '../contexts/GlobalContext';
import { DashboardContextProvider } from '../contexts/DashboardContext';
import Container from '../components/Container';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import { GlobalStyle } from '../styles/global';

const Providers = ({ children }: { children: ReactNode }) => {
  const [isLightTheme, setIsLightTheme] = useState(false);

  return (
    <ThemeProvider theme={isLightTheme ? lightTheme : darkTheme}>
      <GlobalProvider>
        <DashboardContextProvider>
          <Container>
            <Sidebar />
            <Header
              isLightTheme={isLightTheme}
              setIsLightTheme={setIsLightTheme}
            />
            {children}
          </Container>
          <GlobalStyle />
        </DashboardContextProvider>
      </GlobalProvider>
    </ThemeProvider>
  );
};

export default Providers;
