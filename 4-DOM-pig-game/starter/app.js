/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
let scores, roundScore, activePlayer, active;
scores = [0, 0];
roundScore = 0;
activePlayer = 0;

// setter
document.querySelector(".dice").style.display = "none";

// set the values of the players to 0
document.getElementById("score-0").textContent = 0;
document.getElementById("score-1").textContent = 0;
document.getElementById("current-0").textContent = 0;
document.getElementById("current-1").textContent = 0;

// select the btn for the dice
document.querySelector(".btn-roll").addEventListener("click", () => {
  // 1. generate a random number
  let dice = Math.floor(Math.random() * 6) + 1;

  // 2. display the result
  let diceDOM = document.querySelector(".dice");
  diceDOM.style.display = "block";
  diceDOM.src = "dice-" + dice + ".png";

  //   3. update the value of the roundScore
  if (dice !== 0) {
    roundScore += dice;
    document.querySelector(".dice-" + activePlayer).textContent = roundScore;
  } else {
    activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
    roundScore = 0;
    document.getElementById("current-0").textContent = 0;
    document.getElementById("current-1").textContent = 0;

    document.querySelector(".player-0-panel").classList.toggle("active");
    document.querySelector(".player-1-panel").classList.toggle("active");

    document.querySelector(".dice").style.display = "none";
  }
});
