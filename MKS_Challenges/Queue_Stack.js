// Queue Stack
// Write a stack. Once you’re done, implement a queue using two stacks. Do not create a storage array for your queue.

var Stack = function() {
  var storage = [];

  this.push = function(value){
    storage.push(value);
  };

  this.pop = function(){
    var copy = storage[0];
    storage.splice(0, 1);
    return copy;
  };

  this.size = function(){
    return storage.length;
  };
};

var Queue = function() {

  var inbox = new Stack();
  var outbox = new Stack();

  this.enqueue = function(value){
    inbox.push(value);
  };

  this.dequeue = function(){
    return inbox.pop();
  };

  this.size = function(){
    return inbox.size();
  };
};
