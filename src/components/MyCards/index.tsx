import { AiOutlineEye, AiOutlineEyeInvisible, AiOutlinePlus } from 'react-icons/ai';
import { StyledCards } from './style';
import { useEffect, useState } from 'react';
import Card from '../../pages/dashboard/components/Card';
import { useDashboardContext } from '../../contexts/DashboardContext';

const MyCards = () => {
  const [showPassword, setShowPassword] = useState(false);
  
  const { getCards, cards, handleShowModal } = useDashboardContext();
  

  useEffect(() => {
    getCards();
  }, []);

  return (
    <StyledCards>
      <div className="my-cards-header">
        <div>
          <div className="title-wrapper">
            <h3>My cards</h3>
            {cards.length > 0 && <span>{cards.length} cards registered </span>}
          </div>
          <button className='btn-show-password' onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? (
              <AiOutlineEyeInvisible size={24} />
            ) : (
              <AiOutlineEye size={24} />
            )}
          </button>
        </div>
        {cards.length >= 4 && <button className='btn-new-card' onClick={handleShowModal}><AiOutlinePlus size={16} />New card</button>}
        
      </div>

      <Card showPassword={showPassword} />
    </StyledCards>
  );
};

export default MyCards;
