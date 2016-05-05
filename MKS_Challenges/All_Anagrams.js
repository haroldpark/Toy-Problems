// All Anagrams
// Given a single input string, write a function that produces all possible anagrams of a string and outputs them as an array. At first, don’t worry about repeated strings. What time complexity is your solution?
//
// Parameters:
// string (required) - a string of characters.

function allAnagrams (string) {
  var results = [];

  var chars = string.split('');
  var recurse = function(chars, string){


    for(var i=0; i<chars.length; i++){

      var chars_copy = chars.slice();
      var string_copy = string;
      string_copy += chars_copy[i];
      chars_copy.splice(i, 1);
      if(chars_copy.length === 0 && results.indexOf(string_copy) === -1){
        results.push(string_copy);
      }
      else{
        recurse(chars_copy, string_copy);
      }
    }
  }

  recurse(chars, '');
  return results;
}
