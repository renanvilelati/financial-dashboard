import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
// import { api } from '../services/api';
import { iDataCard } from '../types/Cards';

interface iDashboardContext {
  cards: iDataCard[];
  loading: boolean;
  getCards: () => void;
  removeCard: (id: string) => void;
  createCard: (data: iDataCard) => void;
  handleShowModal: () => void;
  isOpen: boolean
}

export const DashboardContext = createContext({} as iDashboardContext);

export const DashboardContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [cards, setCards] = useState<iDataCard[]>([]);

  const handleShowModal = () => {
    setIsOpen(!isOpen)
  }

  const getCards =  async () => {
    try {
      // I will use the same loading to display the skeletons just to simulate how all page would look.
      // Vou utilizar o mesmo loading em todos os skeletons apenas para simular como a página ficaria
      setLoading(true);
      await new Promise( resolve => setTimeout( resolve, 1500))
      // const res = await api.get('cards')
      // setCards(res.data);

      // While there is no backend - Enquanto não existe back-end vou usar localstorage
      const storagedCards = JSON.parse(localStorage.getItem('cards') || '[]');
      setCards(storagedCards);
    } catch (error) {
      console.error('Error while fetching cards:', error);
    } finally {
      setLoading(false);
    }
  };

  const createCard = (data: iDataCard) => {
    try {
      // setLoading(true);
      // await api.post('cards', data)

      // While there is no backend - Enquanto não existe back-end vou usar localstorage
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

  const removeCard = (id: string) => {
  
    try {
      const storagedCards = JSON.parse(localStorage.getItem('cards') || '[]');
      if (storagedCards) {
        const newCardList = storagedCards.filter((i: iDataCard) => i.id !== id);
        localStorage.setItem('cards', JSON.stringify(newCardList));
        setCards(newCardList);        
      }
    } catch (error) {
      console.error(error);
      
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
    <DashboardContext.Provider value={{ cards, loading, getCards, createCard, removeCard, isOpen, handleShowModal }}>
      {children}
    </DashboardContext.Provider>
  );
};

export const useDashboardContext = () => useContext(DashboardContext);
