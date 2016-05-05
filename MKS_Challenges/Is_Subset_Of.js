// Is Subset Of
// Make an array method that can return whether or not a context array is a subset of an input array. To simplify the problem, you can assume that both arrays will contain only strings.

Array.prototype.isSubsetOf = function(target) {
  var array = this;
  var bool = true;
  for(var i=0; i<array.length; i++){
    if(target.indexOf(array[i]) === -1){
      bool = false;
    }
  }
  return bool;
};
