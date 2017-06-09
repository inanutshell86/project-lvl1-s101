import { makeNumber, gcd } from '..';
import startGame from '../game-engine';

const desc = 'Find the greatest common divisor of given numbers.';

const min = 1;
const max = 100;

const getGame = () => {
  const firstDivisor = makeNumber(min, max);
  const secondDivisor = makeNumber(min, max);
  const question = `${firstDivisor} ${secondDivisor}`;
  const solution = String(gcd(firstDivisor, secondDivisor));
  return { question, solution };
};

export default () => startGame(desc, getGame);
