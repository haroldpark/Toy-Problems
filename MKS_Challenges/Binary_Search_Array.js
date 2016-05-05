// Binary Search Array
// Given a sorted array of integers, find the index of a target value using a binary search algorithm.
//
// A binary search finds an item in a sorted array by repeatedly choosing a middle value and dividing the search interval in half. The initial interval includes the whole array. If the value of the target value is less than the middle value of the interval, then the next interval will be the lower half of the current interval. If the value of the target value is greater than the middle value, then the next interval will be the upper half. The search process repeats until the middle value is equal to the target value, or the search interval is empty.
//
//
// Note:
// Your function should return -1 for target values not in the array.
//
// Do NOT use Array.prototype.indexOf in your solution. What would be the fun in that?

function binarySearch (array, target) {
  var result;
  if(target> array[array.length-1] || target<array[0]){
    return -1;
  }
  else{
    var recurse = function(start, end){
      var midpoint = Math.floor((start+end)/2);

      if(array[midpoint] === target){
        result = midpoint;
      }
      if(array[midpoint] > target){
        if(array[midpoint-1] < target){
          result = -1;
        }
        else{
          recurse(start, midpoint-1);
        }
      }
      if(array[midpoint] < target){
        if(array[midpoint+1] > target){
          result = -1;
        }
        else{
          recurse(midpoint+1, end);
        }
      }
    }
  }
  recurse(0, array.length-1);
return result;
}
