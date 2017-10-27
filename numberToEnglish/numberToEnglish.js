/**
* Extend the Number prototype with a new method called `toEnglish`.
* It should return the number as a string using English words.
* Examples:
*   (7).toEnglish(); // > "seven"
*   (575).toEnglish(); // > "five hundred seventy-five"
*   (78193512).toEnglish(); // > "seventy-eight million one hundred ninety-three thousand five hundred twelve"
*
* Extra credit: Make your function support decimals.
* Example:
*   (150043.273).toEnglish() // > "one hundred fifty thousand forty-three and two hundred seventy three thousandths"
*
 */

var Number = function(num){
  var num = num.toString(10);
  this.val = num;

   this.numbersToWords = {
  0: 'zero',
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
  10: 'ten',
  11: 'eleven',
  12: 'twelve',
  13: 'thirteen',
  14: 'fourteen',
  15: 'fifteen',
  16: 'sixteen',
  17: 'seventeen',
  18: 'eighteen',
  19: 'nineteen',
  20: 'twenty',
  30: 'thirty',
  40: 'forty',
  50: 'fifty',
  60: 'sixty',
  70: 'seventy',
  80: 'eighty',
  90: 'ninety',
};
 this.numbersToPlace = {
  10: 'ten',
  100: 'hundred',
  1000: 'thousand',
  1000000: 'million',
  1000000000: 'billion',
  1000000000000: 'trillion',
  1000000000000000: 'quadrillion',
  1000000000000000000: 'quintillion',
};
 
};

Number.prototype.toEnglish = function () {
  // return my value as english words
  //in:number
  //out: string
  //console.log('345'.split(''));
  var digits = this.val.split('');
    console.log(digits.length);

  if(digits.length === 1){
 var number = parseInt(digits, 10);
    console.log(number);  
  }
  if(digits.length === 2){
      console.log(this.numbersToPlace[10]);

  }
   if(digits.length === 3){
      console.log(this.numbersToPlace[1000]);

  } 
  if(digits.length === 4){
      console.log(this.numbersToPlace[10000]);

  }
   if(digits.length === 5){
      console.log(this.numbersToPlace[100000]);

  }
   if(digits.length === 6){
      console.log(this.numbersToPlace[1000000]);

  }
  else{
    var number = parseInt(digits, 10);
    console.log(number);
    //if(digits)

  }
  //console.log(this.val);
  //console.log(digits);
  //if(this.num >)
};

var test = new Number(30);
//console.log(test);
test.toEnglish();

// Number.toEn{

// }
