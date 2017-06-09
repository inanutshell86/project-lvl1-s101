import randomstring from 'randomstring';

export const isEven = (num) => {
  if (num % 2 === 0) {
    return 'yes';
  }
  return 'no';
};
export const makeNumber = () => Math.floor(Math.random() * ((100 - 0) + 1));
export const makeSign = () => randomstring.generate({
  length: 1,
  charset: '+-*',
});
export const gcd = (num1, num2) => {
  if (num2 === 0) {
    return num1;
  }
  return gcd(num2, num1 % num2);
};
