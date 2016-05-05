// Hash Table
// Finish this implementation of a Hash Table. It should have the methods insert(), retrieve(), and remove(). Your hash table need not resize itself, but shall handle collisions.

var makeHashTable = function(){
  var table = {};
  var storage = [];
  var storageLimit = 1000;

  table.insert = function(key, value){
    var index = getIndexBelowMaxForKey(key, storageLimit);
    storage[index] = storage[index] || [];
    //YOUR CODE HERE
    var currentArray = storage[index];
    var exists = false;


    for(var i=0; i<currentArray.length; i++){
      if(currentArray[i][0] === key){
        currentArray[i][1] = value;
        exists = true;
        break;
      }
    }
    if(!exists){
      currentArray.push([key,value]);
    }
      // if(storage[index][0] === key){
      //   storage[index][0] = [key,value];
      // }
      // else{
      //   storage[index].push([key,value]);
      // }



  };

  table.retrieve = function(key){
    //YOUR CODE HEREvalues to
    var index = getIndexBelowMaxForKey(key, storageLimit);
    var currentArray = storage[index];
    if(currentArray){
      if(currentArray.length === 1){
        return currentArray[0][1];
      }
      else{
        for(var i=0; i<currentArray.length; i++){
          if(currentArray[i][0] === key){
            return currentArray[i][1];
          }
        }
      }
    }
    else{
      return undefined;
    }
  };

  table.remove = function(key){
    //YOUR CODE HERE
    var index = getIndexBelowMaxForKey(key, storageLimit);
    if(storage[index]){
       storage.splice(index, 1);
    }
  }
  return table;
};
var getIndexBelowMaxForKey = function(str, max){
 var hash = 0;
 for (var i = 0; i < str.length; i++) {
   hash = (hash<<5) + hash + str.charCodeAt(i);
   hash = hash & hash; // Convert to 32bit integer
   hash = Math.abs(hash);
 }
 return hash % max;
};
