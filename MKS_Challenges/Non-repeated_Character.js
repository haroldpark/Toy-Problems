// Non-repeated Character
// Given an arbitrary input string, return the first non-repeating character. For strings with all repeats, return 'sorry'.

function firstNonRepeatedCharacter (str) {
  // Write your code here, and
  // return your final answer.
  var all_repeat = true;
  var result;

  for(var j=0; j<str.length; j++){
    var str_copy = str.substring(0,j) + str.substring(j+1);

    //base case
    if(str_copy.indexOf(str[j]) === -1){
      result = str[j];
      all_repeat = false;
      break;
    }
   }
  if(all_repeat) result = 'sorry';
  return result;
}
