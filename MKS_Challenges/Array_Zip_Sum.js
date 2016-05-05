// Array Zip Sum
// Given two arrays of negative/positive integers, return a new array such that each element at index n is the sum of the two elements from the other arrays at their index n’s.

function zipSum (xs, ys) {
  var result = [];
  for(var i=0; i<Math.min(ys.length, xs.length); i++){
    result.push(xs[i] + ys[i]);
  }

  return result;
}
