export const randomValueFromArray = <T>(array: T[]): T => {
  return array[Math.floor(Math.random() * array.length)];
};
