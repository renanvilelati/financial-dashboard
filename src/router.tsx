import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CardPage from './pages/cards';
import Dashboard from './pages/dashboard/page';
import SettingsPage from './pages/settings';
import SupportPage from './pages/support';
import UsersPage from './pages/users';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/users" element={<UsersPage />} />
          <Route path="/cards" element={<CardPage />} />
          <Route path="/support" element={<SupportPage />} />
          <Route path="/settings" element={<SettingsPage />} />
      </Routes>
    </BrowserRouter>
  );
};
