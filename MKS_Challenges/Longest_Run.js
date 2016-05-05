// Longest Run
// Write a function that, given a string, finds the longest run of identical characters and returns an array containing the start and end indices of that run.
// If there are two runs of equal length, return the first one. Return [0,0] for no runs.

function longestRun (string) {
  // Write your code here, and
  // return your final answer.
  var store = {};
  var same_chars = false;
  var key = 0;

  for(var i=0; i<string.length; i++){
    if(same_chars && string[i] === string[i+1]){
      store[key][0]++;
    }

    //instantiate counter when we find 2 of the same chars consecutively
    if(same_chars===false && string[i] === string[i+1]){
      key = i;
      store[key] = [2];
      same_chars = true;
    }


    if(string[i] !== string[i+1]){
      if(same_chars === true){
        store[key].push(i);
      }
      same_chars = false;
    }
  }

  var longest = 0;
  var result = [0,0];

  for(var key in store){
    if(store[key][0]>longest){
      longest = store[key][0];
      result = [Number(key), store[key][1]];
    }
  }

  return result;

}
