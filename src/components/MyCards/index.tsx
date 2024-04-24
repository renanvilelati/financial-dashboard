import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { StyledCards } from './style';
import { useEffect, useState } from 'react';
import Card from '../../pages/dashboard/components/Card';
import { useDashboardContext } from '../../contexts/DashboardContext';

const MyCards = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { getCards, cards } = useDashboardContext();

  useEffect(() => {
    getCards();
  }, []);

  return (
    <StyledCards>
      <div className="my-cards-header">
        <div className="title-wrapper">
          <h3>My cards</h3>
          {
            cards.length > 0 && (
              <span>{cards.length} cards registered </span>
            )
          }
        </div>
        <button onClick={() => setShowPassword(!showPassword)}>
          {showPassword ? (
            <AiOutlineEyeInvisible size={24} />
          ) : (
            <AiOutlineEye size={24} />
          )}
        </button>
      </div>

      <Card showPassword={showPassword} />
    </StyledCards>
  );
};

export default MyCards;
