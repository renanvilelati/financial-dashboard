export const currentFormat = (money: string | number) => {
  return Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(Number(money));
};
