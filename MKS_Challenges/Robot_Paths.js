// Robot Paths
// A robot located at the top left corner of an n x n grid is trying to reach the bottom right corner. The robot can move either up, down, left, or right, but cannot visit the same spot twice. How many possible unique paths are there to the bottom right corner?
//
// Make your solution work for a grid of any size.
//
// Parameters:
//
// n (required) - amount of rows/columns (max 6)

function robotPaths (n) {
  // Write your code here, and
  // return your final answer.
  var board = makeBoard(n);
  var count = 0;

  var recurse = function(x, y, board){
    board.togglePiece(x,y);
    var isInBounds = function (x, y){
      return x < n && 0 <= x && 0 <= y && y < n;
    }


    if(x === n-1 && y === n-1){
        count++;
    }

    console.log(board)
    //Move Right
    if(isInBounds(x,y+1) && !board.hasBeenVisited(x,y+1)){
        console.log("INSIDE RIGHT")
        var copy = board;
        recurse(x,y+1, copy);
    }
    //Move left
    if(isInBounds(x,y-1) && !board.hasBeenVisited(x,y-1)){
        console.log("INSIDE HERE");
        var cop = board;
        recurse(x,y-1, cop);
    }
    //Move down
    if(isInBounds(x+1,y) && !board.hasBeenVisited(x+1,y)){
        var copy = board;
        recurse(x+1,y, copy);
    }
    //Move up
    if(isInBounds(x-1,y) && !board.hasBeenVisited(x-1,y)){
        var copy = board;
        recurse(x-1,y, copy);
    }


  }

  recurse(0,0, board);
  return count;
}
