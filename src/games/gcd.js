import readlineSync from 'readline-sync';
import { makeNumber, gcd } from '..';

const showBrainGcd = () => {
  console.log('Welcome to the Brain Games!\nFind the greatest common divisor of given numbers.\n');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n`);
  let count = 0;
  for (let i = 0; i < 3; i += 1) {
    const firstDivisor = makeNumber();
    const secondDivisor = makeNumber();
    console.log(`Question: ${firstDivisor} ${secondDivisor}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (gcd(firstDivisor, secondDivisor) === Number(userAnswer)) {
      console.log('Correct!');
      count += 1;
    } else if (gcd(firstDivisor, secondDivisor) !== userAnswer) {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${gcd(firstDivisor, secondDivisor)}".\nLet's try again, ${userName}!`);
    }
  }
  if (count === 3) {
    console.log(`Congratulations, ${userName}`);
  }
};
export default showBrainGcd;
