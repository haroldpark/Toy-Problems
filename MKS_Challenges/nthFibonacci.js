// Power Set
// Return an array that contains the power set of a given string. The power set is a set of all the possible subsets, including the empty set.
//
// Make sure your code does the following:
//
// All characters in a subset should be sorted alphabetically, and the array of subsets should be sorted alphabetically.
// Sets of the same characters are considered duplicates regardless of order and count only once, e.g. ‘ab’ and ‘ba’ are the same.
// Duplicate characters in strings should be ignored; for example, ‘obama’ should be evaluated as if it only contained one ‘a’. See the result below.

function powerSet (string) {
  // Write your code here, and
  // return your final answer.

  var results = [''];

  var string_chars = string.split('');
  var new_string = [];

  //get rid of repeating characters in string
  for(var i=0; i<string_chars.length; i++){
    if(new_string.indexOf(string_chars[i]) === -1){
      new_string.push(string_chars[i]);
    }
  }

  new_string = new_string.join('');


  var recurse = function(start, substring_length, prefix){
    for(var i=start; i<new_string.length; i++){

      var new_prefix = prefix + new_string[i];
      if(substring_length>0){
        recurse(i+1, substring_length-1, new_prefix);
      }
      if(substring_length === 0){
        results.push(new_prefix);
      }
    }
  }

  //make every combination, without repeats
  for(var i=0; i<new_string.length; i++){
    recurse(0, i, '');
  }

  //sort each substring
  for(var i=0; i<results.length; i++){
    var substring_chars = results[i].split('');
    substring_chars.sort();
    results[i] = substring_chars.join('');
  }

  return results.sort();

}
