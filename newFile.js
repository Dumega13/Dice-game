// Roll дарах үед дурын тоо хэвлэх
// document.querySelector(".btn-roll").addEventListener("click", shooShid);
// function shooShid() {
//   console.log("shoo shidew");
// }
document.getElementById("btn-roll").addEventListener("click", function () {
  var randomNumber = Math.floor(Math.random() * 6) + 1;
  if (randomNumber !== 1) {
    current += randomNumber;
    console.log(current);

    diceDisplay.style.display = "block";
    diceDisplay.src = "dice" + randomNumber + ".jpg";
    var cur = document.querySelector("#current" + activePlayer);
    cur.textContent = "10";
    console.log("hi");
  } else {
    current1.textContent = "0";
    diceDisplay.style.display = "none";
    console.log("1 buuchlaa");
    current = 0;
    activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
    console.log("who is active now - " + activePlayer);
  }
});
