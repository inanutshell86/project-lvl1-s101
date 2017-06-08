import readlineSync from 'readline-sync';
import randomstring from 'randomstring';

export const showBrainGames = () => {
  console.log('Welcome to the Brain Games!\n');
  const userName = readlineSync.question('May I have your name? ');
  const message = `Hello, ${userName}!\n`;
  console.log(message);
};
export const showBrainEven = () => {
  console.log('Welcome to the Brain Games!\nAnswer "yes" if number even otherwise answer "no".\n');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n`);
  let count = 0;
  for (let i = 0; i < 3; i += 1) {
    const gameQuestion = Math.floor(Math.random() * ((100 - 0) + 1));
    console.log(`Question: ${gameQuestion}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const isEven = (num) => {
      if (num % 2 === 0) {
        return 'yes';
      }
      return 'no';
    };
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
export const showBrainCalc = () => {
  console.log('Welcome to the Brain Games!\nWhat is the result of the expression?\n');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n`);
  let count = 0;
  let correctAnswer = 0;
  for (let i = 0; i < 3; i += 1) {
    const firstArgument = Math.floor(Math.random() * ((100 - 0) + 1));
    const makeSign = randomstring.generate({
      length: 1,
      charset: '+-*',
    });
    const secondArgument = Math.floor(Math.random() * ((100 - 0) + 1));
    const addArguments = (a, b) => a + b;
    const subArguments = (a, b) => a - b;
    const multiArguments = (a, b) => a * b;
    console.log(`Question: ${firstArgument} ${makeSign} ${secondArgument}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (makeSign === '+') {
      correctAnswer = addArguments(firstArgument, secondArgument);
    } else if (makeSign === '-') {
      correctAnswer = subArguments(firstArgument, secondArgument);
    } else if (makeSign === '*') {
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
