//   TODOS:
// - Display images randomly on board
// - Shuffle images when starting new game
// - Styling

const cards = document.getElementsByClassName("flip-card-front");
const flipCountSpan = document.getElementById("flipCount");
const lowScoreSpan = document.getElementById("lowScore");
const newGameButton = document.getElementById("new");

newGame();

for (let card of cards) {
  card.addEventListener("click", function(event) {
    if (!flipping) {
      const selectedCard = event.target.parentElement;

      if (selectedCard.style.transform === "rotateY(180deg)") {
        return;
      }

      flipCount += 1;
      flipCountSpan.innerText = flipCount;
      selectedCard.style.transform = "rotateY(180deg)";

      if (!cardOne) {
        cardOne = selectedCard;
      } else if (!cardTwo) {
        cardTwo = selectedCard;
        if (
          cardOne.lastElementChild.children[0].src ===
          cardTwo.lastElementChild.children[0].src
        ) {
          matches += 2;
          cardOne = null;
          cardTwo = null;
          if (matches === cards.length) {
            flipping = true;
            if (!lowScore || lowScore > flipCount) {
              localStorage.setItem("lowScore", flipCount);
            }
            setTimeout(function() {
              alert("GAME OVER");
              flipping = false;
              newGame();
            }, 500);
          }
        } else {
          flipping = true;
          setTimeout(function() {
            cardOne.style.transform = "";
            cardTwo.style.transform = "";
            cardOne = null;
            cardTwo = null;
            flipping = false;
          }, 1000);
        }
      }
    }
  });
}

newGameButton.addEventListener("click", newGame);

function newGame() {
  lowScore = localStorage.getItem("lowScore");
  flipping = false;
  cardOne = null;
  cardTwo = null;
  flipCount = 0;
  matches = 0;

  flipCountSpan.innerText = flipCount;
  lowScoreSpan.innerText = lowScore;

  for (let card of cards) {
    card.parentElement.style.transform = "";
  }
}
