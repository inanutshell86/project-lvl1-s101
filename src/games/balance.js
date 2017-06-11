import makeNumber from '../make-number';
import startGame from '../game-engine';

const desc = 'Balance the given number.';

const min = 100;
const max = 10000;
const maxValue = nums => Math.max(...nums);
const minValue = nums => Math.min(...nums);

const makeBalance = (num) => {
  const str = String(num);
  const sequence = [];
  let i = 0;
  while (i < str.length) {
    sequence[i] = +str[i];
    i += 1;
  }
  let maxDigit = maxValue(sequence);
  let minDigit = minValue(sequence);
  while ((maxDigit - minDigit) > 1) {
    sequence[0] += 1;
    sequence[sequence.length - 1] -= 1;
    sequence.sort((a, b) => a - b);
    maxDigit = maxValue(sequence);
    minDigit = minValue(sequence);
  }
  return sequence.join('');
};

const getGame = () => {
  const num = makeNumber(min, max);
  const question = `${num}`;
  const solution = makeBalance(num);
  return { question, solution };
};

export default () => startGame(desc, getGame);
