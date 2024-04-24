import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { GlobalProvider } from './contexts/GlobalContext.tsx';
import { ThemeProvider } from 'styled-components';
import { darkTheme } from './styles/theme.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
      <GlobalProvider>
        <App />
      </GlobalProvider>
    </ThemeProvider>
  </React.StrictMode>
);
