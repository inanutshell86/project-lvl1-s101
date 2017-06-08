import readlineSync from 'readline-sync';

const showMessage = () => {
  const userName = readlineSync.question('May I have your name? ');
  const message = `Hello, ${userName}!\n`;
  console.log(message);
  let count = 0;
  for (let i = 0; i < 3; i += 1) {
    const randomNumber = Math.floor(Math.random() * ((100 - 0) + 1));
    const userQuestion = `Question: ${randomNumber}`;
    console.log(userQuestion);
    const userAnswer = readlineSync.question('Your answer: ');
    if (randomNumber % 2 === 0 && userAnswer === 'yes') {
      console.log('Correct!');
      count += 1;
    } else if (randomNumber % 2 !== 0 && userAnswer === 'no') {
      console.log('Correct!');
      count += 1;
    } else if (randomNumber % 2 !== 0 && userAnswer === 'yes') {
      console.log(`"yes" is wrong answer ;(. Correct answer was "no".\nLet's try again, ${userName}!`);
    } else if (randomNumber % 2 !== 0 && userAnswer === 'no') {
      console.log(`"no" is wrong answer ;(. Correct answer was "yes".\nLet's try again, ${userName}!`);
    }
  }
  if (count === 3) {
    console.log(`Congratulations, ${userName}`);
  }
};
export default showMessage;
