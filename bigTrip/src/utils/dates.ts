const getDateFormatMonthDay = (date: Date) => {
  const month = date.toLocaleString('default', {
    month: 'short'
  });
  const day = date.getDate();

  return {
    month,
    day
  };
};

const getDateDiffInDHM = (startDate: Date, endDate: Date) => {
  const diffMs = Math.abs(endDate.getTime() - startDate.getTime());
  const totalMinutes = Math.floor(diffMs / (1000 * 60));
  const days = Math.floor(totalMinutes / (24 * 60));
  const hours = Math.floor((totalMinutes - (days * 24 * 60)) / 60);
  const minutes = totalMinutes - (days * 24 * 60) - (hours * 60);
  return { days, hours, minutes };
};

export { getDateFormatMonthDay, getDateDiffInDHM };