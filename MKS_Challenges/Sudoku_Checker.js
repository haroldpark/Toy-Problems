function sudokuCheck (boardStr) {
  // Write your code here, and
  // return your final answer.
  var array = boardStr.split('\n');
  for (var i=0; i<array.length; i++) {
    var xtotal = 0;
    var ytotal = 0;
    for (var j=0; j<array[i].length; j++) {
      xtotal += parseInt(array[i][j]);
      ytotal += parseInt(array[j][i])
    }
    if (xtotal !== 45 || ytotal !== 45) {
    	return "invalid"
    }
  }

  for (var i=0; i<array.length; i+=3) {

  	for(var j=0; j<array.length; j+=3) {
  		var blocktotal = 0;
  		for (var x=0; x<3; x++){
  			for (var y=0; y<3; y++) {
  				blocktotal += parseInt(array[i+x][j+y]);
  			}
  		}
  		if (blocktotal !== 45) return "invalid";
  	}
  }

  return "solved"
}
