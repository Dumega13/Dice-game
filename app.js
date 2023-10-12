var totalScore = [0, 0];
var current = 0;

//who is turning now
var activePlayer = 0;

document.querySelector("#score0").textContent = "0";
document.querySelector("#score1").textContent = "0";
document.querySelector("#current0").textContent = "0";
document.querySelector("#current1").textContent = "0";
var diceDisplay = document.getElementById("dice");
diceDisplay.style.display = "None";
//Програм эхлэхэд бэлдэх
function init() {
  activePlayer = 0;
  document.querySelector("#score0").textContent = "0";
  document.querySelector("#score1").textContent = "0";
  document.querySelector("#current0").textContent = "0";
  document.querySelector("#current1").textContent = "0";
  diceDisplay.style.display = "None";
  current = 0;
  totalScore = [0, 0];
}

// Roll дарах үед дурын тоо хэвлэх

document.getElementById("btn-roll").addEventListener("click", function () {
  var randomNumber = Math.floor(Math.random() * 6) + 1;
  console.log("Random number - " + randomNumber);

  if (randomNumber !== 1) {
    current += randomNumber;
    diceDisplay.style.display = "block";
    diceDisplay.src = "dice" + randomNumber + ".jpg";
    document.querySelector("#current" + activePlayer).textContent =
      "" + current;
  } else {
    console.log("-------------- 1 buuchlaa ---------------");
    current = 0;
    document.querySelector("#current" + activePlayer).textContent =
      "" + current;
    document
      .querySelector(".player" + activePlayer)
      .classList.toggle("active-bg");
    diceDisplay.style.display = "none";
    activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
    console.log("Idewhitei player : " + activePlayer + " bolloo");
    document
      .querySelector(".player" + activePlayer)
      .classList.toggle("active-bg");
    console.log(
      "classlist : " +
        document.querySelector(".player" + activePlayer).classList
    );
  }
});

document.getElementById("btn-hold").addEventListener("click", function () {
  console.log("----------------HOLD----------------");
  document
    .querySelector(".player" + activePlayer)
    .classList.toggle("active-bg");
  console.log("current : " + current);
  totalScore[activePlayer] += current;
  console.log(
    "Idewhitei player : " + activePlayer + " onoo : " + totalScore[activePlayer]
  );
  document.querySelector("#score" + activePlayer).textContent =
    "" + totalScore[activePlayer];
  if (totalScore[activePlayer] < 10) {
    current = 0;
    document.querySelector("#current" + activePlayer).textContent =
      "" + current;
    diceDisplay.style.display = "none";
    activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
    console.log("Idewhitei player : " + activePlayer + " bolloo");
    console.log(
      "Idewhitei player : " +
        activePlayer +
        " onoo : " +
        totalScore[activePlayer]
    );
    document
      .querySelector(".player" + activePlayer)
      .classList.toggle("active-bg");
  } else {
    console.log("----------------win--------------");
    document.querySelector("#score" + activePlayer).textContent = "Won!!!";
    document.querySelector(".player" + activePlayer).classList.add("win-bg");
    document.getElementById("btn-hold").style.display = "none";
    document.getElementById("btn-roll").style.display = "none";
    console.log("active P:" + activePlayer);
    console.log(
      "bg :" + document.querySelector(".player" + activePlayer).classList
    );
  }
});

document.querySelector(".item-reset").addEventListener("click", function () {
  document.querySelector(".player" + activePlayer).classList.remove("win-bg");
  document.getElementById("btn-hold").style.display = "block";
  document.getElementById("btn-roll").style.display = "block";
  if (activePlayer === 1) {
    document
      .querySelector(".player" + activePlayer)
      .classList.remove("active-bg");
    document.querySelector(".player" + 0).classList.add("active-bg");
  } else {
    document.querySelector(".player" + 0).classList.add("active-bg");
  }
  init();
  console.log("active P:" + activePlayer);
  console.log(
    "bg :" + document.querySelector(".player" + activePlayer).classList
  );
});
