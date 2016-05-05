// Sum Array
// Given an array of numbers, calculate the greatest contiguous sum of numbers in it. A single array item will count as a contiguous sum.

function sumArray (array) {
  // Write your code here, and
  // return your final answer.
  var max_sum;
  var curr_sum=0;
  for(var i=0; i<array.length; i++){
    for(var j=i; j<array.length; j++){
      curr_sum += array[j];
      if(!max_sum || curr_sum > max_sum){
        max_sum = curr_sum;
      }
    }
    curr_sum = 0;
  }
  return max_sum;
}
