/*
 *  Write a function that takes as its input a string and returns an array of
 *  arrays as shown below sorted in descending order by frequency and then by
 *  ascending order by character.
 *
 *       :: Example ::
 *
 *  characterFrequency('mississippi') ===
 *  [
 *    ['i', 4],
 *    ['s', 4],
 *    ['p', 2],
 *    ['m', 1]
 *  ]
 *
 *       :: Example2 ::
 *
 *  characterFrequency('miaaiaaippi') ===
 *  [
 *    ['a', 4],
 *    ['i', 4],
 *    ['p', 2],
 *    ['m', 1]
 *  ]
 *
 *       :: Example3 ::
 *
 *  characterFrequency('mmmaaaiiibbb') ===
 *  [
 *    ['a', 3],
 *    ['b', 3],
 *    ['i', 3],
 *    ['m', 3]
 *  ]
 *
 */
//create an empty object called frequencies 
//loop through each char
  //if char exists in frequencies
    //increment count by one. 
  //else
    //just initialize the count by one.


var characterFrequency = function(string) {
  var obj = {};
  var result = [];
  for(var i = 0; i < string.length; i++){
    if(obj[string[i]]){
      obj[string[i]]++;
    }else{
      obj[string[i]]=1;
    }
    
  }
  for(var key in obj){
    
    result.push([key,obj[key]]);
  }
  return result;
};


console.log(characterFrequency('kitty'))
