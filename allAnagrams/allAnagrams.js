/**
 * Given a single input string, write a function that produces all possible anagrams
 * of a string and outputs them as an array. At first, don't worry about
 * repeated strings.  What time complexity is your solution?
 *
 * Extra credit: Deduplicate your return array without using uniq().
 */

/**
  * example usage:
  * var anagrams = allAnagrams('abc');
  * console.log(anagrams); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
  */

var allAnagrams = function(string) {
  // Your code here.
  //in:str
  //out:array
  var arr = [];
  var tran = function(str, letters){
  	//base
  	if(str.length === string.length){
  		arr.push(str);
  	}
  	else{
  		for(var i = 0; i < letters.length; i++){
  			tran(str+letters[i], letters.slice(0,i).concat(letters.slice(i+1)))	
  		}
  	}
  };
  tran('', string);
  return arr;
};
 var anagrams = allAnagrams('abc');
 // console.log(anagrams); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]