import { createContext, ReactNode, useContext, useState } from 'react';
import { api } from '../services/api';
import { iDataCard } from '../types/Cards';

interface iDashboardContext {
  cards: iDataCard[];
  loading: boolean;
  getCards: () => void;
  createCard: (data: iDataCard) => void;
}

export const DashboardContext = createContext({} as iDashboardContext);

export const DashboardContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [loading, setLoading] = useState(false);
  const [cards, setCards] = useState<iDataCard[]>([]);


  const getCards = async () => {
    try {
      setLoading(true);
      const res = await api.get('cards')
      setCards(res.data);      
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const createCard = async (data: iDataCard) => {
    try {
      setLoading(true);
      await api.post('cards', data)
      getCards()      
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <DashboardContext.Provider value={{ cards, loading, getCards, createCard }}>
      {children}
    </DashboardContext.Provider>
  );
};

export const useDashboardContext = () => useContext(DashboardContext);
