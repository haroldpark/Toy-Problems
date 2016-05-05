// Character Frequency
// Write a function that takes as its input a string and returns an array of arrays as shown below sorted in descending order by frequency and then by ascending order by character.

function characterFrequency (string) {
  // Write your code here, and
  // return your final answer.
  var memory = [];
  for(var i=0; i<string.length; i++){
    if(memory.indexOf(string[i]) === -1){
      memory.push(string[i]);
    }
  }

  var count = 0;
  for(var i=0; i<memory.length; i++){
    for(var j=0; j<string.length; j++){
      if(memory[i] === string[j]){
        count++;
      }
    }
    memory[i] = [memory[i], count];
    count = 0;
  }

  for(var j=0; j<memory.length - 1; j++){
    for(var i=0; i<memory.length - 1; i++){
      if(memory[i][1] < memory[i+1][1]){
        var temp = memory[i];
        memory[i] = memory[i+1];
        memory[i+1] = temp;
      }

      if(memory[i][1] === memory[i+1][1]){
        if(memory[i][0] > memory[i+1][0]){
            var temp = memory[i];
            memory[i] = memory[i+1];
            memory[i+1] = temp;
        }
      }
    }
  }
  return memory;
}
