// Telephone Words
// Each number key on a standard phone keypad has a set of Latin letters written on it as well: http://en.wikipedia.org/wiki/File:Telephone-keypad2.svg
//
// Businesses often try to come up with clever ways to spell out their phone number in advertisements to make it more memorable. But there are a lot of combinations!
//
// Write a function that takes up to four digits of a phone number, and returns a list of all of the words that can be written on the phone with that number. (You should return all permutations, not only English words.)

function telephoneWords (digitString) {
  // Write your code here, and
  // return your final answer.
  var results = [];

  var concat_recurse = function(string, index){
    //base case
    if(string.length === digitString.length){
      results.push(string);
    }
    else{
    //recursive case
      switch(digitString[index]){
        case '2':
          concat_recurse(string.concat('A'), index + 1);
          concat_recurse(string.concat('B'), index + 1);
          concat_recurse(string.concat('C'), index + 1);
          break;
        case '3':
          concat_recurse(string.concat('D'), index + 1);
          concat_recurse(string.concat('E'), index + 1);
          concat_recurse(string.concat('F'), index + 1);
          break;
        case '4':
          concat_recurse(string.concat('G'), index + 1);
          concat_recurse(string.concat('H'), index + 1);
          concat_recurse(string.concat('I'), index + 1);
          break;
        case '5':
          concat_recurse(string.concat('J'), index + 1);
          concat_recurse(string.concat('K'), index + 1);
          concat_recurse(string.concat('L'), index + 1);
          break;
        case '6':
          concat_recurse(string.concat('M'), index + 1);
          concat_recurse(string.concat('N'), index + 1);
          concat_recurse(string.concat('O'), index + 1);
          break;
        case '7':
          concat_recurse(string.concat('P'), index + 1);
          concat_recurse(string.concat('Q'), index + 1);
          concat_recurse(string.concat('R'), index + 1);
          concat_recurse(string.concat('S'), index + 1);
          break;
        case '8':
          concat_recurse(string.concat('T'), index + 1);
          concat_recurse(string.concat('U'), index + 1);
          concat_recurse(string.concat('V'), index + 1);
          break;
        case '9':
          concat_recurse(string.concat('W'), index + 1);
          concat_recurse(string.concat('X'), index + 1);
          concat_recurse(string.concat('Y'), index + 1);
          concat_recurse(string.concat('Z'), index + 1);
          break;
        default:
          concat_recurse(string.concat(digitString[index]), index + 1);
      }
    }
  }
  concat_recurse('',0);
  return results;
}
