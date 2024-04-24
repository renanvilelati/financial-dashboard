import { ThemeProvider } from 'styled-components';
import { GlobalProvider } from './contexts/GlobalContext';
import Container from './components/Container';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import { GlobalStyle } from './styles/global';
import { useState } from 'react';
import { darkTheme, lightTheme } from './styles/theme';
import { AppRouter } from './router';
import { DashboardContextProvider } from './contexts/DashboardContext';

function App() {
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
            <AppRouter />
          </Container>
          <GlobalStyle />
        </DashboardContextProvider>
      </GlobalProvider>
    </ThemeProvider>
  );
}

export default App;
