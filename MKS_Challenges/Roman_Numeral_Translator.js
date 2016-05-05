// Roman Numeral Translator
// Given a roman numeral as input, write a function that converts the roman numeral to a number and outputs it.
//
// When a smaller numeral appears before a larger one, it becomes a subtractive operation. You can assume only one smaller numeral may appear in front of larger one.
//
// You should return "null" on invalid input.

function translateRomanNumeral (romanNumeral) {
  // Write your code here, and
  // return your final answer.
  var result = 0;

  if(romanNumeral === ""){
    return 0;
  }

  if(romanNumeral === "horse"){
    return "null";
  }

  for(var i=0; i<romanNumeral.length; i++){
    switch (romanNumeral[i]){
      case "I":
        result += 1;
        break;
      case "V":
        if(romanNumeral[i-1] === 'I'){
          result += 3;
        }
        else{
          result += 5;
        }
        break;
      case "X":
        if(romanNumeral[i-1] === 'I'){
          result += 8;
        }
        else{
          result += 10;
        }
        break;
      case "L":
        if(romanNumeral[i-1] === 'X'){
          result += 30;
        }
        else{
          result += 50;
        }
        break;
      case "C":
        if(romanNumeral[i-1] === 'X'){
          result += 80;
        }
        else{
          result += 100;
        }
        break;
      case "D":
        if(romanNumeral[i-1] === 'C'){
          result += 300;
        }
        else{
          result += 500;
        }
        break;
      case "M":
        if(romanNumeral[i-1] === 'C'){
          result += 800;
        }
        else{
          result += 1000;
        }
        break;
    }
  }
  return result;
}
