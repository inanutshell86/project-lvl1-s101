import readlineSync from 'readline-sync';
import { makeNumber, makeSign } from '..';

const showBrainCalc = () => {
  console.log('Welcome to the Brain Games!\nWhat is the result of the expression?\n');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n`);
  let count = 0;
  let correctAnswer = 0;
  for (let i = 0; i < 3; i += 1) {
    const firstArgument = makeNumber();
    const operand = makeSign();
    const secondArgument = makeNumber();
    const addArguments = (a, b) => a + b;
    const subArguments = (a, b) => a - b;
    const multiArguments = (a, b) => a * b;
    console.log(`Question: ${firstArgument} ${operand} ${secondArgument}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (operand === '+') {
      correctAnswer = addArguments(firstArgument, secondArgument);
    } else if (operand === '-') {
      correctAnswer = subArguments(firstArgument, secondArgument);
    } else if (operand === '*') {
      correctAnswer = multiArguments(firstArgument, secondArgument);
    }
    if (correctAnswer === Number(userAnswer)) {
      console.log('Correct!');
      count += 1;
    } else if (correctAnswer !== userAnswer) {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".\nLet's try again, ${userName}!`);
    }
  }
  if (count === 3) {
    console.log(`Congratulations, ${userName}`);
  }
};
export default showBrainCalc;
