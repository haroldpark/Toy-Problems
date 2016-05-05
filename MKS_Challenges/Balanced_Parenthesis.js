// Balanced Parenthesis
// Given a string, return true if it contains balanced parenthesis ().

function isBalanced (string) {
  if(string === ""){
    return true;
  }
  var bool = true;
  var leftparen_num = string.match(/\(/g).length;
  var rightparen_num = string.match(/\)/g).length;
  var condition1 = string.indexOf('(') > string.indexOf(')');
  var condition2 = string.lastIndexOf('(') > string.lastIndexOf(')');
  var condition3 = leftparen_num !== rightparen_num;


  //checking for false conditions
  if(condition1 || condition2 || condition3){
    bool = false;
  }
  return bool;
}
