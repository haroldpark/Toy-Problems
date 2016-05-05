// Rotate Matrix
// Write a function that rotates a NxN matrix 90 degrees clockwise.
// A matrix, also called a 2-D array, is simply an array of arrays of values.
//
// 2x2 MATRIX EXAMPLE:
//
// [ [1, 2],
// [3, 4] ]
//
// Rotated:
//
// [ [3, 1],
// [4, 2] ]
//
// 4x4 MATRIX EXAMPLE:
//
// [ [ 1, 2, 3, 4],
// [ 5, 6, 7, 8],
// [ 9, “A”,”B”,”C”],
// [“D”,”E”,”F”,”G”] ]
//
// Rotated:
//
// [ [“D”, 9, 5, 1],
// [“E”, “A”, 6, 2],
// [“F”,”B”, 7, 3],
// [“G”,”C”, 8, 4] ]

function rotateMatrix (matrix) {
  // Write your code here, and
  // return your final answer.
  var size = matrix[0].length - 1;
  var new_matrix = [];

  //make a new matrix of same dimensions, with 0s filled in for placeholders
  for(var i=0; i<=size; i++){
    new_matrix.push([]);
    for(var j=0; j<=size; j++){
      new_matrix[i].push(0);
    }
  }

  //relocate top side
  for(var i=0; i<=size; i++){
    for(var j=0; j<=size; j++){
      new_matrix[j][size - i] = matrix[i][j];
    }
  }

  return new_matrix;
}
