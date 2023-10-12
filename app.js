// save the total number of 2 players score
var totalScore = [0, 0];
// when a dice roll, save the current total score
var current = 0;
// 0 - is first player, 1 is second player
var activePlayer = 0;

//prepare for the start program
var score0 = document.getElementById("score0");
var score1 = document.getElementById("score1");
var current0 = document.getElementById("current0");
var current1 = document.getElementById("current1");
var diceDisplay = document.getElementById("dice");
diceDisplay.style.display = "None";

// reset the all variables
function init() {
  activePlayer = 0;
  score0.textContent = "0";
  score1.textContent = "0";
  current0.textContent = "0";
  current1.textContent = "0";
  diceDisplay.style.display = "None";
  current = 0;
  totalScore = [0, 0];
}
// when rolls a "1" on dice and press hold button, turn will be changed
function reset() {
  current = 0;
  document.getElementById("current" + activePlayer).textContent = "" + current;
  document
    .querySelector(".player" + activePlayer)
    .classList.toggle("active-bg");
  diceDisplay.style.display = "none";
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
  console.log("Idewhitei player : " + activePlayer + " bolloo");
  document
    .querySelector(".player" + activePlayer)
    .classList.toggle("active-bg");
}
// click the Roll button
document.getElementById("btn-roll").addEventListener("click", function () {
  //random number
  var randomNumber = Math.floor(Math.random() * 6) + 1;

  if (randomNumber !== 1) {
    //add dice number to VAR current
    current += randomNumber;
    //show the dice
    diceDisplay.style.display = "block";
    //change src code on image element in html
    diceDisplay.src = "dice" + randomNumber + ".jpg";
    // show dice number on total score for players
    document.getElementById("current" + activePlayer).textContent =
      "" + current;
  } else {
    console.log("-------------- 1 buuchlaa ---------------");
    reset();
  }
});

document.getElementById("btn-hold").addEventListener("click", function () {
  console.log("----------------HOLD----------------");
  //save total score for players
  totalScore[activePlayer] += current;
  //show total score
  document.getElementById("score" + activePlayer).textContent =
    "" + totalScore[activePlayer];
  //checking total score < 100 if yes continue no show win
  if (totalScore[activePlayer] < 100) {
    reset();
  } else {
    console.log("----------------win--------------");
    document.getElementById("score" + activePlayer).textContent = "Won!!!";
    document.querySelector(".player" + activePlayer).classList.add("win-bg");
    document.getElementById("btn-hold").style.display = "none";
    document.getElementById("btn-roll").style.display = "none";
  }
});
// start new game
document.querySelector(".item-reset").addEventListener("click", function () {
  console.log("------------- new game --------------- ");
  document.querySelector(".player" + activePlayer).classList.remove("win-bg");
  document.getElementById("btn-hold").style.display = "block";
  document.getElementById("btn-roll").style.display = "block";
  // same code as reset()
  // if (activePlayer === 1) {
  //   document
  //     .querySelector(".player" + activePlayer)
  //     .classList.remove("active-bg");
  //   document.querySelector(".player" + 0).classList.add("active-bg");
  // } else {
  //   document.querySelector(".player" + 0).classList.add("active-bg");
  // }
  reset();
  init();
});
