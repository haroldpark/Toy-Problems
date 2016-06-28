function spiralTraversal (matrix) {
  // Write your code here, and
  // return your final answer.
  var xmax = matrix.length - 1;
  var xmin = 0;
  var ymax = matrix[0].length - 1;
  var ymin = 0;
  var result = [];

  if(matrix.length === 1) return matrix[0]


  var checkMinMax = function (x_min, x_max, y_min, y_max) {
		return x_min <= x_max && y_min <= y_max;
	}

  var left_edge = function (x_min, x_max, y_min, y_max) {
  	for(var i = x_max; i>=x_min; i--) {
  		result.push(matrix[i][y_min]);
  	}
  	y_min++;
  }

  var top_edge = function (x_min, x_max, y_min, y_max) {
  	for(var i = y_min; i<=y_max; i++) {
  		result.push(matrix[x_min][i]);
  	}
  	x_min++;
  }

  var right_edge = function (x_min, x_max, y_min, y_max) {
  	for (var i = x_min; i<=x_max; i++) {
  		result.push(matrix[i][y_max]);
  	}
  	y_max--;
  }

  var bottom_edge = function (x_min, x_max, y_min, y_max) {

  	for (var i = y_max; i>=y_min; i--) {
  		result.push(matrix[x_max][i]);
  	}
  	x_max--;
  }

	var fxs = [top_edge, right_edge, bottom_edge, left_edge]
	var recurse = function (x_min, x_max, y_min, y_max, index) {


		fxs[index](x_min, x_max, y_min, y_max);
		if(index === 0) {
			x_min++;
		}
		if (index === 1) {
			y_max--;
		}
		if (index === 2) {
			x_max--;
		}
		if (index === 3) {
			y_min++;
			index = -1;
		}

		if(checkMinMax(x_min, x_max, y_min, y_max)) recurse(x_min, x_max, y_min, y_max, ++index);
	}

	recurse(xmin, xmax, ymin, ymax, 0);

 return result;
}
