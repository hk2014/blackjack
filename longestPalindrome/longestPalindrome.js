/**
* Implement a function that finds the longest palindrome in a given string.
* For example, in the string "My dad is a racecar athlete", the longest
* palindrome is "a racecar a". Count whitespaces as valid characters. Other
* palindromes in the above string include "dad", "ete", " dad " (including
* whitespace on each side of dad).
*/
//in: string
//out: string


var longestPalindrome = function (string) {
	var str;
	for(var i = string.length; 0 < i; i--){
		for(var j = 0; j < string.length; j++){
				str = string.slice(j,i);
    	if(str === str.split('').reverse().join('')){
    		return str;
    	}
		}
    
	}
};

//console.log(longestPalindrome('a dad a'));

































