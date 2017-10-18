/*
* Write a function that generates every sequence of throws a single
* player could throw over a three-round game of rock-paper-scissors.
*
* Your output should look something like:
*   [["rock", "rock", "rock"],
*    ["rock", "rock", "paper"],
*    ["rock", "rock", "scissors"],
*    ["rock", "paper", "rock"],
             ...etc...
     ]
*
* Extra credit:
*   - Make your function return answers for any number of rounds.
* Example:
* rockPaperScissors(5); // => [['rock', 'rock', 'rock', 'rock', 'rock'], etc...]
*
*/

//spec:
//in: number
//out: array of strings


//justification:
//this function will be used  to list all the possible output

//explantion:
//in: function takes in number as an input in order for function to decide how many elements to give as output 


//pseudo:
//creat an empty arr
//generate random value
//populate each generated value as elements of the array
//return the array


var rockPaperScissors = function (val) {
  // TODO: your solution here
  var cnt = val;
  var combos = [];
  var plays = ['rock', 'scissors', 'paper'];
  var arr = [];

  // var traverse = function(play){
 


  
  // 	while(plays.length){
  // 		traverse(plays[plays.length])
  //       plays.length--;
  // 	}
   
for(var i = 0; i < cnt; i++){
  for(var j = 0; j < plays.length; j++){
    for(var h = 0; h < plays.length; h++){
      for(var k = 0; k < plays.length; k++){
        arr.push(plays[j],plays[h],plays[k])
      }
    }
  }
}
console.log(arr);
};


console.log(rockPaperScissors(3))
//   for(var i = 0; i < cnt; i++){
//   	if(cnt > plays.length)
//   		var leng = (cnt - plays.length-1);

//   	arr.push(plays[leng])
//   	else{
//   		arr.push(plays[i])
//   	}
//   	for(var j = 0; j < cnt;j++)
//   	{
// 	    arr.push(plays[j]);
	
// 	  for(var h = 0; h < plays.length;h++){
// 	  	arr.push(plays[h]);
//     combos.push(arr)

// 	  }

//   }

// }

// console.log(combos);
// };
// rockPaperScissors(3);
