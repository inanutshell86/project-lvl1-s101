import startGame from '../game-engine';
import makeNumber from '../make-number';

const desc = 'Answer "yes" if number prime otherwise answer "no"';

const min = 1;
const max = 100;

const isPrime = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) return false;
  }

  return num !== 1;
};

const getGame = () => {
  const num = makeNumber(min, max);
  const question = `${num}`;
  const solution = isPrime(num) ? 'yes' : 'no';
  return { question, solution };
};

export default () => startGame(desc, getGame);
