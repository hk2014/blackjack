


var primeTester = function(n) {
	//console.log(n);
	  for(var i = 2; i < n; i++){
    	if(n%i===0){
    	  console.log(i);
    		return false;
    	}

    	
  if (typeof n !== 'number' || n < 1 || n % 1 !== 0) {
    
  
  //       //console.log(n);

  //   // n isn't a number or n is less than 1 or n is not an integer
  
         
    		return false;
    	
  }
    return true;
  }
  // TODO: return true if n is prime, false otherwise
};

/* Extra credit: Write a function that generates a list of all prime numbers
 * in a user-specified range (inclusive). If you're not quite sure where to start,
 * check out the Sieve of Eratosthenes on Wikipedia. (And if you're feeling
 * saucy, check out the Sieve of Atkin.)
 */
 
 var primeSieve = function (start, end) {
   var prime = [];
   for(var i = start; i < end;i++){
     if(primeTester(i)){
       prime.push(i);
     }
   }
   return prime;
};
console.log(primeSieve(0,11));