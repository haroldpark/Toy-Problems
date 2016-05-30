var tensToWords = function (hundreds, tens, ones) {
	var lasttwo;
	if (tens + ones < 20 && tens + ones > 10) {
		lasttwo = numbersToWords[tens + ones]
	}
	else if (tens > 0) {
		if(ones > 0) lasttwo = numbersToWords[tens] + '-' + numbersToWords[ones];
		else lasttwo = numbersToWords[tens]
	}
	else if (ones > 0) {
		lasttwo = numbersToWords[ones]
	}
	else {
		lasttwo = '';
	}

	if (hundreds > 0) return numbersToWords[hundreds] + " hundred " + lasttwo;
	else return lasttwo;
}

var placesToWords = function (place) {
	if (numbersToPlace[place]) return ' ' + numbersToPlace[place];
	else return '';
}

function numberToEnglish (number) {
  if (number === 0) return "zero";
  var output = '';
  var numberCopy = number;

  var places = [1000000000000000000, 1000000000000000, 1000000000000, 1000000000, 1000000, 1000];

  for (var i=0; i< places.length; i++) {
  	var digits = Math.floor(numberCopy / places[i]);
  	if(digits >= 1) {
  		var hundredsPlace = Math.floor(digits / 100);
  		var tens = Math.floor(digits % 100 /10) * 10;
  		var ones = digits % 10;
  		var digitsToWords = tensToWords(hundredsPlace, tens, ones);
  		var zeroesToWords = placesToWords(places[i]);
  		output = output.concat(digitsToWords).concat(zeroesToWords + ' ');
  		numberCopy -= digits * places[i];
  	}
  }

  var hunnit = Math.floor(numberCopy / 100);
  var doubles = Math.floor(numberCopy % 100 /10) * 10;
  var one = numberCopy % 10;
  var lastone = tensToWords(hunnit, doubles, one);
  output = output.concat(lastone);

  if (output[output.length - 1] === ' ') output = output.substring(0, output.length - 1);
  return output;
}
