// User should be able to start a new game.

// Clicking a card should reveal what’s underneath it.
// The game should keep track and display the number of
// times cards have been turned over.

// Users should only be able to see at most two cards at a time.

// Clicking on two matching cards should be a “match”
// — those cards should stay face up. (Make sure this works only
//   if you click on two different cards — clicking the same card
//   twice shouldn’t count as a match!)

// When clicking two cards that are not a match, they should stay
// turned over for at least 1 second before they flip over again

// Store the lowest-scoring game in local storage,
// so that players can see a record of the best game played.

const cards = document.getElementsByClassName("flip-card-front");
let firstCard = null;
let secondCard = null;
let flipCount = 0;

for (let card of cards) {
  card.addEventListener("click", function(event) {
    const selectedCard = event.target.parentElement;
    const selectedCardImage = event.target.nextElementSibling.children[0].src;

    if (selectedCard.style.transform === "rotateY(180deg)") {
      return;
    }

    selectedCard.style.transform = "rotateY(180deg)";

    console.dir(selectedCard);
  });
}

// document.addEventListener("DOMContentLoaded", function() {
//   const cards = document.querySelectorAll(".game-card");
//   let numCards = cards.length;
//   let card1 = null;
//   let card2 = null;
//   let cardsFlipped = 0;
//   let currentScore = 0;
//   let lowScore = localStorage.getItem("low-score");

//   if (lowScore) {
//     document.getElementById("best-score").innerText = lowScore;
//   }

//   for (let card of cards) {
//     card.addEventListener("click", handleCardClick);
//   }

//   let startBtn = document.getElementById("start-button");
//   startBtn.addEventListener("click", startGame);

//   function handleCardClick(e) {
//     if (!e.target.classList.contains("front")) return;

//     let currentCard = e.target.parentElement;

//     if (!card1 || !card2) {
//       if (!currentCard.classList.contains("flipped")) {
//         setScore(currentScore + 1);
//       }
//       currentCard.classList.add("flipped");
//       card1 = card1 || currentCard;
//       card2 = currentCard === card1 ? null : currentCard;
//     }

//     if (card1 && card2) {
//       let gif1 = card1.children[1].children[0].src;
//       let gif2 = card2.children[1].children[0].src;

//       if (gif1 === gif2) {
//         cardsFlipped += 2;
//         card1.removeEventListener("click", handleCardClick);
//         card2.removeEventListener("click", handleCardClick);
//         card1 = null;
//         card2 = null;
//       } else {
//         setTimeout(function() {
//           card1.classList.remove("flipped");
//           card2.classList.remove("flipped");
//           card1 = null;
//           card2 = null;
//         }, 1000);
//       }
//     }

//     if (cardsFlipped === numCards) endGame();
//   }

//   function startGame() {
//     setScore(0);
//     start.classList.add("playing");
//     let indices = [];
//     for (let i = 1; i <= numCards / 2; i++) {
//       indices.push(i.toString());
//     }
//     let pairs = shuffle(indices.concat(indices));

//     for (let i = 0; i < cards.length; i++) {
//       let path = "gifs/" + pairs[i] + ".gif";
//       cards[i].children[1].children[0].src = path;
//     }
//   }

//   function shuffle(array) {
//     let arrayCopy = array.slice();
//     for (let idx1 = arrayCopy.length - 1; idx1 > 0; idx1--) {
//       // generate a random index between 0 and idx1 (inclusive)
//       let idx2 = Math.floor(Math.random() * (idx1 + 1));

//       // swap elements at idx1 and idx2
//       let temp = arrayCopy[idx1];
//       arrayCopy[idx1] = arrayCopy[idx2];
//       arrayCopy[idx2] = temp;
//     }
//     return arrayCopy;
//   }

//   function setScore(newScore) {
//     currentScore = newScore;
//     document.getElementById("current-score").innerText = currentScore;
//   }

//   function endGame() {
//     let end = document.getElementById("end");
//     let scoreHeader = end.children[1];
//     scoreHeader.innerText = "Your score: " + currentScore;
//     let lowScore = +localStorage.getItem("low-score") || Infinity;
//     if (currentScore < lowScore) {
//       scoreHeader.innerText += " - NEW BEST SCORE!!";
//       localStorage.setItem("low-score", currentScore);
//     }
//     document.getElementById("end").classList.add("game-over");
//   }
// });
