/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
let scores, roundScore, activePlayer, active, playTheGame;

function init() {
  scores = [0, 0];
  roundScore = 0;
  activePlayer = 0;
  playTheGame = true;
  // setter
  document.querySelector(".dice").style.display = "none";

  // set the values of the players to 0
  document.getElementById("score-0").textContent = "0";
  document.getElementById("score-1").textContent = "0";
  document.getElementById("current-0").textContent = "0";
  document.getElementById("current-1").textContent = "0";
}
init();

// select the btn for the dice
document.querySelector(".btn-roll").addEventListener("click", () => {
  if (playTheGame) {
    // 1. generate a random number
    let dice = Math.floor(Math.random() * 6) + 1;

    // 2. display the result
    let diceDOM = document.querySelector(".dice");
    diceDOM.style.display = "block";
    diceDOM.src = "dice-" + dice + ".png";

    //   3. update the value of the roundScor†e
    if (dice !== 0) {
      roundScore += dice;
      document.querySelector(
        "#current-" + activePlayer
      ).textContent = roundScore;
    } else {
      // next player
      nextPlayer();
    }
  }
});

document.querySelector(".btn-hold").addEventListener("click", () => {
  if (playTheGame) {
    //  add current score to global score
    scores[activePlayer] += roundScore;
    document.querySelector("#score-" + activePlayer).textContent =
      scores[activePlayer];

    // check if the player won the game
    if (scores[activePlayer] >= 20) {
      document.querySelector("#name-" + activePlayer).textContent = "Winner";
      document.querySelector(".dice").style.display = "none";
      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.add("winner");
      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.remove("active");
      playTheGame = false;
    } else {
      nextPlayer();
    }
  }
});

function nextPlayer() {
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
  roundScore = 0;
  document.getElementById("current-0").textContent = 0;
  document.getElementById("current-1").textContent = 0;

  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");

  document.querySelector(".dice").style.display = "none";
  document.querySelector("#name-0").textContent = "Player 1";
  document.querySelector("#name-1").textContent = "Player 2";
  document.querySelector(".player-0-panel").classList.remove("winner");
  document.querySelector(".player-1-panel").classList.remove("winner");
  // there is no active class anywhere
  document.querySelector(".player-0-panel").classList.remove("active");
  document.querySelector(".player-1-panel").classList.remove("active");

  //  then we add the active player again
  document.querySelector(".player-0-panel").classList.add("active");
}

// when we pass the function to it , we dont need to use the ()
// because it gets called immediately and this is a big NO
// we need it to be called only when when the function is called ot gets clicked on
document.querySelector(".btn-new").addEventListener("click", init);

// state var ? is simply a var that tells a condition of system
