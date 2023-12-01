'use strict';

// Functions

function displayText(where, what) {
  document.querySelector(where).textContent = what;
}

function itemBackColor(where, what) {
  document.querySelector(where).style.backgroundColor = what;
}

function itemWidth(where, what) {
  document.querySelector(where).style.width = what;
}

function valueTextBox(where, what) {
  document.querySelector(where).value = what;
}

function disableButton(button, bool) {
  document.querySelector(button).disabled = bool;
}

function disableInput(field, bool) {
  document.getElementById(field).disabled = bool;
}

// Output

let secretNumber = Math.trunc(Math.random() * 20) + 1;
displayText('.number', '?');
let score = 10;
let highscore = 0;
displayText('.score', score);

document.querySelector('#guess').addEventListener('keydown', function (event) {
  if (event.key === 'Enter') {
    event.preventDefault();
    const guess = Number(document.querySelector('#guess').value);

    if (!guess) {
      displayText('.message', '🗿 No Guesses? 🗿');
    } else if (guess === secretNumber) {
      score++;
      displayText('.message', '🗿 Correct Number 🗿');
      itemBackColor('body', 'green');
      itemWidth('.number', '30rem');
      displayText('.number', secretNumber);
      disableInput('guess', true);
      disableButton('#check', true);
      displayText('.score', score);
      if (score > highscore) {
        highscore = score;
        displayText('.highscore', highscore);
      }
    } else if (guess > secretNumber) {
      if (score > 1) {
        displayText('.message', '🗿 Too High 🗿');
        score--;
        displayText('.score', score);
      } else {
        displayText('.message', '🗿 Bruh 🗿');
        displayText('.number', secretNumber);
        itemBackColor('body', 'orange');
        score = 0;
        displayText('.score', score);
        disableInput('guess', true);
        disableButton('#check', true);
      }
    } else if (guess < secretNumber) {
      if (score > 1) {
        displayText('.message', '🗿 Too Low 🗿');
        score--;
        displayText('.score', score);
      } else {
        displayText('.message', '🗿 Bruh 🗿');
        displayText('.number', secretNumber);
        itemBackColor('body', 'orange');
        score = 0;
        displayText('.score', score);
        disableInput('guess', true);
        disableButton('#check', true);
      }
    }
  }
});

document.getElementById('check').addEventListener('click', function () {
  const guess = Number(document.querySelector('#guess').value);

  if (!guess) {
    displayText('.message', '🗿 No Guesses? 🗿');
  } else if (guess === secretNumber) {
    score++;
    displayText('.message', '🗿 Correct Number 🗿');
    itemBackColor('body', 'green');
    itemWidth('.number', '30rem');
    displayText('.number', secretNumber);
    disableInput('guess', true);
    disableButton('#check', true);
    displayText('.score', score);
    if (score > highscore) {
      highscore = score;
      displayText('.highscore', highscore);
    }
  } else if (guess > secretNumber) {
    if (score > 1) {
      displayText('.message', '🗿 Too High 🗿');
      score--;
      displayText('.score', score);
    } else {
      displayText('.message', '🗿 Bruh 🗿');
      displayText('.number', secretNumber);
      itemBackColor('body', 'orange');
      score = 0;
      displayText('.score', score);
      disableInput('guess', true);
      disableButton('#check', true);
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      displayText('.message', '🗿 Too Low 🗿');
      score--;
      displayText('.score', score);
    } else {
      displayText('.message', '🗿 Bruh 🗿');
      displayText('.number', secretNumber);
      itemBackColor('body', 'orange');
      score = 0;
      displayText('.score', score);
      disableInput('guess', true);
      disableButton('#check', true);
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 10;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayText('.message', '🗿 Guess again 🗿');
  displayText('.score', score);
  valueTextBox('#guess', '');
  itemBackColor('body', '#333');
  itemWidth('.number', '15rem');
  displayText('.number', '?');
  disableInput('guess', false);
  disableButton('#check', false);
});
