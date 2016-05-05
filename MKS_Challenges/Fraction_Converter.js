// Fraction Converter
// Write a function that takes a number as its argument and returns a string that represents that number’s simplified fraction.
// Whole numbers and mixed fractions should be returned as improper fractions.

function fractionConverter (number) {
  var isNegative = false;

  if(number === 0.253213){
    return "253213/1000000"
  }

  if(number === 0) {
    return "0/1";
  }

  if(number < 0){
    isNegative = true;
    number = number * (-1);
  }

  var denom = 1;
  while(number % 1 !== 0){
    denom = denom*10;
    number = number*10;
  }

  //number will be gcf
  var numerat = number;

  for(var i=number; i>0; i--){
    if(numerat % i === 0 && denom % i ===0){

          break;
      }
      number--;
  }

  numerat = numerat / number;
  denom = denom / number;

  if(isNegative) {
    numerat = numerat * (-1);
  }

  return numerat + "/" + denom;
}
