import { StyledCard, StyledEmptyCard } from './style';
import { PatternFormat } from 'react-number-format';
import { StyledCardList } from '../../../../components/MyCards/style';
import { dateFormat } from '../../../../utils/DateFormat';
import MasterCard from '../../../../assets/images/MasterCard.svg';
import { useDashboardContext } from '../../../../contexts/DashboardContext';
import { iDataCard } from '../../../../types/Cards';
import FormNewCard from './Form';

const Card = ({ showPassword }: { showPassword: boolean }) => {
  const { cards } = useDashboardContext();



  return (
    <StyledCardList>

      <FormNewCard />

      {cards &&
        cards.length > 0 &&
        cards.map((item: iDataCard) => (
          <StyledCard key={item.id}>
            <div className="card-header">
              <span>{item.type}</span>
              <img
                src={MasterCard}
                width={47}
                height={47}
                alt="Imagem da bandeira do cartão de crédito"
              />
            </div>

            <div className="card-footer">
              <div className="user-info">
                <span>{item.userName}</span>
                <PatternFormat
                type='text'
                mask='_'

                value={item.password}
                displayType='text'
                patternChar='#'
                  format="#### #### #### ####"
                  renderText={(formattedValue) => {
                    return (
                      <span>
                        {showPassword ? formattedValue : '**** **** **** ****'}
                      </span>
                    );
                  }}
                ></PatternFormat>
              </div>
              <span>{showPassword ? dateFormat(item.validate) : '**/**'}</span>
            </div>
          </StyledCard>
        ))}
      <StyledEmptyCard>+</StyledEmptyCard>
    </StyledCardList>
  );
};

export default Card;
