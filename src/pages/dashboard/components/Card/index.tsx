import { StyledCard, StyledEmptyCard } from './style';
import { PatternFormat } from 'react-number-format';
import { StyledCardList } from '../../../../components/MyCards/style';
import { dateFormat } from '../../../../utils/DateFormat';
import MasterCard from '../../../../assets/images/MasterCard.svg';
import { iDataCard } from '../../../../types/Cards';
import FormNewCard from './Form';
import Modal from '../../../../components/Modal';
import SkeletonCard from '../../../../components/Skeleton/components/SkeletonCard';
import { useDashboardContext } from '../../../../hooks/useDashboardContext';

const Card = ({ showPassword }: { showPassword: boolean }) => {
  const { cards, isOpen, loading, handleShowModal } = useDashboardContext();

  return (
    <StyledCardList>

      {loading
        ? [...Array(2).keys()].map((i, index) => (
            <SkeletonCard key={index} width="288px" height="179px" />
          ))
        : cards &&
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
                    type="text"
                    mask="_"
                    value={item.password}
                    displayType="text"
                    patternChar="#"
                    format="#### #### #### ####"
                    renderText={(formattedValue) => {
                      return (
                        <span>
                          {showPassword
                            ? formattedValue
                            : '**** **** **** ****'}
                        </span>
                      );
                    }}
                  ></PatternFormat>
                </div>
                <span>
                  {showPassword ? dateFormat(item.validate) : '**/**'}
                </span>
              </div>
            </StyledCard>
          ))}

      {cards.length < 4 && !loading && (
        <StyledEmptyCard onClick={handleShowModal}>+</StyledEmptyCard>
      )}

      <Modal isOpen={isOpen} closeModal={handleShowModal}>
        <FormNewCard closeModal={handleShowModal} />
      </Modal>
    </StyledCardList>
  );
};

export default Card;
