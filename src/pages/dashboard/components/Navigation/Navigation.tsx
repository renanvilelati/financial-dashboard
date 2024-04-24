'use client';
import { StyledNavigation, StyledPaymentItem } from './style';
import Divider from '../Divider';
import furnitureIcon from '../../../../assets/icons/furniture-icon.svg';
import laundryIcon from '../../../../assets/icons/laundry-icon.svg';
import internetIcon from '../../../../assets/icons/internet-icon.svg';
import medicalIcon from '../../../../assets/icons/medical-icon.svg';
import veterinaryIcon from '../../../../assets/icons/veterinary-icon.svg';
import { currentFormat } from '../../../../utils/currencyFormat';
import { dateFormatTimeAgo } from '../../../../utils/DateFormat';
import { dataPendingPayments, iDataPendingPayments } from '../../../../mock/dashboard';

const getIcon = (type: string) => {
  switch (type) {
    case 'laundry':
      return (
        <img
          src={laundryIcon}
          alt="Ícone da lavanderia"
          width={24}
          height={24}
        />
      );
    case 'veterinary':
      return (
        <img
          src={veterinaryIcon}
          alt="Ícone da Veterinária"
          width={24}
          height={24}
        />
      );
    case 'internet':
      return (
        <img
          src={internetIcon}
          alt="Ícone da Internet"
          width={24}
          height={24}
        />
      );
    case 'medical':
      return (
        <img
          src={medicalIcon}
          alt="Ícone de Medicina"
          width={24}
          height={24}
        />
      );
    case 'furniture':
      return (
        <img
          src={furnitureIcon}
          alt="Ícone da Mobilia"
          width={24}
          height={24}
        />
      );
    default:
      return <img src={''} alt="Ícone da padrao" width={24} height={24} />;
  }
};

interface iMockRecentTransactions {
  id: number;
  imgUrl: string;
  userName: string;
  hour: string;
  money: number;
  isPositive: boolean;
}

const mockRecentTransations: iMockRecentTransactions[] = [
  {
    id: 1,
    imgUrl: './user-2.png',
    userName: 'Leslie Alexander',
    hour: '2024-04-20T21:00:59+0000',
    money: 300,
    isPositive: true,
  },
  {
    id: 2,
    imgUrl: './user-3.png',
    userName: 'Jenny Wilson',
    hour: '2024-04-20T20:00:59+0000',
    money: 500,
    isPositive: false,
  },
  {
    id: 3,
    imgUrl: './user-4.png',
    userName: 'Jacob Jones',
    hour: '2024-04-20T17:00:59+0000',
    money: 750,
    isPositive: true,
  },
  {
    id: 4,
    imgUrl: './user-5.png',
    userName: 'Jerome Bell',
    hour: '2024-04-20T10:00:59+0000',
    money: 1000,
    isPositive: false,
  },
];

const RecentTransactions = () => {
  return (
    <div className="recent-transictions">
      <div className="header">
        <h3>Recent Transactions</h3>
        <a href="#">See all</a>
      </div>
      {mockRecentTransations.map((item: iMockRecentTransactions) => (
        <div key={item.id}>
          <div className="user-wrapper">
            <img src={item.imgUrl} width={48} alt="Imagem do usuário logado" />
            <div className="user-info">
              <span className="name">{item.userName}</span>
              <span className="hour">{dateFormatTimeAgo(item.hour)!}</span>
            </div>
            {item.isPositive ? (
              <span className="money positive">
                + {currentFormat(item.money)}
              </span>
            ) : (
              <span className="money negative">
                - {currentFormat(item.money)}
              </span>
            )}
          </div>
          <Divider />
        </div>
      ))}
    </div>
  );
};

const Navigation = () => {
  return (
    <StyledNavigation className="navigation">
      <div className="pending-payments">
        <div className="header">
          <h3>Pending Payments</h3>
          <a href="#">See all</a>
        </div>
        <ul className="payment-list">
          {dataPendingPayments.map((item: iDataPendingPayments) => (
            <StyledPaymentItem key={item.id} type={item.type}>
              <div className="icon-wrapper">{getIcon(item.type)}</div>
              <span>{item.name}</span>
            </StyledPaymentItem>
          ))}
        </ul>
      </div>
      <Divider />
      <RecentTransactions />
    </StyledNavigation>
  );
};

export default Navigation;
