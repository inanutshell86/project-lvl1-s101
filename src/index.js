import readlineSync from 'readline-sync';

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
