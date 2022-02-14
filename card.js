/** @format */

// An ‘in shuffle’ is a perfect riffle shuffle on a standard deck of 52 playing cards - that just means a shuffle by splitting the deck in half, then interleaving cards, starting with the top half. Can you write a quick program to solve the following?

// What is the position of the first card after the 7th shuffle?
// How many times must you perform the shuffle so that the top card becomes the bottom card?
// When do the first and last cards in the deck touch?
// Finally, about how much time did you spend on this problem?

function riffleShuffle(cardDeck) {
  let topHalf = cardDeck.slice(0, 26);
  let bottomHalf = cardDeck.slice(26);

  let shuffleCount = 27; // it needs only 26 shuffles to solve all the problem

  for (let i = 0; i < shuffleCount; i++) {
    let shuffleDeck = [];
    console.log(`Shuffle ${i + 1}`);

    for (let j = 0; j < 26; j++) {
      // 26 times
      shuffleDeck.push(bottomHalf[j]);
      shuffleDeck.push(topHalf[j]);
    }
    bottomHalf = shuffleDeck.slice(26);
    topHalf = shuffleDeck.slice(0, 26);
    // console.log(shuffleDeck);

    if (i === 6) {
      // 7th shuffle index is 6 and counts the positon the 7th card
      for (let i = 0; i < shuffleDeck.length; i++) {
        if (1 === shuffleDeck[i]) {
          console.log(`position of number 1 card after 7th shuffle ${i + 1}`);
        }
      }
      console.log(shuffleDeck);
    }

    if (1 === shuffleDeck[51]) {
      // for the top card to be in the bottom position it needs to be in the 51 index
      console.log(`top card becomes the bottom card after ${i + 1} shuffles`);
      console.log(shuffleDeck);
    }

    for (
      let i = 0, shuffleCounter = 0;
      i < shuffleDeck.length;
      i++, shuffleCounter++
    ) {
      if (shuffleDeck[i] === (1 || 52) && shuffleDeck[i + 1] === (52 || 1)) {
        console.log(
          `first and last cards in the deck touch after ${shuffleCounter} shuffles`
        );
        console.log(shuffleDeck);
      }
    }
  }
}

let cardDeck = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41,
  42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52,
];

console.log(riffleShuffle(cardDeck));
