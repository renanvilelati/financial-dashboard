import { format, formatDistanceToNowStrict } from 'date-fns';

export const dateFormatTimeAgo = (date: Date | string) => {
  const formatedDate = formatDistanceToNowStrict(date, {
    addSuffix: true,
  });
  return formatedDate;
};

export const dateFormat = (date: Date | string) => {
  return format(date, 'MM/yy');
};
