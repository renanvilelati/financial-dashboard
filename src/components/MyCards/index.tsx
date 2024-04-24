'use client';
import { AiOutlineEye, AiOutlineEyeInvisible} from 'react-icons/ai';
import { StyledCards } from './style';
import { useState } from 'react';
import Card from '../../pages/dashboard/components/Card';

const MyCards = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <StyledCards>
      <div className="my-cards-header">
        <h3>My cards</h3>
        <button onClick={() => setShowPassword(!showPassword)}>
          {showPassword ? (
            <AiOutlineEyeInvisible
              size={20}              
            />
          ) : (
            <AiOutlineEye
              size={20}
            />
          )}
        </button>
      </div>

      <Card showPassword={showPassword} />
    </StyledCards>
  );
};

export default MyCards;
