// Deep Equality
// Write a function that, given two objects, returns whether or not the two are deeply equivalent–meaning the structure of the two objects is the same, and so is the structure of each of their corresponding descendants.
//
// DO NOT use JSON.stringify

deepEquals = function(a, b){
  var bool = true;

  var recurse = function(obj1, obj2){
    for(var key in obj1){
      if(!bool) break;
      if(obj1[key] !== obj2[key] && typeof obj1[key] !== 'object'){
        bool = false;
      }
      if((typeof obj1[key]) !== (typeof obj2[key])){
        bool = false;
      }
      if(typeof obj1[key] === 'object'){
        recurse(obj1[key], obj2[key]);
        recurse(obj2[key, obj1[key]]);
      }
    }
  }
    recurse(a,b);
    recurse(b,a);

  return bool;

};
