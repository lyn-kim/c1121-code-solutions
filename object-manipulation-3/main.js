console.log('Lodash is loaded:', typeof _ !== 'undefined');

var players = [
  {
    name: 'alice',
    hand: null
  },
  {
    name: 'bob',
    hand: null
  },
  {
    name: 'clark',
    hand: null
  },
  {
    name: 'dan',
    hand: null
  }
];

const suit = ['club', 'diamond', 'heart', 'spade'];
const rank = ['ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'jack', 'queen', 'king'];

const deck = [];
function createDeck() {
  for (var i = 0; i < suit.length; i++) {
    for (var j = 0; j < rank.length; j++) {
      const card = {
        suit: suit[i],
        rank: rank[j]
      };
      deck.push(card);
    }
  }
  return deck;
}

createDeck();

const shuffledDeck = _.shuffle(createDeck());

function dealCards() {
  players[0].hand = [shuffledDeck.pop(), shuffledDeck.pop()];
  players[1].hand = [shuffledDeck.pop(), shuffledDeck.pop()];
  players[2].hand = [shuffledDeck.pop(), shuffledDeck.pop()];
  players[3].hand = [shuffledDeck.pop(), shuffledDeck.pop()];
}

dealCards();

function changeToNumber() {
  for (let i = 0; i < players.length; i++) {
    for (let j = 0; j < players[i].hand.length; j++) {
      if (players[i].hand[j].rank === 'ace') {
        players[i].hand[j].rank = 11;
      } else if (players[i].hand[j].rank === 'jack' || players[i].hand[j].rank === 'queen' || players[i].hand[j].rank === 'king') {
        players[i].hand[j].rank = 10;
      }
    }
  }
  return players;
}
changeToNumber();

function addScore() {
  for (let i = 0; i < players.length; i++) {
    players[i].finalScore = players[i].hand[0].rank + players[i].hand[1].rank;
  }
}
addScore();

players.sort(function (a, b) {
  return a.finalScore - b.finalScore;
});

function winner() {
  if (players[2].finalScore === players[3].finalScore) {
    console.log(`${players[2].name} and ${players[3].name} tied!`);
  } else {
    console.log(`${players[3].name} won!`);
  }
}

winner();
