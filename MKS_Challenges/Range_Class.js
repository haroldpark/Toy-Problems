// Range Class
// Build a class to represent a range of numbers that has:
//
// a beginning index
// an end index (optional). If there is no end index, the range should include only the passed-in start value.
// a ‘step’ (optional)
// The step is the interval at which elements are included. For instance, a step of 1 includes every element in the range, while a step of 2 includes every other element.
//
// You should allow a negative value for ‘step’ to count backwards. If no step is provided and the start is more than the end, assume we’re counting backwards.
//
// The range should have a constructor that accepts these arguments in this order:
//
// begining index
// end index
// step interval
// It should also support the following utility functions:
//
// size(): return the number of items represented by the range
// each(callback(index)): iterate over the range, passing each value to a callback function
// includes(index): return whether or not the range includes the passed value
// You should also be aware of the following caveats:
//
// Should return null if we are given no ‘start’ value.
// Range should use constant space, even during the each() method, * i.e. you should not use an array as backing storage.


var Range = function(start, end, step) {
  //Your code here
  this.start = start || null;
  this.end = end || null;

  if(step === undefined){
    if(start>end){
      this.step = -1;
    }
    if(end>start){
      this.step = 1;
    }
  }
  else{
    this.step = step;
  }
};


Range.prototype.size = function () {
  //Your code here
  if(this.end === null){
    return 1;
  }
  else{
    return Math.floor((this.end-this.start)/this.step) + 1;
  }
};

Range.prototype.each = function (callback) {
  //Your code here
  var result = [];
  if(this.start>this.end){
    for(var i = this.start; i>=this.end; i+= this.step){
      var unit = callback(i);
      result.push(unit);
    }
    return result;
  }
  if(this.end>this.start){
    for(var i = this.start; i<=this.end; i+=this.step){
      var unit = callback(i);
      result.push(unit);
    }
    return result;
  }
};

Range.prototype.includes = function (val) {
  //Y(our code here
  var bool = false;
  if(val === this.start){
    bool = true;
  }
  else if(val>this.start && val<this.end){
    if((this.end - val - 1) % this.step === 0){
      bool = true;
    }
  }
  return bool;

};
