// BubbleSort V.2
// Bubble sort is considered the most basic sorting algorithm in Computer Science. It works by starting at the first element of an array and comparing it to the second element:
//
// If the first element is greater than the second element, it swaps the two.
// It then compares the second to the third, and the third to the fourth, and so on.
// In this way, the largest values ‘bubble’ to the end of the array.
// Once it gets to the end of the array, it starts over and repeats the process until the array is sorted numerically.
// Implement a function that takes an array and sorts it using this technique.
//
// NOTE: DO NOT use JavaScript’s built-in sorting function (Array.prototype.sort).

function bubbleSort (input) {
  var temp = 0;
  var sorted;
  for(var i=0; i<input.length; i++){
    sorted = true;
    for(var j=0; j<input.length - 1; j++){
      if(input[j]> input[j+1]){
        temp = input[j];
        input[j] = input[j+1];
        input[j+1] = temp;
        sorted = false;
      }
    }
    if(sorted === true){
      break;
    }
  }
  return input;
}
