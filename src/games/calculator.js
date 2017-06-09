import { makeNumber, makeSign } from '..';
import startGame from '../game-engine';

const desc = 'What is the result of the expression?';

const min = 1;
const max = 100;

const calc = (a, b, op) => {
  switch (op) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    default:
      return NaN;
  }
};

const getGame = () => {
  const firstArgument = makeNumber(min, max);
  const secondArgument = makeNumber(min, max);
  const operand = makeSign();
  const question = `${firstArgument} ${operand} ${secondArgument}`;
  const solution = String(calc(firstArgument, secondArgument, operand));
  return { question, solution };
};

export default () => startGame(desc, getGame);
