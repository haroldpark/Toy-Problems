// Largest Product of Three
// Write a function that accepts an array of integers and returns the largest product possible from three of those numbers.

function largestProductOfThree (array) {
  // Write your code here, and
  // return your final answer.
  var result = 1;
  var temp = 0;

  var sort = function(arr){
   for(var j=0; j<arr.length; j++){
     for(var i=0; i<arr.length; i++){
      if(arr[i] > arr[i + 1]){
        temp = arr[i]
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
      }
    }

  }
  }
  sort(array);

  if(array.length === 3){
    for(var i=0; i<array.length; i++){
      result = result * array[i];
    }
  }
  else if(array.length < 3){
    result = undefined;
  }
  else{
    var one = array[0] * array[1] * array[2];
    var two = array[0] * array[1] * array[array.length - 1];
    var three = array[0] * array[array.length - 1] * array[array.length - 2];
    var four = array[array.length - 1] * array[array.length - 2] * array[array.length - 3];
    result = Math.max(one, two , three, four);

  }

  return result;
}
