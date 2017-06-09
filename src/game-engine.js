import readlineSync from 'readline-sync';

const roundsCount = 3;

const playRound = (getGame, count = 0) => {
  if (count === roundsCount) {
    return true;
  }

  const game = getGame();
  console.log(`Question: ${game.question}`);
  const answer = readlineSync.question('Your answer: ');
  if (answer === game.solution) {
    console.log('Correct!');
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${game.solution}'.`);
    return false;
  }

  return playRound(getGame, count + 1);
};

const startGame = (desc, getGame) => {
  console.log('Welcome to the Brain Games!');
  console.log(`${desc}\n`);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n`);
  if (playRound(getGame)) {
    console.log(`Congratulations, ${userName}!`);
  } else {
    console.log(`Let's try again, ${userName}!`);
  }
};
export default startGame;
