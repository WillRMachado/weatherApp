export const convertTimestampToString = (timestamp: number) => {
  const day = new Date(0);

  day.getFullYear();
  day.getMonth() + 1;
  day.getDate();
  day.getHours();
  day.getMinutes();
  day.getSeconds();

  return 'yeah';
};
