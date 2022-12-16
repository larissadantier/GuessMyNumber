'use strict';

let secretNumber = Math.trunc(Math.random()*20) + 1;
let score = 20;
let highscore = 0;

function displayText(selector, message) {
  document.querySelector(selector).textContent = message;
}

function displayValue(selector, message) {
  document.querySelector(selector).value = message;
}

function checkHighscore(score) {
  if(score > highscore) highscore = score

  document.querySelector('.highscore').textContent = highscore;
}

function compareGuessAndSecretNumber(guess, secretNumber) {
  if(guess === secretNumber) {
    displayText('.message', 'Correct number!')
    score++

    displayText('.number', secretNumber);

    displayText('.score', score);

    document.querySelector('body').style.backgroundColor = '#60b347'

    checkHighscore(score) 
  }

  if(guess !== secretNumber) {
    displayText('.message', guess > secretNumber ? 'Too high!' : 'Too low!')
    score--
    displayText('.score', score);

    document.querySelector('body').style.backgroundColor = '#e63946'
  }

  endGame()
}

function resetGame() { 
  score = 20
  secretNumber = Math.trunc(Math.random()*20) + 1;

  displayText('.message', 'Start guessing...')

  document.querySelector('body').style.backgroundColor = '#222'

  displayValue('.guess', 1)
  displayText('.number', '?');
  displayText('.score', score);
}

function endGame() {
  if(score === 0) {
    displayText('.message', 'You lost the game, generating new number! :(')

    displayText('.number', secretNumber)

    setTimeout(() => {
      resetGame()
    }, 3000)
  }
}

document.querySelector('.check').addEventListener('click', 
function () {
  const guess = Number(document.querySelector('.guess').value)

  if(!guess) {
    displayText('.message', 'No number')
    return
  }

  compareGuessAndSecretNumber(guess, secretNumber)
})

document.querySelector('.again').addEventListener('click', 
function () {
  resetGame()
})



