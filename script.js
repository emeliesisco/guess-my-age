'use strict';
/*
console.log(document.querySelector('h1').textContent);
document.querySelector('h1').textContent = 'guessed wrong';
console.log(document.querySelector('h1').textContent);

document.querySelector('.message').textContent = `correct score`;
document.querySelector('.check').textContent = 'Check again';

document.querySelector('.guess').value = '12';
*/
let secreteNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //when theres no input
  if (!guess) {
    document.querySelector('.message').textContent = `No Score`;
    score--;

    //when player wins
  } else if (guess === secreteNumber) {
    document.querySelector('.message').textContent = `Correct Score`;
    document.querySelector('.number').textContent = secreteNumber;

    document.querySelector('body').style.backgroundColor = 'blue';
    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    //when guess is too high
  } else if (guess > secreteNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too High';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game';
      document.querySelector('.score').textContent = 0;
    }

    //when guess is to low
  } else if (guess < secreteNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = `Too Low`;
      score--;
      document.querySelector('.score').textConetnt = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game';
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secreteNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.message').textContent = 'Start Guessing...';

  document.querySelector('.score').textContent = score;

  document.querySelector('.number').textContent = '?';

  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';

  document.querySelector('.number').style.width = '15rem';
});
