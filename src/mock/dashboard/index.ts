export interface iDataPendingPayments {
  id: number;
  name: string;
  type: string;
  icon: string;
  money: number;
}
export const dataPendingPayments: iDataPendingPayments[] = [
  {
    id: 1,
    name: 'Laundry Service',
    type: 'laundry',
    icon: 'laundryIcon',
    money: 720,
  },
  {
    id: 2,
    name: 'Veterinary Expenses',
    type: 'veterinary',
    icon: 'veterinaryIcon',
    money: 300,
  },
  {
    id: 3,
    name: 'Internet Bill',
    type: 'internet',
    icon: 'internetIcon',
    money: 140,
  },
  {
    id: 4,
    name: 'Medical Expenses',
    type: 'medical',
    icon: 'medicalIcon',
    money: 170,
  },
  {
    id: 5,
    name: 'Furniture Cleaning',
    type: 'furniture',
    icon: 'furnitureIcon',
    money: 270,
  },
];

interface idDataMyBlance {
  name: string;
  income: number;
  spend: number;
}

export const dataMyBlance: idDataMyBlance[] = [
  { name: 'Jan', income: 1000, spend: 3000 },
  { name: 'Feb', income: 5000, spend: 2500 },
  { name: 'Mar', income: 2000, spend: 4000 },
  { name: 'Apr', income: 3500, spend: 1500 },
  { name: 'May', income: 3000, spend: 3500 },
  { name: 'Jun', income: 4000, spend: 2000 },
  { name: 'Jul', income: 2500, spend: 4500 },
  { name: 'Aug', income: 4500, spend: 1000 },
  { name: 'Sep', income: 1500, spend: 3500 },
  { name: 'Oct', income: 3500, spend: 2000 },
  { name: 'Nov', income: 5000, spend: 3000 },
  { name: 'Dec', income: 2000, spend: 4000 },
];

interface iDataMonthlyExpenses {
  name: string;
  value: number;
  fill: string;
  stroke: string;
}

export const dataMonthlyExpenses: iDataMonthlyExpenses[] = [
  {
    name: 'Food',
    value: 900,
    fill: 'rgb(65 255 198 / 34%)',
    stroke: 'rgb(65, 255, 198)',
  },
  {
    name: 'Internet',
    value: 700,
    fill: 'rgb(255 233 54 / 20%)',
    stroke: 'rgb(255 237 94)',
  },
  {
    name: 'Advertising',
    value: 500,
    fill: 'rgb(87 43 173 / 19%)',
    stroke: 'rgb(160 111 255)',
  },
  {
    name: 'Insurence',
    value: 200,
    fill: 'rgb(248 86 64 / 47%)',
    stroke: 'rgb(255 103 82)',
  },
];

interface iDataCard {
  id: string | number;
  type: string;
  userName: string;
  password: string;
  validate: string;
}

export const dataCard: iDataCard[] = [
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
  },
];
