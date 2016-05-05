// Merge Sort
// Implement a function that sorts an array of numbers using the “mergesort” algorithm.
//
// Mergesort uses a divide-and-conquer strategy. It begins by treating the input list of length N as a set of N “sublists” of length 1, which are considered to be sorted. Adjacent sublists are then “merged” into sorted sublists of length 2, which are merged into sorted sublists of length 4, and so on, until only a single sorted list remains. (Note, if N is odd, an extra sublist of length 1 will be left
// after the first merge, and so on.)
//
// This can be implemented using either a recursive (“top-down”) or an iterative (“bottom-up”) approach.

function mergeSort(arr){
  var merge = function(array1, array2){
    var results = [];
    while(array1.length && array2.length){
      if(array1[0] >= array2[0]){
        results.push(array2.shift());
      }
      else{
        results.push(array1.shift());
      }
    }

    while(array1.length){
      results.push(array1.shift());
    }
    while(array2.length){
      results.push(array2.shift());
    }
    return results;
  }


  if(arr.length === 1){
    return arr;
  }

  var midpoint = Math.floor(arr.length/2);

  var array1 = arr.slice(0,midpoint);
  var array2 = arr.slice(midpoint,arr.length);

  return merge(mergeSort(array1), mergeSort(array2));
}
