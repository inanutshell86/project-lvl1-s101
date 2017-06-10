import makeNumber from '../make-number';
import startGame from '../game-engine';

const desc = 'Find the greatest common divisor of given numbers.';

const min = 1;
const max = 100;

const gcd = (num1, num2) => {
  if (num2 === 0) {
    return num1;
  }
  return gcd(num2, num1 % num2);
};

const getGame = () => {
  const firstDivisor = makeNumber(min, max);
  const secondDivisor = makeNumber(min, max);
  const question = `${firstDivisor} ${secondDivisor}`;
  const solution = String(gcd(firstDivisor, secondDivisor));
  return { question, solution };
};

export default () => startGame(desc, getGame);
