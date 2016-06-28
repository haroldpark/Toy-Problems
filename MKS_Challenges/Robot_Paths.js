// Robot Paths
// A robot located at the top left corner of an n x n grid is trying to reach the bottom right corner. The robot can move either up, down, left, or right, but cannot visit the same spot twice. How many possible unique paths are there to the bottom right corner?
//
// Make your solution work for a grid of any size.
//
// Parameters:
//
// n (required) - amount of rows/columns (max 6)

function robotPaths (n) {
  var board = makeBoard(n);
  var count = 0;

  var recurse = function (x,y) {
  	if(x === n-1 && y=== n-1) {
  		count++;
  		return;
  	}
  	if(x > n-1 || x < 0 || y > n-1 || y < 0 || board.hasBeenVisited(x,y)) {
  		return;
  	}
  	board.togglePiece(x,y);
  	recurse(x+1, y);
  	recurse(x-1, y);
  	recurse(x,y+1);
  	recurse(x,y-1);
  	board.togglePiece(x,y);
  }

  recurse(0,0);
  return count;
}
