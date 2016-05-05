// Integer Reverse
// Given a positive integer n, return its digits reversed. DO NOT CONVERT n INTO A STRING OR ARRAY. Only use integers and math in your solution.

function reverseInteger (n) {
  // Write your code here, and
  // return your final answer.
  var result = 0;
  var places = 1;

  var reduce_num = function(){
    if(n > 10){
      n = n / 10;
      reduce_num();
    }
  }

  reduce_num();

	 var recurse = function (n){
	 	if(n % 10 === 0){
	 		n = n / 10;
	 	}
	 	n = n.toFixed(13);
	  var keke = parseInt(Math.floor(n).toFixed(13));
    result += keke * places;
    n = n - keke;
    n = n*10;
    places = places * 10;

    if(n % 1 !== 0 && n% 1 > .9999){
    	n = Math.round(n);
    }
    if(n !== 0){
    	recurse(n);
    }
	}
  recurse(n);
  return result;
}
