
/**
 * Given a roman numeral as input, write a function that converts the roman
 * numeral to a number and outputs it.
 *
 * Ex:
 * translateRomanNumeral("LX") // 60
 *
 * When a smaller numeral appears before a larger one, it becomes
 * a subtractive operation. You can assume only one smaller numeral
 * may appear in front of larger one.
 *
 * Ex:
 * translateRomanNumeral("IV") // 4
 *
 * You should return `null` on invalid input.
 */
   

var DIGIT_VALUES = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000
};

var translateRomanNumeral = function(romanNumeral) {
// TODO: Implement me!
	 //if(!DIGIT_VALUES[])

	  var num=0;  
	  rom = romanNumeral.toUpperCase();
	  var len = rom.length -1;

	  for (var i = len; 0 <= i ; i--) {
	    if (!DIGIT_VALUES[rom[i]]){
	    	return "null";	
	    }else{
	    	if(DIGIT_VALUES[rom[i]] < DIGIT_VALUES[rom[i+1]]){
	    		num -= DIGIT_VALUES[rom[i]];

	    	}else{
	    		num += DIGIT_VALUES[rom[i]];

	    	}
	    }
	 }
	  return num;  
};
console.log(translateRomanNumeral("lx") ); 
