console.log('Lodash is loaded:', typeof _ !== 'undefined');

var players = [
  {
    player1: 'alice',
    hand: null
  },
  {
    player2: 'bob',
    hand: null
  },
  {
    player3: 'clark',
    hand: null
  },
  {
    player4: 'dan',
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

const shuffledDeck = [];
function shuffle() {
  shuffledDeck.push(_.shuffle(deck));
  for (let i = 0; i < shuffledDeck[0].length; i++) {
    shuffledDeck.push(shuffledDeck[0][i]);
  }
  shuffledDeck.shift();
}

shuffle();
console.log('shuffled deck:', shuffledDeck);
