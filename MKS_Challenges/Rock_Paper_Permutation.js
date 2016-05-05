// Rock Paper Permutation
// Given a number of rounds n, return all the possible rock-paper-scissors play possibilities for that number of rounds.

function rockPaperPermutation (roundCount) {
  // Write your code here, and
  // return your final answer.
  var rpsArray = ['r','p','s'];
  var result = [];
  //the number of things in array = 3^(count)
  //the number of things that start with r = 3^(count - 1)
  //the length of each element will be roundCount
  var recurse = function(array){
    if(array.length === roundCount){
      result.push(array.join(''));
      return;
    }

    for(var i=0; i< rpsArray.length; i++){
      var curr = rpsArray[i];
      recurse(array.concat(curr));
      console.log(array);
    }

  }
  if(roundCount !== 0) recurse([]);
  return result;
}

rockPaperPermutation(3);
