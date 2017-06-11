import makeNumber from '../make-number';
import startGame from '../game-engine';

const desc = 'What number is missing in this progression?';

const min = 10;
const max = 70;
const length = 10;

const makeProgression = () => {
  const begin = makeNumber(min, max);
  const step = makeNumber(1, 10);
  const progression = [];
  progression[0] = begin;
  for (let i = 1; i < length; i += 1) {
    progression[i] = progression[i - 1] + step;
  }

  return progression;
};

const getGame = () => {
  const sequence = makeProgression();
  const missedIndex = Math.floor(Math.random() * sequence.length);
  const replacedElement = sequence.splice(missedIndex, 1, '..');
  const question = `${sequence.join(' ')}`;
  const solution = `${replacedElement.join('')}`;
  return { question, solution };
};

export default () => startGame(desc, getGame);
