import startGame from '../game-engine';
import makeNumber from '../make-number';

const description = 'Answer "yes" if number prime otherwise answer "no"';

const min = 1;
const max = 100;

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }

  for (let i = 2; i < num / 2; i += 1) {
    if (num % i === 0) return false;
  }

  return true;
};

const getGame = () => {
  const num = makeNumber(min, max);
  const question = `${num}`;
  const solution = isPrime(num) ? 'yes' : 'no';
  return { question, solution };
};

export default () => startGame(description, getGame);
