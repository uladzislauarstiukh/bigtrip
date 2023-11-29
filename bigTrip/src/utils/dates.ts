export const getDateFormatMonthDay = (date: Date) => {
  const month = date.toLocaleString('default', {
    month: 'short'
  });
  const day = date.getDate();

  return {
    month,
    day
  };
};