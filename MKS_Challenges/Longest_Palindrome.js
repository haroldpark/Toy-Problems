// Longest Palindrome
// Implement a function that finds the longest palindrome in a given string. For example, in the string “My dad is a racecar athlete”, the longest palindrome is “a racecar a”. Count whitespaces as valid characters. Other palindromes in the above string include “dad”, “ete”, “ dad “ (including whitespace on each side of dad).

function longestPalindrome (string) {
 var arr = string.split('');
 var longest = '';

 for(var x = 0; x < arr.length; x++) {
   for(var y = 0; y < arr.length; y++) {
     var str = arr.slice(x, y+1).join('');
     console.log(str);
     if(isPalindrome(str)) {
       if(str.length > longest.length) {
         longest = str;
       }
     }
   }
 }

 return longest;

 function isPalindrome(string) {
   return (string === string.split('').reverse().join(''));
 }
}
