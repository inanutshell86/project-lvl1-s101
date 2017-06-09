import readlineSync from 'readline-sync';
import { isEven, makeNumber } from '..';

const showBrainEven = () => {
  console.log('Welcome to the Brain Games!\nAnswer "yes" if number even otherwise answer "no".\n');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n`);
  let count = 0;
  for (let i = 0; i < 3; i += 1) {
    const gameQuestion = makeNumber();
    console.log(`Question: ${gameQuestion}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (isEven(gameQuestion) === userAnswer) {
      console.log('Correct!');
      count += 1;
    } else if (isEven(gameQuestion) !== userAnswer) {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${isEven(gameQuestion)}".\nLet's try again, ${userName}!`);
    }
  }
  if (count === 3) {
    console.log(`Congratulations, ${userName}`);
  }
};
export default showBrainEven;