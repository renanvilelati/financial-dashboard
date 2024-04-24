import { StyledCard, StyledEmptyCard } from './style';
import { dataCard } from '../../../../mock/dashboard';
import { StyledCardList } from '../../../../components/MyCards/style';
import { dateFormat } from '../../../../utils/DateFormat';
import MasterCard from '../../../../assets/images/MasterCard.svg'

interface iDataCard {
  id?: string | number;
  type: string;
  userName: string;
  password: string;
  validate: string;
}

const Card = ({ showPassword }: { showPassword: boolean }) => {
  return (
    <StyledCardList>
      {dataCard &&
        dataCard.length > 0 &&
        dataCard.map((item: iDataCard) => (
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
                <span>
                  {showPassword ? item.password : '**** **** **** ****'}
                </span>
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
