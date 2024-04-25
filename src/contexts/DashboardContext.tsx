import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
// import { api } from '../services/api';
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

  const getCards =  () => {
    try {
      setLoading(true);
      // const res = await api.get('cards')
      // setCards(res.data);

      // Enquanto não tem back
      const storagedCards = JSON.parse(localStorage.getItem('cards') || '[]');
      setCards(storagedCards);
    } catch (error) {
      console.error('Error while fetching cards:', error);
    } finally {
      setLoading(false);
    }
  };

  const createCard =  (data: iDataCard) => {
    try {
      // setLoading(true);
      // await api.post('cards', data)

      // Enquanto não tem back
      const updatedCards = [...cards, data];
      setCards(updatedCards);
      localStorage.setItem('cards', JSON.stringify(updatedCards));

      getCards();
    } catch (error) {
      console.error('Error while creating card:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect( () => {
    const InitialData = [
      {
        id: 1,
        type: 'Credit',
        userName: 'Renan Vilela',
        password: '1715 2154 1471 2114',
        validate: '2024-05-30T23:47:55.991Z',
      },
      {
        id: 2,
        type: 'Debit',
        userName: 'Renan Vilela',
        password: '2215 1471 2114 3221',
        validate: '2024-07-24T23:47:55.991Z',
      }
    ]

    localStorage.setItem('cards', JSON.stringify(InitialData));

    
  }, [])

  return (
    <DashboardContext.Provider value={{ cards, loading, getCards, createCard }}>
      {children}
    </DashboardContext.Provider>
  );
};

export const useDashboardContext = () => useContext(DashboardContext);
