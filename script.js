'use strict';

const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');
const score0 = document.querySelector('#score--0');
const name0 = document.querySelector('#name--0');
const name1 = document.querySelector('#name--1');
const score1 = document.querySelector('#score--1');
const currentScore0 = document.querySelector('#current--0');
const currentScore1 = document.querySelector('#current--1');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const btnNew = document.querySelector('.btn--new');
const dice = document.querySelector('.dice');

score0.textContent = 0;
score1.textContent = 0;
dice.classList.add('hidden');

let currentPlayer = 0;
let currentScore = 0;
let totaleScore = 0;
let playing = true;
let scores = [0, 0];

btnRoll.addEventListener('click', function () {
    if(playing){

        const secretDice = Math.trunc(Math.random() * 6 + 1);
      
        dice.classList.remove('hidden');
        dice.src = `img/dice-${secretDice}.png`;
      
        if (secretDice !== 1) {
          currentScore += secretDice;
          document.querySelector(`#current--${currentPlayer}`).textContent =
            currentScore;
        } else {
          currentScore = 0;
          document.querySelector(`#current--${currentPlayer}`).textContent = 0;
          currentPlayer = currentPlayer === 0 ? 1 : 0;
          player0.classList.toggle('player--active');
          player1.classList.toggle('player--active');
        }
    }
});
btnHold.addEventListener('click', function () {
    if(playing){

        scores[currentPlayer] += currentScore;
        document.querySelector(`#score--${currentPlayer}`).textContent =
          scores[currentPlayer];
      
        if (scores[currentPlayer] >= 20) {
          document.querySelector(`.player--${currentPlayer}`).classList.add('player--winner');
          document.querySelector(`.player--${currentPlayer}`).classList.remove('player--active');
          dice.classList.add('hidden');
          playing = false;
        } else{
      
            document.querySelector(`#current--${currentPlayer}`).textContent = 0;
            currentPlayer = currentPlayer === 0 ? 1 : 0;
            player0.classList.toggle('player--active');
            player1.classList.toggle('player--active');
            currentScore = 0;
        }
    }


  
});

btnNew.addEventListener('click', function () {
  document.querySelector('.player--0').classList.add('player--active');
  document.querySelector('.player--1').classList.remove('player--active');
  document.querySelector(`.player--${currentPlayer}`).classList.remove('player--winner');
  document.querySelector(`#current--${currentPlayer}`).textContent = 0;
  currentPlayer = 0;
  score0.textContent = 0;
  score1.textContent = 0;
currentPlayer = 0;
currentScore = 0;
totaleScore = 0;
playing = true;
  scores = [0, 0];
//scores[0] = 0;
//scores[1] = 0;
});
