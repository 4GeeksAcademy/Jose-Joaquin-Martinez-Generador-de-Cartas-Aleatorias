import "./style.css";

const CARDNUMBERS = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
const SUITS = ["heart", "diamond", "club", "spade"];

const getRandomNumber = () => {
  let randomCardNumber =
    CARDNUMBERS[Math.floor(Math.random() * CARDNUMBERS.length)];
  return randomCardNumber;
};

const getRandomSuit = () => {
  let randomSuit = SUITS[Math.floor(Math.random() * SUITS.length)];
  return randomSuit;
};

const generateRandomCard = () => {
  // getting the value Number ID and giving it the new number
  let cardNumber = document.getElementById("cardValue");
  cardNumber.innerHTML = getRandomNumber(CARDNUMBERS);

  let suit = getRandomSuit(SUITS);

  // Remove previously added classes
  document.getElementById("topLeftSuit").classList.remove(...SUITS);
  document.getElementById("bottomRightSuit").classList.remove(...SUITS);

  // Add selected class
  document.getElementById("topLeftSuit").classList.add(suit);
  document.getElementById("bottomRightSuit").classList.add(suit);
};

window.onload = generateRandomCard;

// adding a button to allow the user to pick random cards
let btnRandomCardPicker = document.getElementById("btnRandomCard");

btnRandomCardPicker.addEventListener("click", generateRandomCard);

// Call randomCardGenerator every 6 seconds
setInterval(generateRandomCard, 6000);

//button to reset back to normal setting
let btnClearChangesSize = document.getElementById("btnClear");
btnClearChangesSize.addEventListener("click", function() {
  document.getElementById("widthInput").value = "";
  document.getElementById("heightInput").value = "";
  document.getElementById("randomCard").style.width = "35%";
  document.getElementById("randomCard").style.height = "60%";
});

// Adding keypress event to change the width
document
  .getElementById("widthInput")
  .addEventListener("keypress", function(event) {
    // Verify if the pressed key is Enter
    if (event.key === "Enter") {
      let widthInput = parseInt(document.getElementById("widthInput").value);
      document.getElementById("randomCard").style.width = widthInput + "px";
    }
  });

// Adding Keypress event to change the height
document
  .getElementById("heightInput")
  .addEventListener("keypress", function(event) {
    // Verify if the pressed key is Enter
    if (event.key === "Enter") {
      let heightInput = parseInt(document.getElementById("heightInput").value);
      document.getElementById("randomCard").style.height = heightInput + "px";
    }
  });
