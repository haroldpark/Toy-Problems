// Arrayception
// Given an array of arbitrarily nested arrays, return n, where n is the deepest level that contains a non-array value.

function arrayception (array) {
  var count = 0;
  var recurse = function (subarray, inception_count) {
    if(Array.isArray(subarray)){
      if(subarray.length){
	      inception_count++;
		    for(var i=0; i<subarray.length; i++){
		   	  recurse(subarray[i], inception_count);
		    }
	    }
    }
    else{
  	  if(inception_count > count) count = inception_count;
  	}
  }
  recurse(array, 0);
  return count;
}
