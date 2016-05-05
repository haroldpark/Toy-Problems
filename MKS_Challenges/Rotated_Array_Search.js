// Shuffle Deck
// Given an array containing a deck of cards, implement a function that shuffles the deck. The helper function orderedDeck() is not necessary for your solution; it is provided to create an ordered deck if you debug your code in the console or using snippets.
//
// Example:
//
//  var deck = orderedDeck();
//  // ["A♥","2♥","3♥",...,"J♦","Q♦","K♦"]
//  shuffleDeck(deck);
//  // ["2♠","J♣","A♦", ... ,"7♣","8♣","K♠"]
// Note:
// A shuffled deck should be completely random. That means that a given card should be as likely as any other to appear in a given deck index, completely independent of the order of the input deck. Think carefully about how to be sure your algorithm generates a properly shuffled deck– it is easy to accidentally create a biased algorithm.

var shuffleDeck = function(deck) {
  //Your code here
  var new_deck = deck.slice();
    var index_i = deck.length - 1;

    while(index_i > -1){
      var index_new = Math.floor(Math.random() * index_i,1);
      var temp = new_deck[index_i];
      new_deck[index_i] = new_deck[index_new];
      new_deck[index_new] = temp;
      index_i -= 1;
    }
    return new_deck;
}
