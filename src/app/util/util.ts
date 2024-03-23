export const getRandomNumber = (number: number):number => {
  let randomDecimal = Math.random();
  return Math.round(randomDecimal * number);
};
