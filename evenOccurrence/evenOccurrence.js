/*
 * Find the first item that occurs an even number of times in an array.
 * Remember to handle multiple even-occurrence items and return the first one. 
 * Return null if there are no even-occurrence items.
*/

/*
 * example usage:
 * var onlyEven = evenOccurrence([1, 7, 2, 4, 5, 6, 8, 9, 6, 4]);
 * console.log(onlyEven); //  4
*/

//1.spec:
//input: Array of numbers
//output: number
//edge: return null if no even num

//2.justification: to get the first-occured even number

//3.explanation: function takes in array and gives the first even-occurrence

//4.visual:

//5.approximation: 
//iterate array
//check each elements to see if it's been occured previously
// if it's been occured then check if their index is the same
//if index is not the same then return the element of the index

//6.verification: 
//console.log(evenOccurrence([1,3,4,5,6]));


//7.implementation

var evenOccurrence = function(arr) {
  // Your code here.
  for(var i = 0; i < arr.length; i++){
  	for(var j = 0; j < arr.length; j++){
  	if(arr[i] === arr[j]){
  		if(arr.indexOf(arr[i]) !== arr.indexOf(arr[j])){
  			 return arr[i];

  		}
  	}
  }
  	  //return null
 }


};
console.log(evenOccurrence([1,3,4,5,6,6]));
