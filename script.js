console.log('hello world');

function highScore(highestScore) {
  document.querySelector('.highscore').textContent = highestScore;
}

function displayMessage(message) {
  document.querySelector('.message').textContent = message;
}

let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);
let score = 20;
let highestScore = 0;
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    displayMessage('No numbers!🙄');
  } else if (guess === secretNumber) {
    document.querySelector('.number').textContent = secretNumber;
    displayMessage('Correct Number! You won!😎');
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').style.width = '30rem';
    if (score > highestScore) {
      highestScore = score;
      highScore(highestScore);
    }
  } else if (guess !== secretNumber) {
    displayMessage(guess < secretNumber ? 'Too low!' : 'Too high!');
    if (score > 1) {
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You lost the game :(');
      document.querySelector('.score').textContent = '0';
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  console.log('the secrent number is', secretNumber);
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
