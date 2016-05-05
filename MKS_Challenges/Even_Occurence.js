// Even Occurrence
// 3/4/16 UPDATE: If you solved this challenge previously, you may have to update your function name from evenOccurence (with 1 r) to evenOccurrence (with 2 rs)
//
// Find the first item that occurs an even number of times in an array. Remember to handle multiple even-occurrence items and return the first one. Return null if there are no even-occurrence items.

function evenOccurrence (arr) {
  // Write your code here, and
  // return your final answer.
  var output;

  for(var i=0; i<arr.length; i++){
    var countInArray = 0;
    for(var j=0; j<arr.length; j++){
      if(arr[i] === arr[j]){
        countInArray++;
      }
    }
    if(countInArray % 2 === 0){
      output = arr[i];
      break;
    }
  }

  if(output) return output;
  else return null;
}
