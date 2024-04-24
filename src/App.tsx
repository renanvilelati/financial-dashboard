import { ThemeProvider } from "styled-components";
import { GlobalProvider } from "./contexts/GlobalContext";
import Container from "./components/Container";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import { GlobalStyle } from "./styles/global";
import { useState } from "react";
import { darkTheme, lightTheme } from "./styles/theme";
import Dashboard from "./pages/dashboard/page";

function App() {
  const [isLightTheme, setIsLightTheme] = useState(false);

  return (
    <ThemeProvider theme={isLightTheme ? lightTheme : darkTheme}>
      <GlobalProvider>
        <Container>
          <Sidebar />
          <Header
            isLightTheme={isLightTheme}
            setIsLightTheme={setIsLightTheme}
          />
          <Dashboard />
        </Container>
        <GlobalStyle />
      </GlobalProvider>
    </ThemeProvider>
  );
}

export default App;
