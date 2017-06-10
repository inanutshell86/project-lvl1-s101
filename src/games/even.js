import startGame from '../game-engine';
import makeNumber from '../make-number';

const desc = 'Answer "yes" if number even otherwise answer "no"';

const min = 1;
const max = 100;

const isEven = (num) => {
  if (num % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

const getGame = () => {
  const num = makeNumber(min, max);
  const question = `${num}`;
  const solution = isEven(num);
  return { question, solution };
};
export default () => startGame(desc, getGame);
