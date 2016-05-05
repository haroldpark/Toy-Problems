// Compose
// Compose should return a function that is the composition of a list of functions of arbitrary length. Each function is called on the return value of the function that follows.
//
// You can think of compose as moving right to left through its arguments.
//
// Example
// var greet = function(name){ return 'hi: ' + name;}
// var exclaim = function(statement) { return statement.toUpperCase() + '!';}
//
// var welcome = compose(greet, exclaim);
// welcome('phillip'); //=> 'hi: PHILLIP!'
//
// var compose = function(){
//   //Your code here
//   var args = Array.prototype.slice.call(arguments);
//   return function(n_arg){
//     return args.reduceRight(function(prev, curr){
//       return curr.apply(this, arguments);
//     }, n_arg);
//   }
// };


var pipe = function(){
  //Your code here
  var args = Array.prototype.slice.call(arguments);
  return function(n_arg){
    return args.reduce(function(prev, curr){
      return curr.apply(this, arguments);
    }, n_arg);
  }
};
